import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'SAMANUD FIRMA | Asesoría Jurídica',
  description: 'Asesoría jurídica con propósito humano. Transformamos la complejidad legal en soluciones que generan confianza.',
  keywords: 'abogados perú, asesoría legal, derecho corporativo, derecho inmobiliario, SAMANUD FIRMA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

