export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: "salado" | "dulce" | "combo";
}

export interface Location {
  id: string;
  name: string;
  whatsapp: string;
  whatsappUrl: string;
  mapsUrl: string;
  coordinates: { lat: number; lng: number };
  hours: string;
}

export interface SocialLink {
  platform: "instagram" | "tiktok" | "facebook" | "x";
  url: string;
  label: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  url: string;
  pedidosYaUrl: string;
}

export const PRODUCTS = [
  {
    id: "merienda",
    name: "Merienda o desayuno",
    description:
      "Empieza bien el día o hacé una pausa como se debe. Siempre con bagels y café.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/01_pjhdis.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444619/01_dpxw13.png",
    category: "combo",
  },
  {
    id: "langostinos",
    name: "Langostinos apanados + papas + Coca-Cola",
    description:
      "Crujiente, sabroso y con todo lo que te gusta. Langostinos + papas + Coca = plan completo.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443987/02_s5ishz.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/02_qksjzs.png",
    category: "combo",
  },
  {
    id: "jamon-queso",
    name: "Bagel de Jamón & Queso",
    description:
      "El clásico nunca falla. Jamón, queso y esa textura que solo un bagel puede darte.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/03_xwzsrz.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/03_gqsx6o.png",
    category: "salado",
  },
  {
    id: "milanesa-lomo",
    name: "Milanesa de Lomo y Crunchi de Pollo",
    description:
      "¿Carne o pollo? Mejor los dos. Potentes, crujientes y 100% Che Bagels.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/04_vhwqt1.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/04_jtedh8.png",
    category: "salado",
  },
  {
    id: "queso-crema-frutos",
    name: "Bagel de queso crema y frutos del bosque",
    description:
      "Dulce, cremoso y brutalmente rico. Frutos del bosque sobre queso crema.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/05_axebit.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/05_lb4aj5.png",
    category: "dulce",
  },
  {
    id: "salmon-ahumado",
    name: "Salmón Ahumado",
    description:
      "Fresco, elegante, irresistible. Salmón ahumado como te gusta.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/06_arzrgh.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/06_foiyaf.png",
    category: "salado",
  },
  {
    id: "desme-costilla-chopp",
    name: "Desme Costilla + chopp",
    description:
      "Terminá el día como se debe: desme de costilla y un chopp bien frío.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443989/07_bdvhev.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/07_vf9zcc.png",
    category: "combo",
  },
  {
    id: "desme-costilla-papas",
    name: "Desme Costilla con papas rústicas y Coca-Cola",
    description:
      "Sensual, jugoso y explosivo. Así es nuestro Desme Costilla.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443988/08_koxxpy.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444621/08_lvhskn.png",
    category: "combo",
  },
] as const satisfies readonly Product[];

export const LOCATIONS = [
  {
    id: "recoleta",
    name: "Recoleta",
    whatsapp: "0981 134 017",
    whatsappUrl: "https://wa.me/595981134017",
    mapsUrl: "https://maps.app.goo.gl/U4TTZbCyhpCc1jmr9",
    coordinates: { lat: -25.2958524, lng: -57.5832832 },
    hours: "Lun a Sáb: 8:00 - 21:00 | Dom: 9:00 - 15:00",
  },
  {
    id: "las-lomas",
    name: "Las Lomas",
    whatsapp: "0972 424 660",
    whatsappUrl: "https://wa.me/595972424660",
    mapsUrl: "https://maps.app.goo.gl/xpprxQ61hssENYsf8",
    coordinates: { lat: -25.2749125, lng: -57.5792031 },
    hours: "Lun a Sáb: 8:00 - 21:00 | Dom: 9:00 - 15:00",
  },
  {
    id: "cde",
    name: "CDE",
    whatsapp: "0973 553 211",
    whatsappUrl: "https://wa.me/595973553211",
    mapsUrl: "https://maps.app.goo.gl/wuqFUhJbkP6QH4Vk6",
    coordinates: { lat: -25.5239444, lng: -54.6199347 },
    hours: "Lun a Sáb: 8:00 - 21:00 | Dom: 9:00 - 15:00",
  },
] as const satisfies readonly Location[];

export const SOCIAL_LINKS = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/chebagels/",
    label: "Instagram",
  },
  {
    platform: "tiktok",
    url: "https://www.tiktok.com/@chebagels",
    label: "TikTok",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/profile.php?id=61576231635295",
    label: "Facebook",
  },
  {
    platform: "x",
    url: "https://x.com/bagelsche",
    label: "X",
  },
] as const satisfies readonly SocialLink[];

export const SITE_CONFIG = {
  brandName: "Che Bagels",
  tagline: "Bagels Neoyorquinos en Paraguay",
  headline: "Bagels Neoyorquinos",
  subheadline: "en Paraguay",
  description:
    "#somoschebagels hacemos bagels artesanales, cada uno hecho a mano. Bagels Neoyorquinos en Asunción, Paraguay.",
  url: "https://chebagels.com",
  pedidosYaUrl:
    "https://www.pedidosya.com.py/restaurants/asuncion/chebagels",
} as const satisfies SiteConfig;
