/**
 * Fotos de trabajos reales del taller.
 *
 * Los archivos viven en src/assets/gallery/ y Astro los optimiza en build.
 * `category` es el servicio principal de la pieza y `tags` los servicios
 * adicionales con los que también aparece al filtrar. `feature: true` marca
 * las fotos que salen en la portada.
 */
const modules = /** @type {Record<string, ImageMetadata>} */ (
  import.meta.glob('../assets/gallery/*.jpg', { eager: true, import: 'default' })
);

const photos = [
  {
    id: 'malim-01',
    category: 'personalizados',
    tags: ['vinyl', 'disenos'],
    alt: 'Bolsa de regalo rosa con «¡Happy Birthday Hellen!» en vinyl glitter, rodeada de corazones y estrellas holográficos.',
  },
  {
    id: 'malim-02',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Taza térmica color menta con el nombre «Hellen» y un corazón en vinyl glitter morado.',
  },
  {
    id: 'malim-03',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Vaso alto con confeti entre la doble pared y el nombre «Miriam Valdés» en vinyl blanco.',
  },
  {
    id: 'malim-04',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Termo verde neón con nombre en vinyl holográfico junto a un vaso de confeti personalizado.',
  },
  {
    id: 'malim-05',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Bolsa de regalo café con «¡Feliz cumpleaños!» en vinyl amarillo y «Chapis» en glitter rosa.',
  },
  {
    id: 'malim-06',
    category: 'personalizados',
    tags: ['vinyl', 'disenos'],
    alt: 'Joyero cuadrado negro con «Koko Sifuentes» y un símbolo de infinito con corazón en vinyl holográfico.',
  },
  {
    id: 'malim-07',
    category: 'disenos',
    tags: ['personalizados', 'vinyl'],
    alt: 'Joyero negro y bolsa turquesa a juego, ambos con el nombre «Meli» y la silueta de un diente en vinyl holográfico.',
  },
  {
    id: 'malim-08',
    category: 'crafter',
    tags: ['personalizados', 'vinyl'],
    alt: 'Bolsa transparente de Halloween con «KOKO» en vinyl rojo glitter, calabazas y un sombrero de bruja.',
  },
  {
    id: 'malim-09',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Vaso rojo con confeti y el nombre «Karen» en vinyl blanco con corazones.',
  },
  {
    id: 'malim-10',
    category: 'crafter',
    tags: ['personalizados'],
    alt: 'Dos cubetas rosa neón de Halloween: una con cara de calabaza y otra con el nombre «Isabel» en vinyl negro.',
  },
  {
    id: 'malim-11',
    category: 'crafter',
    tags: ['personalizados'],
    alt: 'Cubetas neón rosa y amarilla con nombres en vinyl holográfico y fantasmas recortados.',
  },
  {
    id: 'malim-12',
    category: 'vinyl',
    tags: ['personalizados'],
    alt: 'Playera azul marino con el nombre «GAEL» en vinyl holográfico junto a una carita sonriente.',
  },
  {
    id: 'malim-13',
    category: 'crafter',
    tags: ['disenos'],
    feature: true,
    alt: 'Tres mariposas caladas en foamy glitter azul, verde y morado.',
  },
  {
    id: 'malim-14',
    category: 'disenos',
    tags: ['crafter'],
    alt: 'Dos piezas de papel picado en naranja y verde neón caladas con el texto «DON MARIO».',
  },
  {
    id: 'malim-15',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Bolsa transparente con «Happy Birthday Isabella» en vinyl holográfico y relleno de papel morado.',
  },
  {
    id: 'malim-16',
    category: 'personalizados',
    tags: ['vinyl', 'disenos'],
    alt: 'Joyero lila con una mariposa y el nombre «Nancy» en vinyl espejo plateado.',
  },
  {
    id: 'malim-17',
    category: 'agendas',
    tags: ['disenos', 'vinyl'],
    alt: 'Agenda negra con «Happy Birthday» en vinyl holográfico, el nombre «Gemima» sobre una franja dorada y un colibrí ilustrado.',
  },
  {
    id: 'malim-18',
    category: 'crafter',
    tags: ['personalizados'],
    alt: 'Esfera transparente rellena de esferas doradas y luces LED, con el nombre «Gemima» en vinyl dorado y moño rojo.',
  },
  {
    id: 'malim-19',
    category: 'etiquetas',
    tags: ['disenos'],
    feature: true,
    alt: 'Nueve etiquetas circulares transparentes con copos de nieve, renos, pinos y nombres en vinyl de colores.',
  },
  {
    id: 'malim-20',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Bolsa de regalo azul con «Feliz cumpleaños» en vinyl plateado y «Adaly» en glitter rojo.',
  },
  {
    id: 'malim-21',
    category: 'crafter',
    tags: ['personalizados'],
    alt: 'Tres esferas transparentes con luces LED y moño rosa, con las palabras «Mamá» y «Abuelita» en vinyl dorado.',
  },
  {
    id: 'malim-22',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Cuatro joyeros rosas con los nombres Olga, Mayra, Lupita y Nora en vinyl holográfico y copos de nieve.',
  },
  {
    id: 'malim-23',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Joyero color menta con «Neny», un corazón holográfico y la frase «Te Amo Mucho» en vinyl plateado.',
  },
  {
    id: 'malim-24',
    category: 'personalizados',
    tags: ['disenos', 'vinyl'],
    feature: true,
    alt: 'Cinco joyeros negros con nombres en vinyl holográfico y la silueta de una gimnasta sobre un trampolín.',
  },
  {
    id: 'malim-25',
    category: 'personalizados',
    tags: ['vinyl'],
    feature: true,
    alt: 'Seis joyeros en tonos pastel con nombres en vinyl holográfico y copos de nieve.',
  },
  {
    id: 'malim-26',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Tres bolsas de regalo rosas con los nombres Cecy, Blanca y Fátima en vinyl glitter multicolor.',
  },
  {
    id: 'malim-27',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Tres bolsas amarillo neón con los nombres Karen, Diana y Vero en vinyl glitter y copos de nieve.',
  },
  {
    id: 'malim-28',
    category: 'crafter',
    tags: ['personalizados'],
    feature: true,
    alt: 'Seis esferas navideñas transparentes con luces LED, relleno blanco y rojo, nombres en vinyl dorado y moños rojos.',
  },
  {
    id: 'malim-29',
    category: 'etiquetas',
    tags: ['crafter', 'disenos'],
    alt: 'Cinco colgantes de acrílico transparente con moño de listón, nombres en vinyl y siluetas de pino, reno y huella.',
  },
  {
    id: 'malim-30',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Bolsa transparente con «Abril», «Merry Christmas», un pino glitter y renos en vinyl dorado.',
  },
  {
    id: 'malim-31',
    category: 'personalizados',
    tags: ['vinyl'],
    alt: 'Bolsa transparente navideña vista de frente con «Merry Christmas» en vinyl rojo y copos de nieve blancos.',
  },
  {
    id: 'malim-32',
    category: 'personalizados',
    tags: ['vinyl', 'etiquetas'],
    alt: 'Tres termos navideños rojo, verde y blanco con nombres en vinyl y llaveros a juego.',
  },
  {
    id: 'malim-33',
    category: 'vinyl',
    tags: ['personalizados'],
    feature: true,
    alt: 'Cuatro vasos negros con tapa y popote, con nombres en vinyl dorado en letra script.',
  },
  {
    id: 'malim-34',
    category: 'personalizados',
    tags: ['crafter'],
    alt: 'Bolsas transparentes con dulces, nombres en vinyl blanco y copos de nieve, listas para entregar.',
  },
  {
    id: 'malim-35',
    category: 'vinyl',
    tags: ['personalizados'],
    alt: 'Cinco vasos de colores con popote y nombres en vinyl espejo plateado.',
  },
  {
    id: 'malim-36',
    category: 'vinyl',
    tags: ['personalizados'],
    feature: true,
    alt: 'Nueve vasos de colores con nombres en vinyl glitter, alineados frente a un mural navideño escolar.',
  },
];

export const GALLERY = photos.map((photo) => {
  const src = modules[`../assets/gallery/${photo.id}.jpg`];

  if (!src) {
    throw new Error(`Falta src/assets/gallery/${photo.id}.jpg declarado en gallery.js`);
  }

  return { ...photo, src, portrait: src.height > src.width };
});

/** Fotos de un servicio: primero las que lo tienen como categoría principal. */
export function byTag(tag) {
  return [
    ...GALLERY.filter((photo) => photo.category === tag),
    ...GALLERY.filter((photo) => photo.category !== tag && photo.tags.includes(tag)),
  ];
}

/** Una foto concreta por id, para los héroes de cada servicio. */
export function getPhoto(id) {
  const photo = GALLERY.find((item) => item.id === id);

  if (!photo) {
    throw new Error(`No existe la foto ${id} en gallery.js`);
  }

  return photo;
}

export const FEATURED = GALLERY.filter((photo) => photo.feature);
