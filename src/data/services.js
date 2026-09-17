/**
 * Catálogo de servicios del taller.
 *
 * El orden de este array manda en la navegación, el pie de página, la portada
 * y las rutas dinámicas /servicios/[slug]. `tag` es la etiqueta con la que se
 * filtran las fotos en src/data/gallery.js.
 */
export const SERVICES = [
  {
    slug: 'disenos',
    name: 'Diseños',
    tag: 'disenos',
    tagline: 'Tu idea. Lista para cortar.',
    summary:
      'Todo empieza con el trazo. Tipografía, color y proporción pensados para la pieza exacta donde van.',
    description:
      'Cada trabajo arranca con un archivo vectorial hecho a la medida del objeto: monogramas, nombres en script, ilustraciones y sets temáticos completos. Te mandamos la propuesta en digital y el vinyl no se corta hasta que la apruebas.',
    heroId: 'malim-14',
    features: [
      {
        title: 'Propuesta antes del corte',
        text: 'Ves una vista previa digital sobre la foto del producto. Si algo no convence, se cambia sin costo.',
      },
      {
        title: 'Vectorial de origen',
        text: 'Trazos limpios que se cortan nítidos lo mismo en una etiqueta de 3 cm que en una playera.',
      },
      {
        title: 'Sets con un mismo idioma',
        text: 'Un concepto aplicado a vasos, bolsas, etiquetas y joyeros para que la mesa de regalos se vea de una sola pieza.',
      },
      {
        title: 'Tipografías con carácter',
        text: 'Script, display, manuscrita o geométrica. Elegimos la que le queda al nombre y al objeto.',
      },
    ],
    materials: ['Monogramas', 'Nombres en script', 'Ilustración vectorial', 'Sets temáticos'],
  },
  {
    slug: 'vinyl',
    name: 'Vinyl',
    tag: 'vinyl',
    tagline: 'Textil, holográfico, glitter y espejo.',
    summary:
      'Corte de precisión y aplicación con calor o adhesivo permanente sobre casi cualquier superficie.',
    description:
      'Trabajamos vinyl de grado profesional: textil termoadherible para prendas, permanente para plástico, cristal y acrílico, y acabados holográfico, glitter y espejo para cuando la pieza tiene que brillar. Cada corte se despunta a mano para que ni la letra más delgada se levante.',
    heroId: 'malim-33',
    features: [
      {
        title: 'Textil termoadherible',
        text: 'Playeras, sudaderas y totes. Aguanta lavadas sin cuartearse ni despegarse de las orillas.',
      },
      {
        title: 'Permanente',
        text: 'Vasos, termos, joyeros y cristal. Adherencia total en superficies lisas y curvas.',
      },
      {
        title: 'Holográfico y espejo',
        text: 'El acabado que cambia de color con la luz. Es la firma de la casa.',
      },
      {
        title: 'Glitter',
        text: 'Brillo parejo y sin caída, porque el destello va dentro del material, no encima.',
      },
    ],
    materials: ['Textil (HTV)', 'Permanente', 'Holográfico', 'Glitter', 'Espejo', 'Flocado'],
  },
  {
    slug: 'personalizados',
    name: 'Personalizados',
    tag: 'personalizados',
    tagline: 'Tu nombre en lo que usas todos los días.',
    summary:
      'Vasos, termos, joyeros, bolsas, playeras y cubetas. Si tiene superficie, lleva tu nombre.',
    description:
      'Es lo que más sale del taller: el vaso con el que llegas a la oficina, el joyero que le regalas a tu mamá, la bolsa con la que entregas el detalle. Trabajamos por pieza suelta o por lote, y en lote todas salen con el mismo diseño y distinto nombre.',
    heroId: 'malim-24',
    features: [
      {
        title: 'Desde una pieza',
        text: 'No hay mínimo. Un solo vaso se cotiza igual de bien que treinta.',
      },
      {
        title: 'Lotes con nombre distinto',
        text: 'Mismo diseño, un nombre por pieza. Ideal para equipos, salones y despedidas.',
      },
      {
        title: 'Catálogo abierto',
        text: 'Vasos, termos, joyeros, bolsas de regalo, playeras, cubetas, libretas y más.',
      },
      {
        title: 'Traes tu propio artículo',
        text: 'Si ya tienes el objeto, lo personalizamos. Solo se cobra diseño y aplicación.',
      },
    ],
    materials: [
      'Vasos y termos',
      'Joyeros',
      'Bolsas de regalo',
      'Playeras',
      'Cubetas',
      'Cristalería',
    ],
  },
  {
    slug: 'crafter',
    name: 'Crafter',
    tag: 'crafter',
    tagline: 'Piezas cortadas y armadas a mano.',
    summary:
      'Figuras en foamy glitter, papel picado, esferas rellenas con luces y decoración de temporada.',
    description:
      'La parte del taller que no es solo vinyl: cortamos, doblamos, rellenamos y armamos. Mariposas para un muro, papel picado con el nombre del festejado, esferas transparentes con luces LED adentro y cubetas de dulces para Halloween. Piezas que se entregan terminadas y listas para colgar.',
    heroId: 'malim-28',
    features: [
      {
        title: 'Corte en foamy y papel',
        text: 'Mariposas, flores, letras y papel picado con el detalle que no da la tijera.',
      },
      {
        title: 'Esferas con luces',
        text: 'Acrílico transparente, relleno a mano, luces LED y moño. Se entregan encendidas.',
      },
      {
        title: 'Decoración por temporada',
        text: 'Navidad, Halloween, Día de Muertos, bautizos y graduaciones.',
      },
      {
        title: 'Ambientación completa',
        text: 'Cotizamos el muro, la mesa y los recuerditos como un solo proyecto.',
      },
    ],
    materials: ['Foamy glitter', 'Papel picado', 'Esferas acrílicas', 'Luces LED', 'Moños'],
  },
  {
    slug: 'etiquetas',
    name: 'Etiquetas',
    tag: 'etiquetas',
    tagline: 'El detalle que cierra el regalo.',
    summary: 'Etiquetas, colgantes y stickers a juego con el resto de la mesa.',
    description:
      'La pieza chica que hace que todo se vea pensado. Etiquetas circulares para la esfera, colgantes de acrílico con moño, stickers para cerrar la bolsa y tarjetas con el nombre de cada invitado. Se cortan en el mismo diseño y con el mismo vinyl que el resto del pedido.',
    heroId: 'malim-19',
    features: [
      {
        title: 'A juego con tu pedido',
        text: 'Misma tipografía y mismo acabado que los vasos, las bolsas o las esferas.',
      },
      {
        title: 'Formas a la medida',
        text: 'Circular, rectangular, troquelada o con la silueta que pidas.',
      },
      {
        title: 'Colgantes de acrílico',
        text: 'Con moño de listón y nombre en vinyl espejo o glitter.',
      },
      {
        title: 'Por lote',
        text: 'Series numeradas o con un nombre distinto en cada etiqueta.',
      },
    ],
    materials: ['Vinyl adhesivo', 'Acrílico', 'Papel opalina', 'Listón'],
  },
  {
    slug: 'agendas',
    name: 'Agendas',
    tag: 'agendas',
    tagline: 'Doce meses con tu nombre en la portada.',
    summary: 'Agendas, libretas y cuadernos personalizados en portada y contraportada.',
    description:
      'Una agenda deja de ser genérica en cuanto lleva tu nombre. Personalizamos portada y contraportada con vinyl holográfico, espejo o mate, y añadimos la ilustración o la frase que quieras. Funciona igual de bien como regalo individual que como detalle corporativo de fin de año.',
    heroId: 'malim-17',
    features: [
      {
        title: 'Portada y contraportada',
        text: 'Nombre, iniciales, frase o ilustración en el acabado que elijas.',
      },
      {
        title: 'Regalo corporativo',
        text: 'Lotes con el logo de la empresa y el nombre de cada colaborador.',
      },
      {
        title: 'Tú eliges la agenda',
        text: 'Trabajamos sobre la libreta que nos traigas o te conseguimos el modelo.',
      },
      {
        title: 'Acabados que aguantan',
        text: 'Vinyl permanente que resiste el trajín de la mochila todo el año.',
      },
    ],
    materials: ['Agendas', 'Libretas', 'Cuadernos', 'Carpetas'],
  },
];

/** Busca un servicio por su slug. */
export function getService(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
