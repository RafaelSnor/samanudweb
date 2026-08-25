'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import CalButton from './CalButton'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/services', label: 'Servicios' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/team', label: 'Equipo' },
    { href: '/contact', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.setAttribute('style', 'box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);')
        } else {
          navbar.setAttribute('style', 'box-shadow: none;')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper" ref={navRef}>
          <Link href="/" className="logo">
            <Image 
              src="/assets/images/logo-transparente.png" 
              alt="SAMANUD FIRMA" 
              width={375}
              height={120}
              className="logo-image"
              priority
            />
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
            <li className="navbar-cta">
              <CalButton 
                className="btn btn-primary btn-sm" 
                text="📅 Agendar Cita" 
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

