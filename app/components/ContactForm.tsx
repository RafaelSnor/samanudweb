'use client'

import { useState, useRef, useEffect } from 'react'

interface ContactFormProps {
  showLabels?: boolean
  buttonText?: string
  simplifiedServices?: boolean
}

export default function ContactForm({ 
  showLabels = false, 
  buttonText = 'Enviar Mensaje',
  simplifiedServices = false 
}: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const formStartTime = useRef<number>(Date.now())
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Verificar honeypot (campo oculto que los bots llenan)
    const honeypot = formData.get('website')
    if (honeypot) {
      // Es un bot, no procesar
      setSubmitting(false)
      return
    }
    
    // Calcular tiempo transcurrido desde que se cargó el formulario
    const timeSpent = Math.floor((Date.now() - formStartTime.current) / 1000)
    
    const data = Object.fromEntries(formData)
    // Agregar tiempo transcurrido para validación en el servidor
    const dataWithTime = { ...data, formTime: timeSpent }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithTime),
      })

      const result = await response.json()

      if (response.ok) {
        alert('¡Gracias por tu mensaje! Te responderemos dentro de 24 horas.')
        form.reset()
      } else {
        alert(result.error || 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.')
    } finally {
      setSubmitting(false)
    }
  }

  const serviceOptions = simplifiedServices ? [
    { value: 'corporativo', label: 'Servicios Corporativos y Empresariales' },
    { value: 'marcas', label: 'Propiedad Intelectual y Marcas' },
    { value: 'inmobiliario', label: 'Derecho Inmobiliario' },
    { value: 'familia', label: 'Derecho de Familia' },
    { value: 'general', label: 'Asesoría Legal General' },
  ] : [
    { value: 'empresas', label: 'Servicios para Empresas' },
    { value: 'personas', label: 'Servicios para Personas Naturales' },
    { value: 'constitucion', label: 'Constitución Empresarial' },
    { value: 'marcas', label: 'Propiedad Intelectual y Marcas' },
    { value: 'contratos', label: 'Contratos y Asesoría Legal' },
    { value: 'corporativo', label: 'Derecho Corporativo' },
    { value: 'inmobiliario', label: 'Derecho Inmobiliario' },
    { value: 'familia', label: 'Familia y Sucesiones' },
    { value: 'litigios', label: 'Litigios y Solución de Controversias' },
    { value: 'other', label: 'Otro' },
  ]

  // Resetear tiempo cuando el componente se monta
  useEffect(() => {
    formStartTime.current = Date.now()
  }, [])

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot field - oculto para humanos, visible para bots */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
        <label htmlFor="website">No llenar este campo</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      
      <div className="form-group">
        {showLabels && <label htmlFor="name">Nombre Completo *</label>}
        <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
      </div>
      <div className="form-group">
        {showLabels && <label htmlFor="email">Correo Electrónico *</label>}
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder={showLabels ? "tu.email@ejemplo.com" : "Tu Correo Electrónico"} 
          required 
        />
      </div>
      <div className="form-group">
        {showLabels && <label htmlFor="phone">Número de Teléfono</label>}
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder={showLabels ? "+51 999 999 999" : "Tu Teléfono"} 
        />
      </div>
      <div className="form-group">
        {showLabels && <label htmlFor="service">Servicio Necesario *</label>}
        <select id="service" name="service" required>
          <option value="">Selecciona un Servicio</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        {showLabels && <label htmlFor="message">Mensaje *</label>}
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder={showLabels ? "Cuéntanos sobre tus necesidades legales..." : "Tu Mensaje"} 
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
        {submitting ? 'Enviando...' : buttonText}
      </button>
      {showLabels && (
        <p style={{ marginTop: '15px', fontSize: '0.875rem', color: 'var(--text-light)', textAlign: 'center' }}>
          Al enviar este formulario, aceptas nuestra Política de Privacidad.
        </p>
      )}
    </form>
  )
}

