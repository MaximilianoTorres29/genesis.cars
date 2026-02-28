# Génesis Cars – Landing Page

Landing profesional para el concesionario de vehículos usados seleccionados **Génesis Cars**. Desarrollada con React, Vite y Tailwind CSS.

## Características

- **Diseño moderno y premium**: Azul oscuro, celeste de acento, tipografía Inter
- **Responsive**: Mobile first, adaptable a todos los dispositivos
- **Conversión por WhatsApp**: Botón flotante y CTAs en Header, Hero, cards y Footer
- **Rutas**: Inicio, detalle de vehículo (`/vehiculo/:id`), anclas (#vehiculos, #como-trabajamos, #contacto)
- **Animaciones**: Fade-in en Hero, scroll reveal en secciones
- **SEO**: Meta description y title en `index.html`

## Estructura del proyecto

```
src/
├── components/     # Header, Footer, Hero, VehicleCard, WhatsAppButton, ContactForm, etc.
├── pages/          # Home, VehicleDetail
├── data/           # vehicles.json (listado de vehículos)
├── constants.js    # WhatsApp, email de contacto
├── App.jsx
├── main.jsx
└── index.css
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build para producción

```bash
npm run build
npm run preview   # previsualizar el build
```

## Datos editables

- **Vehículos**: `src/data/vehicles.json`
- **WhatsApp**: `src/constants.js` (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`)
- **Email contacto**: `src/constants.js` (`CONTACT_EMAIL`)

El formulario de contacto usa `mailto:` hacia el email configurado. Para envío real desde el sitio podés integrar un backend o servicio (Formspree, EmailJS, etc.).

## Deploy

El proyecto incluye configuración para:

- **Vercel**: `vercel.json` con rewrite para SPA (React Router).
- **Netlify**: `public/_redirects` para que todas las rutas sirvan `index.html`.

### Subir a GitHub

Si este proyecto está dentro de un repo que contiene más carpetas:

1. Crea un repositorio nuevo en GitHub (ej. `genesis-cars`).
2. Desde la raíz del repo (carpeta que contiene `génesis-cars`):
   ```bash
   git remote add origin https://github.com/TU_USUARIO/genesis-cars.git
   git push -u origin main
   ```
3. En Vercel o Netlify, al importar el repo, **configura "Root Directory"** como `génesis-cars` (o el nombre de esta carpeta).

Si preferís un repo solo para Génesis Cars:

1. Crea un repo vacío en GitHub.
2. Dentro de la carpeta `génesis-cars`:
   ```bash
   git init
   git add .
   git commit -m "feat: landing Génesis Cars"
   git remote add origin https://github.com/TU_USUARIO/genesis-cars.git
   git branch -M main
   git push -u origin main
   ```
3. Conectá ese repo con Vercel o Netlify (sin root directory).

### Vercel (recomendado)

1. [vercel.com](https://vercel.com) → Import Project → elegí el repo.
2. Root Directory: `génesis-cars` (si el repo es el padre) o dejar vacío si el repo es solo este proyecto.
3. Build: `npm run build`. Output: `dist`.
4. Deploy.

### Netlify

1. [netlify.com](https://netlify.com) → Add new site → Import from Git.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy.

## Tecnologías

- React 18
- Vite 5
- React Router 6
- Tailwind CSS 3
