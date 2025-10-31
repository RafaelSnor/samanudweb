import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | SAMANUD FIRMA',
  description: 'Conoce SAMANUD FIRMA - servicios jurídicos integrales con visión moderna y estratégica, enfocados en la confianza y el rigor técnico.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Sobre Nosotros</span>
          </div>
          <h1>Sobre SAMANUD FIRMA</h1>
          <p>Dedicados a la excelencia jurídica y el éxito de nuestros clientes</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Nuestra Historia</span>
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
              <p className="about-description">
                <strong>&quot;Asesoría jurídica con propósito humano.&quot;</strong> Esta es la filosofía que guía cada uno de nuestros servicios. 
                Entendemos que detrás de cada caso hay personas y empresas con objetivos, desafíos y aspiraciones. 
                Por eso, nuestro enfoque va más allá del aspecto técnico-legal: buscamos crear valor real y generar confianza.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
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
      </section>

      <section className="services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nuestros Valores</span>
            <h2 className="section-title">Lo Que Nos Define</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas basadas en la transparencia y la honestidad. Cada cliente confía en nosotros y nosotros nos comprometemos a cumplir con excelencia.</p>
            </div>
            <div className="value-card">
              <h3>Rigor Técnico</h3>
              <p>Mantenemos los más altos estándares de calidad jurídica. Cada documento, cada estrategia y cada solución está respaldada por un análisis profundo y riguroso.</p>
            </div>
            <div className="value-card">
              <h3>Transparencia</h3>
              <p>Comunicación clara y honesta en cada paso del proceso. Nuestros clientes siempre saben qué esperar, sin sorpresas ni costos ocultos.</p>
            </div>
            <div className="value-card">
              <h3>Innovación</h3>
              <p>Utilizamos tecnología y metodologías modernas para ofrecer servicios ágiles y eficientes, sin comprometer la calidad y el rigor legal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Trabaja Con Nosotros</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Experimenta la diferencia que hace la excelencia jurídica.
            </p>
            <Link href="/contact" className="btn btn-primary">Empezar</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
