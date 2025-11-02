'use client'

import { useState } from 'react'

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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

