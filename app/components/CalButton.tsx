'use client'

import { useEffect } from 'react'

interface CalButtonProps {
  calLink?: string
  text?: string
  className?: string
}

export default function CalButton({ 
  calLink = 'marco-antonio-santa-maria-n-6qqymk', // Enlace real de Cal.com del usuario
  text = 'Agendar Consulta',
  className = 'btn btn-primary'
}: CalButtonProps) {
  
  useEffect(() => {
    // Inicializar la API de Cal (vanilla JS embed)
    if (typeof window !== 'undefined') {
      ;(window as any).Cal = (window as any).Cal || function () {
        const p = function (a: any, ar: any) {
          a.q.push(ar)
        }
        const ce = function (a: any) {
          const w: any = window
          w.Cal.q = w.Cal.q || []
          p(w.Cal, arguments)
        }
        ;(ce as any).q = (ce as any).q || []
        return ce
      }()
      
      const Cal = (window as any).Cal
      Cal('init', { origin: 'https://cal.com' })
      
      // Personalizar los colores de Cal.com para que coincidan con la marca SAMANUD
      Cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#4682B4' } }, // Azul institucional
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    }
  }, [])

  return (
    <button 
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {text}
    </button>
  )
}
