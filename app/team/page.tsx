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
          <p>Profesionales dedicados a brindar excelencia en cada caso</p>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Fundadores</span>
            <h2 className="section-title">Liderazgo del Estudio</h2>
            <p className="section-description">
              Nuestros fundadores combinan experiencia académica y práctica en todas las áreas de servicio.
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
                  Bachiller en Derecho por la Universidad de Lima. Actualmente cursa la Maestría en Derecho Civil en la Universidad Nacional Mayor de San Marcos. 
                  Cuenta con estudios especializados en Derecho Civil, Inmobiliario, Registral y del Consumidor.
                </p>
                <p className="team-bio" style={{ marginTop: '15px' }}>
                  Dirige la visión estratégica, académica y corporativa del Estudio, con enfoque en excelencia, innovación y valor empresarial.
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
                  Cuenta con estudios especializados en Derecho Notarial, Registral e Inmobiliario, 
                  con énfasis en Tributación, Formalización y Compliance.
                </p>
                <p className="team-bio" style={{ marginTop: '15px' }}>
                  Lidera la gestión operativa, la experiencia del cliente y la calidad de los servicios del Estudio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Trabaja Con Nuestro Equipo</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Agenda una consulta con uno de nuestros experimentados abogados.
            </p>
            <Link href="/contact" className="btn btn-primary">Contáctanos</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
