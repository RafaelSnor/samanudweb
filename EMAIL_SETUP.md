# Configuración de Envío de Emails

El formulario de contacto está configurado para enviar emails usando **Resend**.

## Pasos para Configurar:

### 1. Crear cuenta en Resend
- Ve a https://resend.com
- Crea una cuenta gratuita (100 emails/día gratis)
- Obtén tu API Key desde el dashboard

### 2. Configurar Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto con:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contacto@samanudfirma.com
```

Reemplaza `re_xxxxxxxxxxxxxxxxxxxxx` con tu API Key real de Resend.

### 3. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 4. Verificar el Dominio (Producción)
Para producción, necesitas verificar tu dominio en Resend. 
En desarrollo, puedes usar el email `onboarding@resend.dev`.

## Alternativas

Si prefieres usar otro servicio:
- **Nodemailer** con SMTP (Gmail, Outlook, etc.)
- **SendGrid**
- **Mailgun**

El código está preparado para funcionar sin configuración (solo guarda en logs), pero necesitas configurar las variables de entorno para enviar emails reales.
