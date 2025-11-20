import { NextRequest, NextResponse } from 'next/server'

// Mapeo de valores de servicio a sus etiquetas
const serviceLabels: { [key: string]: string } = {
  // Servicios simplificados (landing)
  'corporativo': 'Servicios Corporativos y Empresariales',
  'marcas': 'Propiedad Intelectual y Marcas',
  'inmobiliario': 'Derecho Inmobiliario',
  'familia': 'Derecho de Familia',
  'general': 'Asesoría Legal General',
  // Servicios completos (página de contacto)
  'empresas': 'Servicios para Empresas',
  'personas': 'Servicios para Personas Naturales',
  'constitucion': 'Constitución Empresarial',
  'contratos': 'Contratos y Asesoría Legal',
  'litigios': 'Litigios y Solución de Controversias',
  'other': 'Otro'
}

// Rate limiting: almacenar IPs y timestamps
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hora
const MAX_REQUESTS_PER_HOUR = 3 // Máximo 3 envíos por hora por IP (más estricto)

// Palabras clave de spam comunes (expandida)
const spamKeywords = [
  'viagra', 'cialis', 'casino', 'poker', 'loan', 'debt', 'credit',
  'make money', 'work from home', 'get rich', 'click here', 'buy now',
  'act now', 'limited time', 'urgent', 'winner', 'congratulations',
  'free money', 'guaranteed', 'no risk', 'investment opportunity',
  'seo services', 'backlinks', 'increase traffic', 'bitcoin', 'crypto',
  'forex', 'trading', 'binary options', 'weight loss', 'diet pills',
  'http://', 'https://', 'www.', '.com', '.net', '.org', 'click',
  'visit', 'website', 'link', 'promo', 'discount', 'offer', 'deal',
  'cheap', 'affordable', 'best price', 'low cost', 'sale', 'buy',
  'order now', 'call now', 'email us', 'contact us', 'subscribe',
  'newsletter', 'unsubscribe', 'opt out', 'marketing', 'advertisement',
  'ad', 'spam', 'bot', 'automated', 'test', 'testing', 'prueba'
]

// Dominios de email sospechosos (temporales, desechables)
const suspiciousEmailDomains = [
  'tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com',
  'throwaway.email', 'temp-mail.org', 'getnada.com', 'mohmal.com'
]

// Función para obtener IP del cliente
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const ip = forwarded?.split(',')[0] || realIP || 'unknown'
  return ip
}

// Función para limpiar entradas expiradas del rate limit
function cleanExpiredRateLimits() {
  const now = Date.now()
  Array.from(rateLimitMap.entries()).forEach(([ip, record]) => {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip)
    }
  })
}

// Función para verificar rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  
  // Limpiar entradas expiradas periódicamente (cada 100 requests aproximadamente)
  if (Math.random() < 0.01) {
    cleanExpiredRateLimits()
  }
  
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // Reset o primera vez
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= MAX_REQUESTS_PER_HOUR) {
    return false
  }

  record.count++
  return true
}

// Función para detectar spam en el contenido
function containsSpam(text: string): boolean {
  const lowerText = text.toLowerCase()
  
  // Verificar palabras clave
  if (spamKeywords.some(keyword => lowerText.includes(keyword.toLowerCase()))) {
    return true
  }
  
  // Detectar URLs (spam común)
  const urlPattern = /(https?:\/\/|www\.)[^\s]+/gi
  if (urlPattern.test(text)) {
    return true
  }
  
  // Detectar caracteres repetitivos (ej: "aaaaaa", "111111")
  const repetitivePattern = /(.)\1{4,}/gi
  if (repetitivePattern.test(text)) {
    return true
  }
  
  // Detectar demasiados números (spam común)
  const numbersOnly = text.replace(/\D/g, '')
  if (numbersOnly.length > text.length * 0.5 && text.length > 20) {
    return true
  }
  
  // Detectar demasiadas mayúsculas (spam común)
  const uppercaseCount = (text.match(/[A-Z]/g) || []).length
  if (uppercaseCount > text.length * 0.3 && text.length > 20) {
    return true
  }
  
  return false
}

