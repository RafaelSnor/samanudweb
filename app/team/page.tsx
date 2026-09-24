import type { Metadata } from 'next'
import Image from 'next/image'
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
                <div className="team-image-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1E3A8A 0%, #4682B4 100%)', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{ fontSize: '0.85rem', marginTop: '8px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>ABOGADO SOCIO</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">José Arturo Cabrera Garzón</h3>
                <p className="team-role">Registral, Notarial & Conciliación</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Derecho Registral Notarial & Solución de Conflictos
                </div>
                <p className="team-bio">
                  Abogado (UCSM / C.A.A. 07392), <strong>Magíster en Solución de Conflictos (USMP)</strong>, docente universitario (U. de Lima, PUCP) y Conciliador Extrajudicial (MINJUS). Experto en práctica notarial y resolución de controversias.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Su enfoque:</strong> Blindaje notarial y registral con prevención de controversias.
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1saRFbc6UIvVTFviRsFgA3WGCgfGx_1bz"
                  alt="Paula Viviana Nudelman Rosero"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Paula Viviana Nudelman Rosero</h3>
                <p className="team-role">Subgerente & Co-Fundadora</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Derecho Notarial, Formalización & Compliance
                </div>
                <p className="team-bio">
                  Abogada por la <strong>Universidad Cooperativa de Colombia</strong> especialista en formalización y compliance. Lidera la gestión operativa del Estudio garantizando procesos impecables y ágiles.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Su compromiso:</strong> Ejecución operativa con máxima eficiencia y seguridad jurídica.
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1ePdiSFpDXkcAPXG-e8AcN5WcJDOoNTdv"
                  alt="Marco Antonio Santa María Norabuena"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  priority
                  className="team-photo"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">Marco Santa María Norabuena</h3>
                <p className="team-role">Gerente General & Co-Fundador</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Derecho Civil, Inmobiliario & Registral Notarial
                </div>
                <p className="team-bio">
                  Formado en la <strong>Universidad de Lima</strong> y maestrando en Derecho Civil por la UNMSM. Lidera la visión estratégica y corporativa del Estudio, convirtiendo retos legales en ventajas competitivas.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Su enfoque:</strong> Estrategia legal orientada al crecimiento y protección del negocio.
                </div>
              </div>
            </div>
          </div>

          {/* Socios Estratégicos */}
          <div className="section-header" style={{ marginTop: '60px' }}>
            <span className="section-label">Alianzas</span>
            <h2 className="section-title">Socios Estratégicos</h2>
            <p className="section-description">
              Aliados clave multidisciplinarios que fortalecen nuestras capacidades en el ámbito inmobiliario, corporativo, financiero y tecnológico.
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
                  <span style={{ fontSize: '0.85rem', marginTop: '8px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>MBA. ING. CIVIL</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Pedro Pachas Segura</h3>
                <p className="team-role">Socio Estratégico — Proyectos Inmobiliarios</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Saneamiento Físico-Legal & Gerencia de Proyectos
                </div>
                <p className="team-bio">
                  Ingeniero Civil (UNI) con <strong>MBA (PAD - U. Piura / Darden)</strong>. Más de 17 años de experiencia directiva liderando desarrollo inmobiliario, saneamiento físico-legal de terrenos y estructuración financiera de inversiones.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Aporte estratégico:</strong> Viabilidad técnico-legal y estructuración financiera integral.
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <div className="team-image-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span style={{ fontSize: '0.85rem', marginTop: '8px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>ABOGADO CORPORATIVO</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Glen Nostades Rivera</h3>
                <p className="team-role">Socio Estratégico — Corporativo & Fideicomisos</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Fideicomisos & Reorganizaciones Societarias y Corporativas
                </div>
                <p className="team-bio">
                  Abogado por la <strong>PUCP</strong> y maestrando en la UNMSM. Ex calificador/profesional legal en SUNARP y ex coordinador de garantías bancarias, especialista en fideicomisos, due diligence y contratos financieros.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Aporte estratégico:</strong> Estructuras societarias y financieras complejas con mitigación de riesgos.
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image" style={{ background: '#10110F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                  <Image
                    src="/assets/images/conectaya-logo.png"
                    alt="ConectaYa Digital Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '2px', marginTop: '12px' }}>
                  CONECTAYA
                </span>
                <span style={{ fontSize: '0.75rem', marginTop: '4px', color: '#D8FF4F', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  ALIADO TECNOLÓGICO
                </span>
              </div>
              <div className="team-info">
                <h3 className="team-name">ConectaYa Digital</h3>
                <p className="team-role">Socio Estratégico — Software, IA & Procesos</p>
                <div className="team-expertise">
                  <strong>Especialización:</strong> Inteligencia Artificial & Transformación Digital
                </div>
                <p className="team-bio">
                  Firma de ingeniería de software, Inteligencia Artificial y optimización de procesos (<a href="https://conectaya.pe" target="_blank" rel="noopener noreferrer" style={{ color: '#4682B4', fontWeight: 600, textDecoration: 'underline' }}>conectaya.pe</a>). Especialistas en automatización e innovación tecnológica legal.
                </p>
                <div className="team-value" style={{ marginTop: 'auto', padding: '12px', background: 'rgba(70, 130, 180, 0.05)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4682B4' }}>Aporte estratégico:</strong> Inteligencia artificial aplicada, optimización de procesos e infraestructura digital.
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
