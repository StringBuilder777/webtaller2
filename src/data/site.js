/**
 * Configuración única del negocio.
 *
 * ⚠️ Los valores marcados con TODO son provisionales: reemplázalos por los
 * datos reales de Creaciones y Diseño Malim antes de publicar. Todo el sitio
 * (nav, footer, botones de WhatsApp, SEO y sitemap) lee de aquí.
 */
export const SITE = {
  name: 'Creaciones y Diseño Malim',
  shortName: 'Malim',
  tagline: 'Personalizado. Al detalle.',
  description:
    'Vinyl textil y holográfico, artículos personalizados, crafter, etiquetas y agendas. Diseñamos y cortamos cada pieza a tu nombre.',
  // TODO: cambiar por el dominio real.
  url: 'https://creacionesmalim.com',
  locale: 'es-MX',
  // TODO: número real en formato internacional, solo dígitos.
  whatsapp: '5215512345678',
  // TODO: correo real.
  email: 'hola@creacionesmalim.com',
  city: 'México',
  social: {
    // TODO: usuarios reales de redes.
    instagram: 'https://instagram.com/creacionesmalim',
    facebook: 'https://facebook.com/creacionesmalim',
    tiktok: 'https://tiktok.com/@creacionesmalim',
  },
  hours: [
    { days: 'Lunes a viernes', time: '10:00 – 19:00' },
    { days: 'Sábado', time: '10:00 – 14:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
};

/** Arma un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message = '¡Hola! Me gustaría cotizar un personalizado.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
