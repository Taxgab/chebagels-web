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
  mapsEmbedUrl: string;
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
  ogImage: string;
  pedidosYaUrl: string;
}

export const PRODUCTS = [
  {
    id: "merienda",
    name: "Merienda o desayuno",
    description:
      "Empieza bien el dia o hace una pausa como se debe. Siempre con bagels y cafe.",
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
    name: "Bagel de Jamon & Queso",
    description:
      "El clasico nunca falla. Jamon, queso y esa textura que solo un bagel puede darte.",
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
    name: "Salmon Ahumado",
    description:
      "Fresco, elegante, irresistible. Salmon ahumado como te gusta.",
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
      "Termina el dia como se debe: desme de costilla y un chopp bien frio.",
    imageUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750443989/07_bdvhev.png",
    thumbnailUrl:
      "https://res.cloudinary.com/dftyzmbjc/image/upload/v1750444620/07_vf9zcc.png",
    category: "combo",
  },
  {
    id: "desme-costilla-papas",
    name: "Desme Costilla con papas rusticas y Coca-Cola",
    description:
      "Sensual, jugoso y explosivo. Asi es nuestro Desme Costilla.",
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
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5500057765813!2d-57.55787262409685!3d-25.285635977640613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9a2c3e50e6f%3A0x7a0794f70d1b9e87!2sChe%20Bagels!5e0!3m2!1ses!2spy!4v1712345678901",
    hours: "Lun a Sab: 8:00 - 21:00 | Dom: 9:00 - 15:00",
  },
  {
    id: "las-lomas",
    name: "Las Lomas",
    whatsapp: "0972 424 660",
    whatsappUrl: "https://wa.me/595972424660",
    mapsUrl: "https://maps.app.goo.gl/xpprxQ61hssENYsf8",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5500057765813!2d-57.55787262409685!3d-25.285635977640613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9a2c3e50e6f%3A0x7a0794f70d1b9e87!2sChe%20Bagels!5e0!3m2!1ses!2spy!4v1723456789012",
    hours: "Lun a Sab: 8:00 - 21:00 | Dom: 9:00 - 15:00",
  },
  {
    id: "cde",
    name: "CDE",
    whatsapp: "0973 553 211",
    whatsappUrl: "https://wa.me/595973553211",
    mapsUrl: "https://maps.app.goo.gl/wuqFUhJbkP6QH4Vk6",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5500057765813!2d-57.55787262409685!3d-25.285635977640613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9a2c3e50e6f%3A0x7a0794f70d1b9e87!2sChe%20Bagels!5e0!3m2!1ses!2spy!4v1734567890123",
    hours: "Lun a Sab: 8:00 - 21:00 | Dom: 9:00 - 15:00",
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
    "#somoschebagels hacemos bagels artesanales, cada uno hecho a mano. Bagels Neoyorquinos en Asuncion, Paraguay.",
  url: "https://chebagels.com",
  ogImage: "https://chebagels.com/images/logo.png",
  pedidosYaUrl:
    "https://www.pedidosya.com.py/restaurants/asuncion/chebagels",
} as const satisfies SiteConfig;
