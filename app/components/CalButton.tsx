'use client'

import { useEffect } from 'react'

interface CalButtonProps {
  calLink?: string
  text?: string
  className?: string
}

export default function CalButton({ 
  calLink = 'samanudfirma', // Enlace real de Cal.com del usuario
  text = 'Agendar Consulta',
  className = 'btn btn-primary'
}: CalButtonProps) {
  
  useEffect(() => {
    // Inicializar la API de Cal (vanilla JS embed)
    if (typeof window !== 'undefined') {
      // Snippet oficial de Cal.com
      ;(function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) {
          a.q.push(ar)
        }
        let d = C.document
        C.Cal = C.Cal || function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            let script = d.createElement('script')
            script.src = A
            d.head.appendChild(script)
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['initNamespace', namespace])
            } else {
              p(cal, ar)
            }
            return
          }
          p(cal, ar)
        }
      })(window, 'https://app.cal.com/embed/embed.js', 'init')
      
      const Cal = (window as any).Cal
      
      Cal('init', { origin: 'https://cal.com' })
      
      // Personalizar los colores
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
