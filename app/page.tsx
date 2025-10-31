import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Asesoría Jurídica con Propósito Humano</h1>
            <p className="hero-subtitle">
              Transformamos la complejidad legal en soluciones que generan confianza. 
              Brindamos servicios jurídicos integrales con una visión moderna y estratégica.
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
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nuestros Servicios</span>
            <h2 className="section-title">Soluciones Jurídicas Integrales</h2>
            <p className="section-description">
              Organizamos nuestra propuesta de valor en dos grandes áreas: servicios para empresas y para personas naturales.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Constitución y Gestión Empresarial</h3>
              <p className="service-description">
                Facilitamos la creación, formalización y fortalecimiento de empresas con estructuras sólidas y eficientes. 
                Constitución Exprés, Profesional y Premium.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Propiedad Intelectual y Marcas</h3>
              <p className="service-description">
                Protegemos las ideas que te diferencian. Registro de marcas ante INDECOPI, diseños industriales y derechos de autor.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Contratos y Asesoría Legal</h3>
              <p className="service-description">
                Convertimos los acuerdos en instrumentos de seguridad y confianza. Diseñamos, revisamos y negociamos contratos con enfoque preventivo.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Derecho Corporativo y M&A</h3>
              <p className="service-description">
                Acompañamos a compañías en todas sus etapas corporativas: gobierno societario, reorganización y transacciones M&A.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Derecho Inmobiliario</h3>
              <p className="service-description">
                Acompañamiento legal integral a promotores, constructores y propietarios en todas las etapas de sus proyectos inmobiliarios.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Litigios y Solución de Controversias</h3>
              <p className="service-description">
                Defendemos intereses con estrategia integral y promovemos mecanismos alternativos como conciliación, arbitraje y negociación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Sobre Nosotros</span>
              <h2 className="section-title">Bienvenidos a SAMANUD FIRMA</h2>
              <p className="about-description">
                En <strong>SAMANUD FIRMA</strong> brindamos servicios jurídicos integrales con una visión moderna y estratégica. 
                Acompañamos a empresas y personas en cada etapa de sus decisiones legales, ofreciendo soluciones eficientes, 
                preventivas y de alto impacto.
              </p>
              <p className="about-description">
                Nuestro propósito es construir relaciones basadas en la confianza, el rigor técnico y la transparencia. 
                Transformamos la complejidad legal en soluciones que generan confianza.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Áreas de Servicio</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Servicios Especializados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Enfoque en el Cliente</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
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
            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Tu Email" required />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Tu Teléfono" />
              </div>
              <div className="form-group">
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
                </select>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows={5} placeholder="Tu Mensaje" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
