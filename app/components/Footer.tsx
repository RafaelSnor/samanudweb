import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link href="/" className="footer-logo">
              <Image 
                src="/assets/images/logo-transparente.png" 
                alt="SAMANUD FIRMA" 
                width={375}
                height={120}
                className="footer-logo-image"
                priority
              />
            </Link>
            <p className="footer-description">
              Asesoría jurídica con propósito humano. Transformamos la complejidad legal en soluciones que generan confianza.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/about">Sobre Nosotros</Link></li>
              <li><Link href="/team">Equipo</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Áreas de Práctica</h4>
            <ul className="footer-links">
              <li><Link href="/services">Derecho Corporativo</Link></li>
              <li><Link href="/services">Derecho Inmobiliario</Link></li>
              <li><Link href="/services">Derecho de Familia</Link></li>
              <li><Link href="/services">Propiedad Intelectual</Link></li>
              <li><Link href="/services">Derecho Laboral</Link></li>
              <li><Link href="/services">Litigios</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Información de Contacto</h4>
            <ul className="footer-links">
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>Lima, Perú</li>
              <li><a href="tel:+51907239435">+51 907 239 435</a></li>
              <li><a href="mailto:informes@samanudfirma.com">informes@samanudfirma.com</a></li>
              <li><a href="https://www.samanudfirma.com" target="_blank" rel="noopener noreferrer">www.samanudfirma.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ color: 'white' }}>&copy; {new Date().getFullYear()} SAMANUD FIRMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

