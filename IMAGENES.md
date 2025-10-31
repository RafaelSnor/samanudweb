# Imágenes Profesionales para SAMANUD FIRMA

## Fuentes de Imágenes Gratuitas

### Unsplash (Recomendado)
- **URL**: https://unsplash.com
- **Licencia**: Gratis para uso comercial, sin atribución requerida (aunque es apreciada)
- **Búsquedas sugeridas**:
  - "law office" - https://unsplash.com/s/photos/law-office
  - "legal documents" - https://unsplash.com/s/photos/legal-documents
  - "business meeting" - https://unsplash.com/s/photos/business-meeting
  - "professional handshake" - https://unsplash.com/s/photos/handshake
  - "modern office" - https://unsplash.com/s/photos/modern-office
  - "lawyer professional" - https://unsplash.com/s/photos/lawyer
  - "legal consultation" - https://unsplash.com/s/photos/legal-consultation

### Pexels
- **URL**: https://www.pexels.com
- **Licencia**: Gratis para uso comercial
- **Búsquedas sugeridas**:
  - "law firm" - https://www.pexels.com/search/law%20firm/
  - "legal" - https://www.pexels.com/search/legal/
  - "corporate lawyer" - https://www.pexels.com/search/corporate%20lawyer/

### Pixabay
- **URL**: https://pixabay.com
- **Licencia**: Gratis para uso comercial, sin atribución requerida
- **Búsquedas sugeridas**:
  - "law" - https://pixabay.com/images/search/law/
  - "legal" - https://pixabay.com/images/search/legal/

## Imágenes Específicas Necesarias

1. **Hero Background** - Oficina moderna, estilo profesional
2. **About Section** - Imagen de equipo trabajando o oficina elegante
3. **Team Photos** - Fotos profesionales de los fundadores (Marco y Paula)
4. **Service Cards** - Iconos o imágenes representativas para cada servicio
5. **Contact Section** - Mapa o imagen de ubicación

## Recomendaciones de Búsqueda en Unsplash

### Para Hero Section:
- Búsqueda: "modern law office interior"
- Estilo: Profesional, limpio, con buena iluminación
- Resolución: Mínimo 1920x1080px

### Para About Section:
- Búsqueda: "professional meeting office"
- Estilo: Colaborativo, moderno
- Resolución: Mínimo 1200x800px

### Para Team Photos:
- Los fundadores deberían proporcionar fotos profesionales
- Alternativamente: Búsqueda "professional headshot" o "business portrait"
- Estilo: Fondo neutro, iluminación profesional
- Resolución: Mínimo 800x800px (cuadrada) o 1200x800px (horizontal)

### Para Service Cards:
- Se pueden usar iconos SVG o imágenes minimalistas
- Búsquedas específicas:
  - "business documents" para Constitución Empresarial
  - "trademark" o "intellectual property" para Marcas
  - "handshake" para Contratos
  - "corporate building" para Derecho Corporativo
  - "real estate" para Derecho Inmobiliario
  - "scale justice" para Litigios

## Instrucciones de Implementación

1. Descargar imágenes en alta resolución
2. Optimizar imágenes usando herramientas como:
   - TinyPNG: https://tinypng.com
   - ImageOptim: https://imageoptim.com
   - Squoosh: https://squoosh.app

3. Guardar imágenes en: `/assets/images/`

4. Usar Next.js Image component para optimización automática:
```tsx
import Image from 'next/image'

<Image
  src="/assets/images/hero-image.jpg"
  alt="SAMANUD FIRMA - Oficina Legal"
  width={1920}
  height={1080}
  priority
/>
```

5. Para imágenes de fondo CSS, usar URLs de Unsplash directamente o descargar y optimizar.

## Notas

- Todas las imágenes deben tener texto alternativo descriptivo para accesibilidad
- Optimizar imágenes para web (formato WebP cuando sea posible)
- Considerar lazy loading para imágenes que no están arriba del fold
- Mantener consistencia en estilo y tono de las imágenes

