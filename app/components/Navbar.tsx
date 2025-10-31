'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/services', label: 'Servicios' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/team', label: 'Equipo' },
    { href: '/cases', label: 'Casos' },
    { href: '/contact', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.setAttribute('style', 'box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);')
        } else {
          navbar.setAttribute('style', 'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <span className="logo-text">SAMANUD FIRMA</span>
          </Link>
          <button 
            className="menu-toggle" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

