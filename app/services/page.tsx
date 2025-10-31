import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Nuestros Servicios | SAMANUD FIRMA',
  description: 'Servicios jurídicos integrales para empresas y personas naturales. Constitución empresarial, propiedad intelectual, contratos y más.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Servicios</span>
          </div>
          <h1>Nuestros Servicios Jurídicos</h1>
          <p>Soluciones legales integrales adaptadas a las necesidades de empresas y personas</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Áreas de Práctica</span>
            <h2 className="section-title">Servicios Especializados</h2>
            <p className="section-description">
              Organizamos nuestra propuesta de valor en dos grandes áreas: servicios para empresas y para personas naturales.
            </p>
          </div>

          <div className="service-detail">
            <h2 style={{ marginBottom: '30px', color: 'var(--primary-dark)' }}>Servicios para Empresas</h2>
            
            <div className="service-detail-content" style={{ marginBottom: '40px' }}>
              <div>
                <h3>Constitución y Gestión Empresarial</h3>
                <p className="about-description">
                  Facilitamos la creación, formalización y fortalecimiento de empresas con estructuras sólidas y eficientes. 
                  Nuestro enfoque combina agilidad digital y rigor jurídico.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Constitución Exprés - Gestión digital sin papeleos</li>
                  <li>Constitución Profesional - Estructuras personalizadas</li>
                  <li>Constitución Premium - Con beneficios adicionales</li>
                  <li>Pacto de Socios o Accionistas</li>
                  <li>Aumento de Capital</li>
                  <li>Modificación de Razón Social</li>
                  <li>Renuncia o Cambio de Gerente General</li>
                </ul>
              </div>
              <div>
                <h3>Propiedad Intelectual y Marcas (INDECOPI)</h3>
                <p className="about-description">
                  Protegemos las ideas que te diferencian. Te guiamos en cada etapa del registro, defensa o transferencia de tus marcas, obras o innovaciones.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Estudio Legal + Registro de Marca</li>
                  <li>Registro de Marca</li>
                  <li>Búsqueda Simple en INDECOPI</li>
                  <li>Apelación de Marca Denegada</li>
                  <li>Defensa ante Uso Indebido de Marca</li>
                  <li>Transferencia de Titularidad de Marca</li>
                  <li>Registro de Diseño Industrial</li>
                  <li>Derechos de Autor (Software)</li>
                </ul>
              </div>
            </div>

            <div className="service-detail-content" style={{ marginBottom: '40px' }}>
              <div>
                <h3>Contratos y Asesoría Legal Continua</h3>
                <p className="about-description">
                  Convertimos los acuerdos en instrumentos de seguridad y confianza. Diseñamos, revisamos y negociamos contratos con enfoque preventivo.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Contrato de Locación de Servicios</li>
                  <li>Contrato de Arrendamiento</li>
                  <li>Contrato Laboral General</li>
                  <li>Contrato de Confidencialidad (NDA)</li>
                  <li>Asesoría Legal Virtual (Plan Mensual)</li>
                </ul>
              </div>
              <div>
                <h3>Derecho Corporativo y M&A</h3>
                <p className="about-description">
                  Acompañamos a compañías en todas sus etapas corporativas: desde el gobierno societario hasta operaciones complejas de reorganización y transacciones M&A.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Asesoría Societaria Integral</li>
                  <li>Reestructuración, Fusión o Escisión</li>
                  <li>Acuerdos de Accionistas e Inversión</li>
                  <li>Transacciones M&A</li>
                </ul>
              </div>
            </div>

            <div className="service-detail-content" style={{ marginBottom: '40px' }}>
              <div>
                <h3>Derecho Inmobiliario y Urbanismo</h3>
                <p className="about-description">
                  Brindamos acompañamiento legal integral a promotores, constructores y propietarios en todas las etapas de sus proyectos.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Estudio de Títulos e Informe Legal</li>
                  <li>Habilitaciones Urbanas</li>
                  <li>Independización o Acumulación de Predios</li>
                  <li>Propiedad Horizontal y Reglamento Interno</li>
                  <li>Formalización de Propiedad</li>
                </ul>
              </div>
              <div>
                <h3>Tributación Inmobiliaria</h3>
                <p className="about-description">
                  Asesoría en el cumplimiento de obligaciones tributarias relacionadas con la propiedad y transferencia de bienes inmuebles.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Análisis y Planeamiento Tributario Inmobiliario</li>
                  <li>Impuesto Predial y Arbitrios Municipales</li>
                  <li>Impuesto a la Renta por Transferencia de Inmuebles</li>
                  <li>IGV Inmobiliario</li>
                  <li>Tributación Municipal y Licencias</li>
                  <li>Regularización y Defensa Tributaria Inmobiliaria</li>
                </ul>
              </div>
            </div>

            <div className="service-detail-content" style={{ marginBottom: '40px' }}>
              <div>
                <h3>Gestión Notarial y Registral</h3>
                <p className="about-description">
                  Optimizamos trámites notariales y registrales con precisión y seguimiento constante.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Legalización de Libros</li>
                  <li>Libro de Matrícula de Acciones</li>
                  <li>Cartas Notariales</li>
                  <li>Poderes y Cartas Poder</li>
                  <li>Transferencia Vehicular</li>
                  <li>Rectificación de Partidas</li>
                </ul>
              </div>
              <div>
                <h3>Compliance y Protección de Datos</h3>
                <p className="about-description">
                  Ayudamos a tu empresa a cumplir con la Ley N.º 29733 de Protección de Datos Personales.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Políticas de Privacidad</li>
                  <li>Términos y Condiciones de Uso</li>
                  <li>Registro de Banco de Datos Personales</li>
                  <li>Libro Virtual de Reclamaciones</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <h3>Litigios y Solución de Controversias</h3>
              <p className="about-description">
                Defendemos intereses con una estrategia integral y promovemos mecanismos alternativos como conciliación, arbitraje y negociación.
              </p>
              <p style={{ marginTop: '20px', fontWeight: '500' }}>Tipos de Conciliación:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                <li>Extrajudicial</li>
                <li>Judicial</li>
                <li>Empresarial y Preventiva</li>
                <li>Familiar</li>
              </ul>
            </div>
          </div>

          <div className="service-detail" style={{ marginTop: '60px' }}>
            <h2 style={{ marginBottom: '30px', color: 'var(--primary-dark)' }}>Servicios para Personas Naturales</h2>
            
            <div className="service-detail-content">
              <div>
                <h3>Familia y Sucesiones</h3>
                <p className="about-description">
                  Asesoría jurídica personalizada en temas familiares, sucesorios, inmobiliarios y notariales.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Sucesión Intestada</li>
                  <li>Testamento</li>
                  <li>Anticipo de Legítima</li>
                  <li>Donaciones</li>
                  <li>Divorcio Notarial por Mutuo Acuerdo</li>
                </ul>
              </div>
              <div>
                <h3>Derecho Inmobiliario Personal</h3>
                <p className="about-description">
                  Asesoría especializada para personas naturales en temas de propiedad, arrendamiento y transferencia de bienes inmuebles.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  <li>Estudio de Títulos</li>
                  <li>Formalización de Propiedad</li>
                  <li>Contratos de Arrendamiento</li>
                  <li>Transferencia de Propiedad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0' }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ color: 'white', marginBottom: '20px' }}>¿Listo para Comenzar?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
              Agenda una consulta con nuestros experimentados abogados hoy mismo.
            </p>
            <Link href="/contact" className="btn btn-primary">Contáctanos</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
