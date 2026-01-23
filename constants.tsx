import React from "react";
import { Leaf, Users, Heart, MapPin, Smile, Mic } from "lucide-react";

export const ASSETS = {
  logos: {
    white:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/logo_marlody_def.png",
    black:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/logo_marlody_def.png",
    ubuntu:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/funamu-logo.png",
    educacion:
      "https://res.cloudinary.com/daivwknum/image/upload/e_trim/v1769191830/11_xyoivp.png",
    cultura:
      "https://res.cloudinary.com/daivwknum/image/upload/e_trim/v1769191836/15_mxn0od.png",
    reparacion:
      "https://res.cloudinary.com/daivwknum/image/upload/e_trim/v1769191831/14_ivewql.png",
    desarrollo:
      "https://res.cloudinary.com/daivwknum/image/upload/e_trim/v1769191830/13_to4ogh.png",
    turismo:
      "https://res.cloudinary.com/daivwknum/image/upload/e_trim/v1769191830/12_kphsay.png",
  },
  images: {
    main: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_01.jpg",
    heroBgMobile:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_01.jpeg",
    heroDesktop:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/banner_desk_marlody.jpeg",
    heroMobile:
      "https://res.cloudinary.com/daivwknum/image/upload/v1769030319/PORTADA_CEL_yfd9wc.png",
    secondary:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_02.jpg",
    howToVote:
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/como_votar_lesdy.jpeg",
    gallery: [
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_03.jpg",
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_04.jpeg",
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_05.jpeg",
      "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/marlody-web/marlody_imagen_06.jpeg",
    ],
    imageCarousel: [
      "https://res.cloudinary.com/daivwknum/image/upload/v1769119740/1_pb86xs.png",
      "https://res.cloudinary.com/daivwknum/image/upload/v1769119741/2_k5ctcg.png",
      "https://res.cloudinary.com/daivwknum/image/upload/v1769119742/3_zaeknn.png",
      "https://res.cloudinary.com/daivwknum/image/upload/v1769119741/4_szqxns.png",
      "https://res.cloudinary.com/daivwknum/image/upload/v1769188984/5_mqfs7s.png",
    ],
  },
  video:
    "https://res.cloudinary.com/daivwknum/raw/upload/v1769033500/DSGxxXbDbcw_hza5ee",
};

export const CONTENT = {
  hero: {
    title: "Lesdy Marlody Rodríguez Quiñones",
    titleHighlight: "Una mujer que cumple su palabra",
    role: "Candidata a la Cámara de Representantes – Curul Especial de Paz",
    region: "Caquetá | Territorio, dignidad y verdad",
    description:
      "Soy mujer afroamazónica, víctima del conflicto armado y he dedicado mi vida a cumplirle a mi gente. Hoy doy un paso más para representar al Caquetá en el Congreso.",
  },
  values: [
    {
      title: "Dignidad",
      desc: "Porque no nacimos para mendigar derechos.",
      icon: <Users className="w-8 h-8 text-gold" />,
    },
    {
      title: "Felicidad",
      desc: "Porque vivir bien también es justicia.",
      icon: <Smile className="w-8 h-8 text-gold" />,
    },
    {
      title: "Comunidad",
      desc: "Porque nadie se salva solo.",
      icon: <Heart className="w-8 h-8 text-gold" />,
    },
  ],
  axes: [
    {
      id: 1,
      title: "Dignidad con oportunidades reales",
      description:
        "Impulsar condiciones de vida justas para las comunidades afro y rurales, con enfoque territorial.",
      icon: <Leaf />,
    },
    {
      id: 2,
      title: "Mujeres y juventudes al centro",
      description: "Más liderazgo, más seguridad, más autonomía económica.",
      icon: <Users />,
    },
    {
      id: 3,
      title: "Cultura, identidad y memoria viva",
      description:
        "La identidad afroamazónica como fuerza de futuro, no como nota al margen.",
      icon: <Mic />,
    },
    {
      id: 4,
      title: "Territorio que decide",
      description:
        "Que la inversión, los programas y la política pública nazcan de escuchar a la comunidad.",
      icon: <MapPin />,
    },
  ],
};
