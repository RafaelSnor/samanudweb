import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import CalButton from './components/CalButton'
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
              <CalButton className="btn btn-primary" text="📅 Agendar Cita" />
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
              <Link href="/services" className="services-landing-link">Ver Servicios</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Protección de Marcas e Innovación</h3>
              <p className="services-landing-card-text">Blindaje legal completo para tus ideas. Registro de marcas, diseños industriales y derechos de autor ante INDECOPI con respaldo profesional.</p>
              <Link href="/services" className="services-landing-link">Proteger Ahora</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Contratos que Previenen Conflictos</h3>
              <p className="services-landing-card-text">Transformamos acuerdos en garantías. Contratos diseñados con enfoque preventivo que protegen tu empresa y fortalecen relaciones comerciales.</p>
              <Link href="/services" className="services-landing-link">Crear Contratos</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Estrategia Corporativa y M&A</h3>
              <p className="services-landing-card-text">Acompañamiento en operaciones complejas. Gobierno societario, fusiones, adquisiciones y reestructuraciones con visión estratégica.</p>
              <Link href="/services" className="services-landing-link">Asesoría Corporativa</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Proyectos Inmobiliarios Exitosos</h3>
              <p className="services-landing-card-text">Gestión legal integral desde estudios de títulos hasta habilitaciones urbanas. Tu proyecto inmobiliario con respaldo jurídico completo.</p>
              <Link href="/services" className="services-landing-link">Iniciar Proyecto</Link>
            </div>
            <div className="services-landing-card">
              <h3 className="services-landing-card-title">Defensa Legal Estratégica</h3>
              <p className="services-landing-card-text">Resolución de controversias con enfoque inteligente. Conciliación, arbitraje y negociación orientados a resultados, no a conflictos.</p>
              <Link href="/services" className="services-landing-link">Defender Mis Derechos</Link>
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
                <Image
                  src="https://drive.google.com/uc?export=view&id=1ePdiSFpDXkcAPXG-e8AcN5WcJDOoNTdv"
                  alt="Marco Santa María Norabuena"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  priority
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Marco Santa María Norabuena</h3>
                <p className="team-role">Gerente General & Co-Fundador</p>
                <p className="team-bio">
                  Abogado por la Universidad de Lima y maestrando en Derecho Civil (UNMSM). Lidera la visión estratégica y corporativa del Estudio, convirtiendo retos legales en ventajas competitivas.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1saRFbc6UIvVTFviRsFgA3WGCgfGx_1bz"
                  alt="Paula Nudelman Rosero"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Paula Nudelman Rosero</h3>
                <p className="team-role">Subgerente & Co-Fundadora</p>
                <p className="team-bio">
                  Abogada por la Universidad Cooperativa de Colombia especialista en formalización y compliance. Lidera la gestión operativa del Estudio garantizando eficiencia y seguridad jurídica.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1E3A8A 0%, #4682B4 100%)', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{ fontSize: '0.8rem', marginTop: '6px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>ABOGADO SOCIO</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">José Arturo Cabrera Garzón</h3>
                <p className="team-role">Socio — Registral, Notarial & Conciliación</p>
                <p className="team-bio">
                  Abogado (UCSM / C.A.A. 07392), Magíster en Solución de Conflictos (USMP), docente universitario (U. de Lima, PUCP) y Conciliador Extrajudicial (MINJUS). Experto en práctica notarial.
                </p>
              </div>
            </div>
          </div>

          {/* Socios Estratégicos */}
          <div className="section-header" style={{ marginTop: '50px' }}>
            <span className="section-label">Alianzas</span>
            <h2 className="section-title">Socios Estratégicos</h2>
            <p className="section-description">
              Aliados clave multidisciplinarios que fortalecen nuestras capacidades y cobertura legal, financiera, inmobiliaria y tecnológica.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{ fontSize: '0.8rem', marginTop: '6px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>MBA. ING. CIVIL</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Pedro Pachas Segura</h3>
                <p className="team-role">Socio Estratégico — Proyectos Inmobiliarios</p>
                <p className="team-bio">
                  Ingeniero Civil (UNI) con MBA por el PAD de la Universidad de Piura y Darden (U. Virginia). Más de 17 años liderando proyectos inmobiliarios, saneamiento físico-legal y finanzas corporativas.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{ fontSize: '0.8rem', marginTop: '6px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>ABOGADO CORPORATIVO</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Glen Joy Nostades Rivera</h3>
                <p className="team-role">Socio Estratégico — Corporativo & Fideicomisos</p>
                <p className="team-bio">
                  Abogado por la PUCP y maestrando en la UNMSM. Ex profesional legal de SUNARP y ex coordinador de garantías bancarias. Especialista en fideicomisos, reorganizaciones societarias y compliance.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image" style={{ background: '#10110F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <Image
                    src="/assets/images/conectaya-logo.png"
                    alt="ConectaYa Digital Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '2px', marginTop: '10px' }}>
                  CONECTAYA
                </span>
                <span style={{ fontSize: '0.75rem', marginTop: '4px', color: '#D8FF4F', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  ALIADO TECNOLÓGICO
                </span>
              </div>
              <div className="team-info">
                <h3 className="team-name">ConectaYa Digital</h3>
                <p className="team-role">Socio Estratégico — Software, IA & Procesos</p>
                <p className="team-bio">
                  Firma de ingeniería de software, Inteligencia Artificial y optimización de procesos (<a href="https://conectaya.pe" target="_blank" rel="noopener noreferrer" style={{ color: '#4682B4', fontWeight: 600, textDecoration: 'underline' }}>conectaya.pe</a>). Especialistas en automatización e innovación tecnológica legal.
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
      
      <WhatsAppButton />
    </>
  )
}
