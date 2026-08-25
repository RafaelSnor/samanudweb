import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import CalButton from '../components/CalButton'

export default function ContactPage() {

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
                    <h4>Correo Electrónico</h4>
                    <p><a href="mailto:informes@samanudfirma.com">informes@samanudfirma.com</a></p>
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
            
            <div className="contact-form-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="cal-cta-box" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1a2332', marginBottom: '12px', fontWeight: '600' }}>¿Prefieres agendar una reunión?</h3>
                <p style={{ color: '#4b5563', marginBottom: '20px', fontSize: '15px' }}>Programa una videollamada o reunión presencial en el horario que mejor te convenga.</p>
                <CalButton className="btn btn-primary" text="📅 Agendar Cita" />
              </div>

              <div className="separator" style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ flex: 1, borderBottom: '1px solid #e5e7eb' }}></div>
                <span style={{ padding: '0 15px', color: '#6b7280', fontSize: '14px', fontWeight: '500' }}>O envíanos un mensaje</span>
                <div style={{ flex: 1, borderBottom: '1px solid #e5e7eb' }}></div>
              </div>

              <ContactForm simplifiedServices={true} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

