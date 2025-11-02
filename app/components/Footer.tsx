import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-text">SAMANUD FIRMA</span>
            </div>
            <p className="footer-description">
              Asesoría jurídica con propósito humano. Transformamos la complejidad legal en soluciones que generan confianza.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href="#" style={{ marginRight: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                <span>in</span>
              </a>
              <a href="#" style={{ marginRight: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                <span>tw</span>
              </a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                <span>fb</span>
              </a>
            </div>
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
              <li><a href="mailto:contacto@samanudfirma.com">contacto@samanudfirma.com</a></li>
              <li><a href="https://www.samanudfirma.com" target="_blank" rel="noopener noreferrer">www.samanudfirma.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SAMANUD FIRMA. Todos los derechos reservados. | <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Política de Privacidad</a> | <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Términos de Servicio</a></p>
        </div>
      </div>
    </footer>
  )
}

