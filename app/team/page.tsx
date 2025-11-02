import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Nuestro Equipo | SAMANUD FIRMA',
  description: 'Conoce a nuestros abogados y profesionales legales en SAMANUD FIRMA.',
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Nuestro Equipo</span>
          </div>
          <h1>Nuestro Equipo</h1>
          <p>Expertos jurídicos que transforman conocimientos en resultados tangibles para tu empresa</p>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fundadores</span>
            <h2 className="section-title">Los Expertos que Dirigen tu Éxito Legal</h2>
            <p className="section-description">
              Conoce a los profesionales que combinan formación académica de primer nivel con experiencia práctica especializada. 
              Cada decisión estratégica que toman está diseñada para acelerar tu crecimiento y proteger tus intereses.
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
                <div className="team-expertise">
                  <strong>Especialización:</strong> Derecho Civil, Inmobiliario, Registral y del Consumidor
                </div>
                <p className="team-bio">
                  Formado en la prestigiosa <strong>Universidad de Lima</strong>, y actualmente cursando su Maestría en Derecho Civil en 
                  la <strong>Universidad Nacional Mayor de San Marcos</strong>, Marco lidera la visión estratégica y corporativa del Estudio.
                </p>
                <p className="team-bio" style={{ marginTop: '15px' }}>
                  Su enfoque combina rigor académico con visión empresarial práctica. Cada estrategia que desarrolla está diseñada 
                  para convertir complejidades legales en ventajas competitivas para tu negocio. Bajo su dirección, el Estudio mantiene 
                  estándares de excelencia que garantizan resultados superiores.
                </p>
                <div className="team-value" style={{ marginTop: '15px', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Su enfoque:</strong> Transformar cada desafío legal en una oportunidad de crecimiento estratégico.
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Paula Viviana Nudelman Rosero</h3>
                <p className="team-role">Subgerente & Co-Fundadora</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Derecho Notarial, Registral, Inmobiliario, Tributación, Formalización y Compliance
                </div>
                <p className="team-bio">
                  Abogada formada en la <strong>Universidad Cooperativa de Colombia</strong> (revalidación en trámite en Perú), 
                  Paula es la fuerza operativa que garantiza la ejecución impecable de cada servicio.
                </p>
                <p className="team-bio" style={{ marginTop: '15px' }}>
                  Con expertise multidisciplinario que abarca desde formalización hasta compliance tributario, asegura que cada proceso 
                  legal se ejecute con precisión, agilidad y resultados medibles. Su liderazgo garantiza que tu experiencia como cliente 
                  sea excepcional desde el primer contacto hasta la entrega final.
                </p>
                <div className="team-value" style={{ marginTop: '15px', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Su compromiso:</strong> Tu tranquilidad legal comienza con procesos operativos impecables y resultados predecibles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '50px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Trabaja Directamente con Expertos que Entienden tu Negocio</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '24px', fontSize: '1.1rem' }}>
              Agenda una consulta estratégica y descubre cómo nuestros fundadores pueden acelerar el crecimiento de tu empresa 
              con soluciones legales diseñadas específicamente para tus objetivos.
            </p>
            <Link href="/contact" className="btn btn-primary">Consultar con Nuestros Expertos</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
