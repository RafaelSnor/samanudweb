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
          <h1>SAMANUD FIRMA</h1>
          <p>Firma jurídica especializada en servicios legales integrales para empresas y personas naturales</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Nuestra Historia</span>
              <h2 className="section-title">Tu Socio Estratégico en el Mundo Legal</h2>
              <p className="about-description">
                En <strong>SAMANUD FIRMA</strong> creemos que el derecho no debe ser una barrera para el crecimiento empresarial, sino un aliado estratégico. 
                Por eso, combinamos el rigor jurídico tradicional con metodologías modernas y un enfoque proactivo que anticipa desafíos 
                antes de que se conviertan en problemas.
              </p>
              <p className="about-description">
                Trabajamos con empresas que buscan más que un proveedor de servicios legales: buscan un socio que comprenda sus objetivos 
                comerciales y los convierta en realidades jurídicas sólidas. Cada documento, cada estrategia y cada asesoría está diseñada 
                para proteger tus intereses mientras aceleras tu crecimiento.
              </p>
              <p className="about-description">
                <strong>Nuestra diferencia:</strong> No medimos nuestro éxito por las horas facturadas, sino por el impacto real en tu negocio. 
                Empresas que operan con mayor agilidad, proyectos que avanzan sin obstáculos legales, decisiones tomadas con total confianza. 
                Este es el resultado que obtienen nuestros clientes cuando trabajan con nosotros.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Fundadores Especializados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Áreas de Experiencia Jurídica</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Comprometidos con tus Resultados</div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nuestros Valores</span>
            <h2 className="section-title">Lo Que Nos Define</h2>
          </div>
          <div className="values-showcase">
            <div className="value-item">
              <div className="value-icon">01</div>
              <div className="value-details">
                <h3>Confianza</h3>
                <p>Construimos relaciones de largo plazo donde cada compromiso se cumple con excelencia. Tu confianza es nuestro activo más valioso y lo protegemos en cada interacción.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">02</div>
              <div className="value-details">
                <h3>Rigor Técnico</h3>
                <p>Cada estrategia legal está respaldada por análisis profundos y fundamentación sólida. Nuestros estándares de calidad jurídica garantizan que tus decisiones estén siempre bien fundamentadas.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">03</div>
              <div className="value-details">
                <h3>Transparencia</h3>
                <p>Comunicación directa y honesta en cada etapa. Sabrás exactamente qué esperar, cuándo esperarlo y cuánto costará, sin sorpresas desagradables ni costos ocultos.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">04</div>
              <div className="value-details">
                <h3>Innovación</h3>
                <p>Combinamos tecnología y metodologías ágiles para entregar resultados más rápidos, sin sacrificar el rigor jurídico. La eficiencia y la calidad son compatibles en nuestro enfoque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '35px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '12px' }}>¿Listo para Acelerar tu Crecimiento Legalmente?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '18px', fontSize: '1.1rem' }}>
              Agenda una consulta estratégica y descubre cómo podemos transformar la gestión legal de tu empresa.
            </p>
            <Link href="/contact" className="btn btn-primary">Solicitar Consulta Gratuita</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
