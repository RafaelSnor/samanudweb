import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section with integrated Navbar */}
      <section id="home" className="hero">
        <Navbar />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Santa Maria & Nudelman<br />Firma Legal</h1>
            <p className="hero-subtitle">
              Nuestro compromiso es garantizar la entrega oportuna de proyectos legales de alta calidad.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Solicitar Consulta</Link>
              <Link href="/services" className="btn btn-secondary">Nuestros Servicios</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-landing">
        <div className="container">
          <div className="services-landing-header">
            <h2 className="services-landing-title">Soluciones Jurídicas que Transforman tu Negocio</h2>
            <p className="services-landing-subtitle">Deja la complejidad legal en nuestras manos. Soluciones rápidas, estratégicas y 100% orientadas a resultados.</p>
          </div>
          <div className="services-landing-grid">
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Constitución Empresarial Rápida</h3>
              <p className="services-landing-card-text">Tu empresa operando en días, no semanas. Constitución Exprés, Profesional y Premium diseñadas para emprendedores que valoran su tiempo.</p>
              <Link href="/services" className="services-landing-link">Ver Servicios →</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Protección de Marcas e Innovación</h3>
              <p className="services-landing-card-text">Blindaje legal completo para tus ideas. Registro de marcas, diseños industriales y derechos de autor ante INDECOPI con respaldo profesional.</p>
              <Link href="/services" className="services-landing-link">Proteger Ahora →</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Contratos que Previenen Conflictos</h3>
              <p className="services-landing-card-text">Transformamos acuerdos en garantías. Contratos diseñados con enfoque preventivo que protegen tu empresa y fortalecen relaciones comerciales.</p>
              <Link href="/services" className="services-landing-link">Crear Contratos →</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Estrategia Corporativa y M&A</h3>
              <p className="services-landing-card-text">Acompañamiento en operaciones complejas. Gobierno societario, fusiones, adquisiciones y reestructuraciones con visión estratégica.</p>
              <Link href="/services" className="services-landing-link">Asesoría Corporativa →</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Proyectos Inmobiliarios Exitosos</h3>
              <p className="services-landing-card-text">Gestión legal integral desde estudios de títulos hasta habilitaciones urbanas. Tu proyecto inmobiliario con respaldo jurídico completo.</p>
              <Link href="/services" className="services-landing-link">Iniciar Proyecto →</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Defensa Legal Estratégica</h3>
              <p className="services-landing-card-text">Resolución de controversias con enfoque inteligente. Conciliación, arbitraje y negociación orientados a resultados, no a conflictos.</p>
              <Link href="/services" className="services-landing-link">Defender Mis Derechos →</Link>
            </div>
          </div>
          <div className="services-landing-cta">
            <p className="services-landing-cta-text">¿No encuentras lo que buscas?</p>
            <Link href="/contact" className="btn btn-primary">Consulta Personalizada Gratuita</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner - Only Mobile */}
      <section className="mobile-cta-banner">
        <div className="container">
          <p className="mobile-cta-text">¿No encuentras lo que buscas?</p>
          <Link href="/contact" className="btn btn-primary">Consulta Personalizada Gratuita</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-landing">
        <div className="container">
          <div className="about-landing-content">
            <div className="about-landing-main">
              <h2 className="about-landing-title">Nosotros somos tu mejor opción</h2>
              <p className="about-landing-lead">
                No somos solo abogados. Somos <strong>socios estratégicos</strong> que transforman desafíos legales en oportunidades de crecimiento.
              </p>
              <div className="about-landing-features">
                <div className="about-feature">
                  <h3 className="about-feature-title">Visión Estratégica Moderna</h3>
                  <p className="about-feature-text">Combinamos rigor jurídico tradicional con metodologías ágiles y tecnología. No esperamos a que surjan problemas: los prevenimos antes de que ocurran.</p>
                </div>
                <div className="about-feature">
                  <h3 className="about-feature-title">Transparencia Total</h3>
                  <p className="about-feature-text">Sin sorpresas, sin costos ocultos. Nuestros clientes saben exactamente qué esperar en cada paso. Relaciones basadas en confianza mutua, no en términos ambiguos.</p>
                </div>
                <div className="about-feature">
                  <h3 className="about-feature-title">Resultados Medibles</h3>
                  <p className="about-feature-text">No medimos el éxito por horas facturadas, sino por el impacto real en tu negocio. Empresas operando más rápido, marcas protegidas, proyectos sin obstáculos legales.</p>
                </div>
              </div>
            </div>
            <div className="about-landing-stats">
              <div className="about-stat-card">
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">Clientes con Resultados Garantizados</div>
                <div className="about-stat-desc">Cada caso con compromiso de excelencia</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Especialidades Jurídicas</div>
                <div className="about-stat-desc">Cobertura integral para tu negocio</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number">2</div>
                <div className="about-stat-label">Fundadores con Experiencia Compartida</div>
                <div className="about-stat-desc">Visión corporativa + ejecución operativa</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number">0</div>
                <div className="about-stat-label">Sorpresas o Costos Ocultos</div>
                <div className="about-stat-desc">Transparencia absoluta desde el día uno</div>
              </div>
            </div>
            <div className="about-landing-cta">
              <p className="about-cta-text">Conoce cómo podemos transformar tu operación legal</p>
              <Link href="/about" className="btn btn-primary">Conoce Nuestra Historia Completa</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA Banner - Only Mobile */}
      <section className="mobile-about-cta-banner">
        <div className="container">
          <p className="mobile-about-cta-text">Conoce cómo podemos transformar tu operación legal</p>
          <Link href="/about" className="btn btn-primary">Conoce Nuestra Historia Completa</Link>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nuestro Equipo</span>
            <h2 className="section-title">Conoce a Nuestros Fundadores</h2>
            <p className="section-description">
              Profesionales dedicados a brindar excelencia en cada caso.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Marco Antonio Santa María Norabuena</h3>
                <p className="team-role">Gerente General & Co-Fundador</p>
                <p className="team-bio">
                  Bachiller en Derecho por la Universidad de Lima. Cursa la Maestría en Derecho Civil en la Universidad Nacional Mayor de San Marcos. 
                  Cuenta con estudios en Derecho Civil, Inmobiliario, Registral y del Consumidor. 
                  Dirige la visión estratégica, académica y corporativa del Estudio.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Paula Viviana Nudelman Rosero</h3>
                <p className="team-role">Subgerente & Co-Fundadora</p>
                <p className="team-bio">
                  Abogada por la Universidad Cooperativa de Colombia (revalidación en trámite en Perú). 
                  Cuenta con estudios en Derecho Notarial, Registral e Inmobiliario, con énfasis en Tributación, 
                  Formalización y Compliance. Lidera la gestión operativa y la experiencia del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-label">Contáctanos</span>
              <h2 className="section-title">Estamos Aquí para Ayudarte</h2>
              <p className="contact-description">
                Ponte en contacto con nosotros para solicitar una consulta o conocer más sobre nuestros servicios.
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
            <ContactForm simplifiedServices={true} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
