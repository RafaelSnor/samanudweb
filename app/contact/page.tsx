'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    
    // Simulate form submission
    setTimeout(() => {
      alert('¡Gracias por tu mensaje! Te responderemos dentro de 24 horas.')
      e.currentTarget.reset()
      setSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Contacto</span>
          </div>
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Ponte en contacto para solicitar una consulta o conocer más sobre nuestros servicios.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-label">Ponte en Contacto</span>
              <h2 className="section-title">Nos Encantaría Escucharte</h2>
              <p className="contact-description">
                Si tienes una consulta legal, necesitas representación o deseas conocer más sobre nuestros servicios, 
                nuestro equipo está listo para asistirte. Completa el formulario o contáctanos directamente usando la información a continuación.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-text">
                    <h4>Ubicación</h4>
                    <p>Lima, Perú</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-text">
                    <h4>Teléfono</h4>
                    <p><a href="tel:+51907239435">+51 907 239 435</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:contacto@samanudfirma.com">contacto@samanudfirma.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-text">
                    <h4>Sitio Web</h4>
                    <p><a href="https://www.samanudfirma.com" target="_blank" rel="noopener noreferrer">www.samanudfirma.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Dirección de Email *</label>
                <input type="email" id="email" name="email" placeholder="tu.email@ejemplo.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Número de Teléfono</label>
                <input type="tel" id="phone" name="phone" placeholder="+51 999 999 999" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Servicio Necesario *</label>
                <select id="service" name="service" required>
                  <option value="">Selecciona un Servicio</option>
                  <option value="empresas">Servicios para Empresas</option>
                  <option value="personas">Servicios para Personas Naturales</option>
                  <option value="constitucion">Constitución Empresarial</option>
                  <option value="marcas">Propiedad Intelectual y Marcas</option>
                  <option value="contratos">Contratos y Asesoría Legal</option>
                  <option value="corporativo">Derecho Corporativo</option>
                  <option value="inmobiliario">Derecho Inmobiliario</option>
                  <option value="familia">Familia y Sucesiones</option>
                  <option value="litigios">Litigios y Solución de Controversias</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea id="message" name="message" rows={5} placeholder="Cuéntanos sobre tus necesidades legales..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              <p style={{ marginTop: '15px', fontSize: '0.875rem', color: 'var(--text-light)', textAlign: 'center' }}>
                Al enviar este formulario, aceptas nuestra Política de Privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="about" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-container">
            <p>Map View - Office Location</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-lighter)', marginTop: '10px' }}>
              (Map integration can be added here - Google Maps, Mapbox, etc.)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

