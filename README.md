# Creaciones y Diseño Malim

Sitio del taller de personalizados **Creaciones y Diseño Malim**: diseños, vinyl,
personalizados, crafter, etiquetas y agendas.

Construido con [Astro](https://astro.build) y estático de punta a punta: no hay servidor
ni base de datos, así que se puede publicar en cualquier hosting de archivos.

## Antes de publicar

Todos los datos del negocio viven en un solo archivo: **[`src/data/site.js`](src/data/site.js)**.
Los valores marcados con `TODO` son provisionales y hay que cambiarlos:

| Campo      | Qué poner                                           |
| ---------- | --------------------------------------------------- |
| `url`      | El dominio real, con `https://` y sin barra final    |
| `whatsapp` | El número en formato internacional, solo dígitos     |
| `email`    | El correo de contacto                                |
| `social.*` | Los perfiles reales de Instagram, Facebook y TikTok  |
| `city`     | La ciudad donde se entrega                           |
| `hours`    | El horario de atención real                          |

También hay que actualizar el dominio en [`public/robots.txt`](public/robots.txt).

## Comandos

```bash
pnpm install     # instala dependencias
pnpm dev         # servidor de desarrollo en http://localhost:4321
pnpm build       # genera el sitio estático en dist/
pnpm preview     # sirve dist/ para revisar antes de publicar
pnpm check       # revisa tipos y plantillas
```

## Estructura

```
src/
├── assets/gallery/     36 fotos de trabajos reales (Astro las optimiza a WebP)
├── components/         Nav, Footer, PhotoCard, ServiceTile, Showcase, CtaBand, Faq
├── data/
│   ├── site.js         Datos del negocio: contacto, redes, horario
│   ├── services.js     Catálogo de los seis servicios
│   └── gallery.js      Fotos con texto alternativo, categoría y etiquetas
├── layouts/            BaseLayout: metadatos, Open Graph, JSON-LD y fuentes
├── pages/
│   ├── index.astro         Portada
│   ├── galeria.astro       Galería filtrable con vista ampliada
│   ├── contacto.astro      Formulario que arma el mensaje de WhatsApp
│   ├── 404.astro
│   └── servicios/[slug]    Una página por servicio, generada del catálogo
└── styles/global.css   Tokens de diseño y utilidades
```

## Cómo agregar fotos

1. Copia el `.jpg` a `src/assets/gallery/` con el nombre `malim-NN.jpg`.
2. Agrega su entrada en [`src/data/gallery.js`](src/data/gallery.js):

```js
{
  id: 'malim-37',
  category: 'personalizados',   // servicio principal
  tags: ['vinyl'],              // otros servicios donde también aparece
  feature: true,                // opcional: la muestra en la portada
  alt: 'Describe la pieza: qué objeto es, qué dice y en qué material.',
}
```

El `alt` no es opcional: es lo que leen los buscadores y los lectores de pantalla.
Si el archivo no existe, el build falla con un mensaje claro en vez de romper en silencio.

## Cómo cambiar un servicio

Todo el texto de los servicios (titular, descripción, características y materiales) está en
[`src/data/services.js`](src/data/services.js). El orden de ese array manda en la navegación,
el pie de página, la portada y las rutas. Agregar un objeto nuevo crea su página sola.

## Decisiones de diseño

- **Tipografía del sistema primero.** En Mac y iPhone se usa SF Pro; en el resto de
  plataformas cae en Inter, auto-hospedada con la API de fuentes de Astro para no depender
  de un CDN externo.
- **El color lo ponen las fotos.** La interfaz es blanco, gris y negro; el único acento es un
  degradado holográfico que guiña al vinyl que usa el taller.
- **Cero JavaScript de framework.** Solo tres scripts pequeños: menú móvil, revelado al hacer
  scroll y filtro de galería. Todo lo demás es HTML y CSS.
- **Respeta `prefers-reduced-motion`**: con esa preferencia activada no hay animaciones.

## Publicar

`pnpm build` deja el sitio listo en `dist/`. Se puede subir tal cual a Netlify, Vercel,
Cloudflare Pages o GitHub Pages sin configuración extra.