// Función para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return false
  }

  // Verificar dominios sospechosos
  const domain = email.split('@')[1]?.toLowerCase()
  if (domain && suspiciousEmailDomains.some(susp => domain.includes(susp))) {
    return false
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, website, formTime } = body

    // 1. Verificar honeypot (campo oculto) - más estricto
    if (website && website.toString().trim().length > 0) {
      console.log('Spam detectado: honeypot activado', { website })
      return NextResponse.json(
        { error: 'Solicitud inválida' },
        { status: 400 }
      )
    }

    // 2. Verificar User-Agent (bots a menudo no tienen o tienen uno sospechoso)
    const userAgent = request.headers.get('user-agent') || ''
    if (!userAgent || userAgent.length < 10) {
      console.log('Spam detectado: User-Agent inválido o ausente')
      return NextResponse.json(
        { error: 'Solicitud inválida' },
        { status: 400 }
      )
    }

    // 3. Rate limiting
    const clientIP = getClientIP(request)
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit excedido para IP: ${clientIP}`)
      return NextResponse.json(
        { error: 'Has enviado demasiados mensajes. Por favor intenta más tarde.' },
        { status: 429 }
      )
    }

    // 4. Validar tiempo mínimo (los humanos tardan al menos 10 segundos)
    if (formTime !== undefined) {
      if (formTime < 10) {
        console.log('Spam detectado: formulario enviado muy rápido', { formTime })
        return NextResponse.json(
          { error: 'Por favor tómate tu tiempo para completar el formulario.' },
          { status: 400 }
        )
      }
      // También rechazar si es demasiado rápido (menos de 10 segundos)
      if (formTime > 3600) {
        // Más de 1 hora también es sospechoso (formulario abierto demasiado tiempo)
        console.log('Spam detectado: formulario abierto demasiado tiempo', { formTime })
        return NextResponse.json(
          { error: 'Por favor completa el formulario en un tiempo razonable.' },
          { status: 400 }
        )
      }
    }

    // 5. Validar campos requeridos
    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben ser completados' },
        { status: 400 }
      )
    }

    // 6. Validar email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Por favor proporciona un email válido.' },
        { status: 400 }
      )
    }

    // 7. Validar longitud de campos (evitar spam muy corto o muy largo)
    const nameTrimmed = name.trim()
    const messageTrimmed = message.trim()
    
    if (nameTrimmed.length < 3 || nameTrimmed.length > 100) {
      return NextResponse.json(
        { error: 'El nombre debe tener entre 3 y 100 caracteres.' },
        { status: 400 }
      )
    }

    if (messageTrimmed.length < 30 || messageTrimmed.length > 2000) {
      return NextResponse.json(
        { error: 'El mensaje debe tener entre 30 y 2000 caracteres.' },
        { status: 400 }
      )
    }

    // 8. Validar que el nombre no sea solo números o caracteres especiales
    const nameOnlyLetters = nameTrimmed.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    if (nameOnlyLetters.length < 2) {
      return NextResponse.json(
        { error: 'El nombre debe contener al menos 2 letras.' },
        { status: 400 }
      )
    }

    // 9. Detectar spam en el contenido (más estricto)
    const fullText = `${nameTrimmed} ${email} ${messageTrimmed}`
    if (containsSpam(fullText)) {
      console.log('Spam detectado: contenido sospechoso', { name: nameTrimmed.substring(0, 20), email })
      return NextResponse.json(
        { error: 'Tu mensaje contiene contenido no permitido.' },
        { status: 400 }
      )
    }

    // 10. Validar que el mensaje tenga contenido real (no solo espacios, números o caracteres especiales)
    const messageOnlyText = messageTrimmed.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '')
    if (messageOnlyText.length < 15) {
      return NextResponse.json(
        { error: 'El mensaje debe contener al menos 15 letras.' },
        { status: 400 }
      )
    }

    // Obtener la etiqueta del servicio
    const serviceLabel = serviceLabels[service] || service

    // Aquí puedes usar diferentes servicios de email:
    // Opción 1: Resend (recomendado - moderno y fácil)
    // Opción 2: Nodemailer con SMTP
    // Opción 3: SendGrid, Mailgun, etc.

    // Por ahora, enviaremos usando Resend (necesitas instalar: npm install resend)
    // Para usar esto, necesitas crear una cuenta en https://resend.com y obtener tu API key
    
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'informes@samanudfirma.com'

    if (!RESEND_API_KEY) {
      // Si no hay API key configurada, guardamos el mensaje en consola/logs
      console.log('=== NUEVO MENSAJE DE CONTACTO ===')
      console.log('Nombre:', name)
      console.log('Email:', email)
      console.log('Teléfono:', phone || 'No proporcionado')
      console.log('Servicio:', service)
      console.log('Mensaje:', message)
      console.log('==================================')
      
      // Retornamos éxito pero indicamos que se debe configurar el email
      return NextResponse.json(
        { 
          success: true, 
          message: 'Mensaje recibido. Configura RESEND_API_KEY para enviar emails automáticamente.',
          note: 'El mensaje se guardó en los logs del servidor'
        },
        { status: 200 }
      )
    }

    // Usar Resend para enviar el email
    const { Resend } = await import('resend')
    const resend = new Resend(RESEND_API_KEY)

    const emailSubject = `Nuevo mensaje de contacto - ${serviceLabel}`
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Open Sans', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f9fa; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); max-width: 600px;">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #4682B4 0%, #5a9bd4 100%); padding: 40px 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-family: 'Barlow', Arial, sans-serif; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      SAMANUD FIRMA
                    </h1>
                    <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                      Nuevo Mensaje de Contacto
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <!-- Información del Cliente -->
                    <div style="background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%); padding: 24px; border-radius: 10px; border-left: 5px solid #4682B4; margin-bottom: 30px;">
                      <h2 style="margin: 0 0 20px; color: #1a2332; font-family: 'Barlow', Arial, sans-serif; font-size: 20px; font-weight: 600;">
                        Información del Cliente
                      </h2>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 8px 0; color: #2d2d2d;">
                            <strong style="color: #4682B4; font-weight: 600; display: inline-block; min-width: 140px;">Nombre:</strong>
                            <span style="color: #1a2332;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #2d2d2d;">
                            <strong style="color: #4682B4; font-weight: 600; display: inline-block; min-width: 140px;">Email:</strong>
                            <a href="mailto:${email}" style="color: #4682B4; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td style="padding: 8px 0; color: #2d2d2d;">
                            <strong style="color: #4682B4; font-weight: 600; display: inline-block; min-width: 140px;">Teléfono:</strong>
                            <a href="tel:${phone}" style="color: #4682B4; text-decoration: none;">${phone}</a>
                          </td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td style="padding: 8px 0; color: #2d2d2d;">
                            <strong style="color: #4682B4; font-weight: 600; display: inline-block; min-width: 140px;">Servicio:</strong>
                            <span style="background: #FF6B35; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-block;">${serviceLabel}</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Mensaje -->
                    <div style="margin-bottom: 30px;">
                      <h2 style="margin: 0 0 16px; color: #1a2332; font-family: 'Barlow', Arial, sans-serif; font-size: 20px; font-weight: 600;">
                        Mensaje
                      </h2>
                      <div style="background: #ffffff; padding: 24px; border-radius: 10px; border: 2px solid #e5e7eb; border-left: 5px solid #FF6B35; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                        <p style="margin: 0; color: #2d2d2d; white-space: pre-wrap; font-size: 15px; line-height: 1.8;">${message}</p>
                      </div>
                    </div>
                    
                    <!-- Acción -->
                    <div style="background: linear-gradient(135deg, #4682B4 0%, #5a9bd4 100%); padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                      <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 600;">
                        ✉ Puedes responder directamente a este email para contactar al cliente
                      </p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #1a2332; padding: 30px 40px; text-align: center;">
                    <p style="margin: 0 0 12px; color: rgba(255, 255, 255, 0.8); font-size: 14px; font-weight: 600;">
                      SAMANUD FIRMA
                    </p>
                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      Lima, Perú
                    </p>
                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      <a href="tel:+51907239435" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">+51 907 239 435</a>
                    </p>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      <a href="mailto:informes@samanudfirma.com" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">informes@samanudfirma.com</a>
                    </p>
                    <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 20px 0;">
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 11px;">
                      Este mensaje fue enviado automáticamente desde el formulario de contacto de tu sitio web.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Email para la firma
    const { data, error } = await resend.emails.send({
      from: 'informes@samanudfirma.com',
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el email. Por favor intenta más tarde.' },
        { status: 500 }
      )
    }

    // Email de confirmación para el cliente
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Open Sans', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f9fa; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); max-width: 600px;">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #4682B4 0%, #5a9bd4 100%); padding: 40px 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-family: 'Barlow', Arial, sans-serif; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      ¡Gracias por Contactarnos!
                    </h1>
                    <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                      Hemos recibido tu mensaje
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 20px; color: #2d2d2d; font-size: 16px; line-height: 1.8;">
                      Hola <strong style="color: #1a2332;">${name}</strong>,
                    </p>
                    
                    <p style="margin: 0 0 20px; color: #2d2d2d; font-size: 16px; line-height: 1.8;">
                      Gracias por ponerte en contacto con <strong style="color: #4682B4;">SAMANUD FIRMA</strong>. Hemos recibido tu mensaje y estamos comprometidos en ayudarte con tu consulta sobre <strong style="color: #FF6B35;">${serviceLabel}</strong>.
                    </p>
                    
                    <div style="background: linear-gradient(135deg, #4682B4 0%, #5a9bd4 100%); padding: 24px; border-radius: 10px; margin: 30px 0; text-align: center;">
                      <p style="margin: 0; color: #ffffff; font-size: 15px; font-weight: 600; line-height: 1.8;">
                        Nuestro equipo revisará tu solicitud y te responderá en un plazo máximo de 24 horas.
                      </p>
                    </div>
                    
                    <p style="margin: 20px 0; color: #2d2d2d; font-size: 16px; line-height: 1.8;">
                      Mientras tanto, si tienes alguna pregunta urgente, no dudes en contactarnos directamente:
                    </p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 5px solid #FF6B35; margin: 20px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #4682B4; font-weight: 600;">📞 Teléfono:</strong>
                            <a href="tel:+51907239435" style="color: #4682B4; text-decoration: none; margin-left: 8px;">+51 907 239 435</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #4682B4; font-weight: 600;">✉️ Email:</strong>
                            <a href="mailto:informes@samanudfirma.com" style="color: #4682B4; text-decoration: none; margin-left: 8px;">informes@samanudfirma.com</a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <p style="margin: 20px 0 0; color: #2d2d2d; font-size: 16px; line-height: 1.8;">
                      Estamos aquí para ayudarte a alcanzar tus objetivos legales con excelencia y dedicación.
                    </p>
                    
                    <p style="margin: 20px 0 0; color: #2d2d2d; font-size: 16px; line-height: 1.8;">
                      Saludos cordiales,<br>
                      <strong style="color: #4682B4;">El equipo de SAMANUD FIRMA</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #1a2332; padding: 30px 40px; text-align: center;">
                    <p style="margin: 0 0 12px; color: rgba(255, 255, 255, 0.8); font-size: 14px; font-weight: 600;">
                      SAMANUD FIRMA
                    </p>
                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      Lima, Perú
                    </p>
                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      <a href="tel:+51907239435" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">+51 907 239 435</a>
                    </p>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 13px;">
                      <a href="mailto:informes@samanudfirma.com" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">informes@samanudfirma.com</a>
                    </p>
                    <p style="margin: 20px 0 0; color: rgba(255, 255, 255, 0.5); font-size: 11px;">
                      Este es un mensaje automático. Por favor, no respondas a este correo.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Enviar email de confirmación al cliente
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: 'informes@samanudfirma.com',
      to: email,
      subject: `Hemos recibido tu mensaje ${name}`,
      html: clientEmailHtml,
    })

    if (clientError) {
      console.error('Error enviando email de confirmación al cliente:', clientError)
      // No fallamos si el email de confirmación falla, solo lo registramos
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

