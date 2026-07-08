# Club Atlético Volcanes — Sitio Web

Proyecto Next.js 15 + TypeScript + Tailwind CSS + Framer Motion.

## Cómo publicar este sitio en Vercel (sin usar la terminal)

### Paso 1 — Sube el proyecto a GitHub
1. Crea una cuenta gratis en https://github.com (si no tienes una).
2. Entra a https://github.com/new y crea un repositorio nuevo. Ponle de nombre, por ejemplo,
   `volcanes-web`. Déjalo en **Public** o **Private**, como prefieras. No marques ninguna
   casilla adicional (README, .gitignore, licencia).
3. En la página del repositorio recién creado, busca el link **"uploading an existing file"**
   (o el botón "Add file" → "Upload files").
4. Arrastra **todos los archivos y carpetas de este proyecto** (excepto `node_modules` y
   `.next`, si existieran) a esa ventana. Espera a que termine de subir y presiona
   **"Commit changes"**.

### Paso 2 — Conecta con Vercel
1. Crea una cuenta gratis en https://vercel.com (puedes entrar directo con tu cuenta de GitHub).
2. Click en **"Add New..." → "Project"**.
3. Selecciona el repositorio `volcanes-web` que acabas de subir.
4. Vercel detecta automáticamente que es un proyecto Next.js. No necesitas cambiar
   ninguna configuración.
5. Click en **"Deploy"**. En 1-2 minutos tu sitio estará en línea con una URL como
   `volcanes-web.vercel.app`.

### Paso 3 — Dominio propio (opcional)
Si tienes un dominio (por ejemplo, `clubvolcanes.cl`), en el proyecto dentro de Vercel ve a
**Settings → Domains** y agrégalo. Vercel te dará instrucciones exactas de qué registros DNS
configurar en tu proveedor de dominio.

### Actualizar el sitio en el futuro
Cada vez que subas cambios de archivos a ese mismo repositorio de GitHub (arrastrando los
archivos nuevos y haciendo "Commit changes"), Vercel vuelve a publicar el sitio
automáticamente con los cambios. No necesitas volver a hacer nada en Vercel.

## Contenido pendiente de personalizar

- **Fotografía real**: el sitio usa un motivo gráfico de montañas como reemplazo temporal
  de fotografía (ver `public/images/README.md` para instrucciones de reemplazo).
- **Textos de ejemplo**: historia del club, atletas, noticias y testimonios en
  `lib/data.ts` y en las páginas de `app/el-club`, `app/escuela` son de ejemplo — reemplázalos
  por el contenido real del club.
- **WhatsApp y redes sociales**: el número de WhatsApp de ejemplo está en
  `app/contacto/page.tsx` (buscar `56900000000`). Los links de Instagram/Facebook están
  vacíos (`href="#"`) en `components/layout/Footer.tsx`.
- **Formulario de contacto**: hoy es una maqueta visual. Para que los mensajes lleguen a tu
  correo de verdad, hay que conectarlo a un servicio como Formspree o Resend (esto se puede
  hacer en una siguiente etapa).
- **Feed de Instagram**: no está incluido aún — requiere crear una cuenta de Instagram
  Business y una app en Meta for Developers. Se puede agregar en una siguiente etapa.

## Comandos (opcional, solo si en algún momento quieres correrlo en tu computador)

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador.
