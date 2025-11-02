import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ServiceCard({ 
  title, 
  badge, 
  headline, 
  description, 
  benefits, 
  price, 
  cta = "Solicitar Ahora",
  guarantee 
}: {
  title: string
  badge?: string
  headline: string
  description: string
  benefits: string[]
  price: string
  cta?: string
  guarantee?: string
}) {
  return (
    <div className="service-item">
      <div className="service-item-header">
        <h3>{title}</h3>
        {badge && <span className="service-badge">{badge}</span>}
      </div>
      <div className="service-item-content">
        <p className="service-description">
          <strong>{headline}</strong> {description}
        </p>
        <div className="service-benefits">
          <strong>Beneficios incluidos:</strong>
          <ul>
            {benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
        <Link href="/contact" className="service-cta">{cta}</Link>
        {guarantee && <p className="service-guarantee">{guarantee}</p>}
      </div>
    </div>
  )
}

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
          {/* Constitución y Gestión Empresarial */}
          <ServiceCard
            title="Constitución Exprés"
            badge="Más Rápido"
            headline="Tu empresa lista en días, no semanas"
            description="Constituye tu empresa en un solo paso, sin complicaciones ni papeleos. Gestión 100% digital que te permite formalizar tu negocio en tiempo récord. Mientras otros esperan semanas, tú ya estás operando legalmente."
            benefits={[
              "Reserva de nombre incluida",
              "Minuta profesional lista",
              "Acompañamiento notarial completo",
              "Seguimiento registral día a día",
              "Tu empresa operando en 7-10 días"
            ]}
            price="S/ [   ]"
            cta="Empezar Ahora"
            guarantee="✓ Asesoría ilimitada incluida sin costo extra"
          />

          <ServiceCard
            title="Constitución Profesional"
            badge="Más Popular"
            headline="Estructuras de poder personalizadas que protegen tu empresa"
            description="Perfecto para socios que necesitan definir claramente quién toma las decisiones y cómo. Diseñamos estatutos y poderes a medida que garantizan seguridad jurídica y control total. Evita conflictos futuros desde el día uno."
            benefits={[
              "Minuta y estatutos 100% personalizados",
              "Estructura de poderes claramente definida",
              "Revisión legal exhaustiva antes de firmar",
              "Asesoría continua durante el proceso"
            ]}
            price="S/ [   ]"
            cta="Comenzar Ahora"
            guarantee="✓ Garantía de satisfacción o te devolvemos tu dinero"
          />

          <ServiceCard
            title="Constitución Premium"
            badge="Todo Incluido"
            headline="Tu empresa lista para operar desde el primer día"
            description="La solución completa para empresarios que no quieren preocupaciones legales. Tu empresa nace con todo: libros legalizados, contratos listos y respaldo jurídico integral. Operación inmediata sin complicaciones."
            benefits={[
              "Libros societarios y contables",
              "Firma a domicilio (comodidad total)",
              "Contratos base listos para usar",
              "Testimonio electrónico incluido",
              "Soporte jurídico por 30 días"
            ]}
            price="S/ [   ]"
            cta="Elegir Premium"
            guarantee="✓ Empresa operando en máximo 15 días o gratis"
          />

          <ServiceCard
            title="Gestiones Societarias"
            badge="Completo"
            headline="Adapta tu empresa a los cambios que necesitas"
            description="Servicios integrales para gestionar modificaciones en tu estructura societaria. Desde acuerdos entre socios hasta cambios en la razón social o dirección, te acompañamos en cada modificación con seguridad jurídica."
            benefits={[
              "Pacto de Socios o Accionistas",
              "Aumento de Capital",
              "Modificación de Razón Social",
              "Renuncia o Cambio de Gerente General"
            ]}
            price="S/ [   ]"
            cta="Gestionar Modificaciones"
            guarantee="✓ Asesoría legal completa en cada servicio incluida"
          />

          {/* Contratos y Asesoría Legal Continua */}
          <ServiceCard
            title="Contratos Empresariales"
            badge="Integral"
            headline="Convertimos los acuerdos en instrumentos de seguridad y confianza"
            description="Diseñamos, revisamos y negociamos contratos con enfoque preventivo que evita conflictos y fortalece relaciones comerciales."
            benefits={[
              "Contrato de Locación de Servicios",
              "Contrato de Arrendamiento",
              "Contrato Laboral General",
              "Contrato de Confidencialidad (NDA)"
            ]}
            price="S/ [   ]"
            cta="Solicitar Contratos"
            guarantee="✓ Asesoría legal continua incluida"
          />

          {/* Derecho Corporativo y M&A */}
          <ServiceCard
            title="Derecho Corporativo y M&A"
            badge="Especializado"
            headline="Acompañamos a compañías en todas sus etapas corporativas"
            description="Desde el gobierno societario hasta operaciones complejas de reorganización y transacciones M&A. Tu socio estratégico para el éxito empresarial."
            benefits={[
              "Asesoría Societaria Integral",
              "Reestructuración, Fusión o Escisión",
              "Acuerdos de Accionistas e Inversión",
              "Transacciones M&A"
            ]}
            price="S/ [   ]"
            cta="Asesoría Corporativa"
            guarantee="✓ Estrategia legal personalizada incluida"
          />

          {/* Propiedad Intelectual */}
          <ServiceCard
            title="Propiedad Intelectual - Registro y Protección de Marcas"
            badge="Especializado"
            headline="Protegemos las ideas que te diferencian"
            description="Nuestro equipo te guía en cada etapa del registro y defensa de tus marcas. Asesoría especializada para proteger tu propiedad intelectual con respaldo legal sólido."
            benefits={[
              "Estudio Legal + Registro de Marca",
              "Registro de Marca",
              "Búsqueda Simple en INDECOPI",
              "Apelación de Marca Denegada"
            ]}
            price="S/ [   ]"
            cta="Proteger Mi Marca"
            guarantee="✓ Asesoría especializada en cada servicio incluida"
          />

          <ServiceCard
            title="Propiedad Intelectual - Defensa y Transferencia"
            badge="Especializado"
            headline="Defendemos y transferimos tus derechos de propiedad intelectual"
            description="Protección completa de tus activos intelectuales: desde defensa ante uso indebido hasta transferencia de titularidad y registro de innovaciones."
            benefits={[
              "Defensa ante Uso Indebido de Marca",
              "Transferencia de Titularidad de Marca",
              "Registro de Diseño Industrial",
              "Derechos de Autor (Software)"
            ]}
            price="S/ [   ]"
            cta="Defender Propiedad Intelectual"
            guarantee="✓ Asesoría especializada en cada servicio incluida"
          />

          {/* Compliance y Protección de Datos */}
          <ServiceCard
            title="Compliance y Protección de Datos"
            badge="Legal"
            headline="Ayudamos a tu empresa a cumplir con la Ley N.º 29733"
            description="Protección de datos personales y cumplimiento normativo. Implementamos políticas y procesos que garantizan el cumplimiento legal de tu empresa."
            benefits={[
              "Políticas de Privacidad",
              "Términos y Condiciones de Uso",
              "Registro de Banco de Datos Personales",
              "Libro Virtual de Reclamaciones"
            ]}
            price="S/ [   ]"
            cta="Cumplir Normativa"
            guarantee="✓ Cumplimiento normativo garantizado"
          />

          {/* Derecho Inmobiliario y Urbanismo */}
          <ServiceCard
            title="Derecho Inmobiliario"
            badge="Completo"
            headline="Acompañamiento legal integral para proyectos inmobiliarios exitosos"
            description="Brindamos acompañamiento legal completo en todas las etapas de tus proyectos inmobiliarios. Desde estudios de títulos hasta habilitaciones urbanas, te guiamos en cada paso con seguridad jurídica."
            benefits={[
              "Estudio de Títulos e Informe Legal",
              "Habilitaciones Urbanas",
              "Independización de Predios",
              "Propiedad Horizontal y Reglamentos"
            ]}
            price="S/ [   ]"
            cta="Asesoría Inmobiliaria"
            guarantee="✓ Gestión integral de proyectos incluida"
          />

          <ServiceCard
            title="Formalización Inmobiliaria"
            badge="Especializado"
            headline="Convierte tu posesión en propiedad legal completamente segura"
            description="Asesoría y gestión profesional en procesos de formalización de propiedad inmueble. Obtén el título de propiedad que te brinda seguridad jurídica y valor a tu patrimonio personal o empresarial."
            benefits={[
              "Formalización de Propiedad",
              "Gestión ante COFOPRI/municipalidades",
              "Inscripción en registros públicos",
              "Protección contra terceros"
            ]}
            price="S/ [   ]"
            cta="Formalizar Propiedad"
            guarantee="✓ Análisis de situación legal incluido"
          />

          {/* Tributación Inmobiliaria */}
          <ServiceCard
            title="Tributación Inmobiliaria"
            badge="Especializado"
            headline="Asesoría especializada en cumplimiento tributario inmobiliario"
            description="Asesoría completa en el cumplimiento de obligaciones tributarias relacionadas con la propiedad y transferencia de bienes inmuebles. Minimiza riesgos fiscales y optimiza beneficios económicos de forma legal."
            benefits={[
              "Análisis y Planeamiento Tributario",
              "Impuesto Predial y Arbitrios Municipales",
              "IR por Transferencia de Inmuebles",
              "IGV Inmobiliario"
            ]}
            price="S/ [   ]"
            cta="Asesoría Tributaria"
            guarantee="✓ Optimización fiscal incluida"
          />

          <ServiceCard
            title="Tributación Inmobiliaria - Regularización y Defensa"
            badge="Especializado"
            headline="Resuelve tus problemas fiscales inmobiliarios con expertos"
            description="Defensa ante requerimientos tributarios. Protegemos tu patrimonio y te representamos ante SUNAT y municipalidades."
            benefits={[
              "Tributación Municipal y Licencias",
              "Regularización y Defensa Tributaria",
              "Análisis de requerimientos",
              "Estrategias de defensa fiscal"
            ]}
            price="S/ [   ]"
            cta="Defender Patrimonio"
            guarantee="✓ Representación ante autoridades incluida"
          />

          {/* Gestión Notarial y Registral */}
          <ServiceCard
            title="Gestión Notarial - Libros y Documentos"
            badge="Optimizado"
            headline="Optimizamos trámites notariales y registrales con precisión"
            description="Seguimiento constante y precisión en cada trámite notarial y registral. Agilizamos procesos complejos con eficiencia."
            benefits={[
              "Legalización de Libros",
              "Libro de Matrícula de Acciones",
              "Cartas Notariales",
              "Poderes y Cartas Poder"
            ]}
            price="S/ [   ]"
            cta="Gestionar Trámites"
            guarantee="✓ Seguimiento constante incluido"
          />

          <ServiceCard
            title="Gestión Registral - Rectificacion y Transferencias"
            badge="Optimizado"
            headline="Gestión eficiente de transferencias y rectificaciones"
            description="Acompañamiento profesional en transferencias vehiculares y rectificación de partidas. Proceso rápido y sin errores."
            benefits={[
              "Transferencia Vehicular",
              "Rectificación de Partidas",
              "Gestión ante registros públicos",
              "Asesoría en requisitos"
            ]}
            price="S/ [   ]"
            cta="Gestionar Transferencias"
            guarantee="✓ Proceso rápido y sin errores"
          />

          {/* Familia y Sucesiones */}
          <ServiceCard
            title="Familia y Sucesiones"
            badge="Personalizado"
            headline="Asesoría jurídica personalizada en temas familiares y sucesorios"
            description="Te guiamos en cada etapa de los procesos familiares y sucesorios con sensibilidad, profesionalismo y seguridad jurídica."
            benefits={[
              "Sucesión Intestada",
              "Testamento",
              "Anticipo de Legítima",
              "Donaciones"
            ]}
            price="S/ [   ]"
            cta="Asesoría Familiar"
            guarantee="✓ Trato personalizado y confidencial incluido"
          />

          <ServiceCard
            title="Divorcio Notarial"
            badge="Rápido"
            headline="Divorcio rápido y sin conflictos, por la vía notarial"
            description="Gestión de procesos de divorcio notarial por mutuo acuerdo. Una solución ágil y civilizada para cerrar un ciclo, sin necesidad de ir a juicio."
            benefits={[
              "Divorcio Notarial por Mutuo Acuerdo",
              "Asesoría legal completa",
              "Redacción de convenio de divorcio",
              "Inscripción en RENIEC"
            ]}
            price="S/ [   ]"
            cta="Iniciar Divorcio"
            guarantee="✓ Proceso ágil y sin complicaciones"
          />

          {/* Asesoría Legal Virtual */}
          <ServiceCard
            title="Asesoría Legal Virtual"
            badge="Plan Mensual"
            headline="Soporte legal constante para tu empresa, a un clic"
            description="Asesoría legal continua mediante consultoría virtual mensual. Resuelve tus dudas y toma decisiones estratégicas con el respaldo de expertos, sin salir de tu oficina."
            benefits={[
              "Consultas ilimitadas por videollamada/chat",
              "Revisión de documentos básicos",
              "Alertas legales relevantes",
              "Soporte proactivo para tu negocio"
            ]}
            price="S/ [   ]"
            cta="Contratar Plan"
            guarantee="✓ Plan mensual con renovación flexible"
          />

          {/* Litigios y Solución de Controversias */}
          <ServiceCard
            title="Litigios y Solución de Controversias"
            badge="Especializado"
            headline="Defendemos intereses con estrategia integral"
            description="Defendemos intereses con una estrategia integral y promovemos mecanismos alternativos como conciliación, arbitraje y negociación. Enfoque ético y orientado a la solución."
            benefits={[
              "Tipos de Conciliación: Extrajudicial, Judicial, Empresarial y Preventiva, Familiar",
              "Asesoría previa",
              "Redacción de actas ejecutables",
              "Equipo especializado"
            ]}
            price="S/ [   ]"
            cta="Solicitar Defensa"
            guarantee="✓ Primera consulta gratuita para evaluar tu caso"
          />
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
