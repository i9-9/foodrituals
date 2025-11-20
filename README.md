# Food Rituals - Next.js Website

Sitio web de Food Rituals desarrollado con Next.js 16, Tailwind CSS v4, y Contentful CMS.

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 20+
- npm o yarn

### Instalación

```bash
npm install
```

### Variables de Entorno

Creá un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.local.example .env.local
```

Luego editá `.env.local` con tus credenciales:

#### Contentful
1. Creá una cuenta en [Contentful](https://www.contentful.com/)
2. Creá un nuevo Space
3. Obtené tu Space ID y Access Token desde Settings > API keys
4. Configurá los content types (ver sección Content Models más abajo)

#### MailChimp
1. Creá una cuenta en [MailChimp](https://mailchimp.com/)
2. Creá una Audience
3. Obtené tu API Key desde Account > Extras > API keys
4. El Audience ID está en Audience > Settings > Audience name and defaults

### Desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📦 Estructura del Proyecto

```
foodrituals/
├── app/                    # App Router de Next.js
│   ├── about/             # Página About
│   ├── contact/           # Página Contact
│   ├── api/               # API Routes
│   │   └── newsletter/    # Endpoint para suscripción
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globales con Tailwind
├── components/            # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Newsletter.tsx
│   ├── VideoSplash.tsx
│   └── PastEventsGallery.tsx
├── lib/                   # Utilidades y helpers
│   └── contentful/        # Cliente y tipos de Contentful
├── public/                # Assets estáticos
│   ├── fonts/            # Fuente Hoefler
│   ├── images/           # Imágenes
│   └── videos/           # Videos
└── backup/               # Backup del sitio WordPress original
```

## 🎨 Content Models en Contentful

### Past Event (pastEvent)

Campos:
- `title` (Short text) - Título del evento
- `number` (Short text) - Número del evento (ej: "01")
- `date` (Short text) - Fecha del evento
- `slug` (Short text) - URL slug
- `images` (Media, multiple) - Galería de imágenes
- `description` (Long text, optional) - Descripción

### Team Member (teamMember)

Campos:
- `name` (Short text) - Nombre
- `bio` (Long text) - Biografía
- `image` (Media) - Foto
- `order` (Number) - Orden de aparición

### Contact Info (contactInfo)

Campos:
- `email` (Short text) - Email de contacto
- `phone` (Short text) - Teléfono
- `instagram` (Short text) - Handle de Instagram
- `vimeo` (Short text, optional) - URL de Vimeo

## 🎯 Características

- ✅ Next.js 16 con App Router
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Contentful CMS integration
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Video splash screen
- ✅ Horizontal scrolling gallery
- ✅ MailChimp newsletter integration
- ✅ Custom Hoefler font
- ✅ Optimized images con Next.js Image

## 🚢 Deployment

### Vercel (Recomendado)

1. Pusheá tu código a GitHub
2. Importá el proyecto en [Vercel](https://vercel.com)
3. Agregá las variables de entorno en el dashboard
4. Deploy automático

### Otras plataformas

El sitio puede deployarse en cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- AWS Amplify
- etc.

## 📝 Migración desde WordPress

El sitio original fue migrado desde WordPress. El backup completo está en la carpeta `backup/`.

Assets migrados:
- ✅ Fuente Hoefler custom
- ✅ Todas las imágenes de eventos
- ✅ Videos (splash, intro, etc.)
- ✅ SVGs y gráficos
- ✅ Contenido de páginas

## 🤝 Soporte

Para preguntas o problemas, contactá a [tu email aquí].

## 📄 Licencia

Copyright © 2025 Food Rituals. Todos los derechos reservados.
