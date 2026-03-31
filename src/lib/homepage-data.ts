import type { HomePageData } from "@/types/home";

export const homePageData: HomePageData = {
  hero: {
    eyebrow: "New Arrival",
    title: "Discover Our\nNew Collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    ctaLabel: "BUY NOW",
  },
  categories: [
    {
      id: "dining",
      title: "Dining",
      image: "/images/btr_1.png",
      alt: "Dining room furniture showcase",
    },
    {
      id: "living",
      title: "Living",
      image: "/images/btr_2.png",
      alt: "Living room furniture showcase",
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image: "/images/btr_3.png",
      alt: "Bedroom furniture showcase",
    },
  ],
  products: [
    {
      id: "syltherine",
      title: "Syltherine",
      description: "Stylish cafe chair",
      image: "/images/p_1.png",
      price: 2500000,
      previousPrice: 3500000,
      badge: {
        type: "discount",
        label: "-30%",
      },
    },
    {
      id: "leviosa",
      title: "Leviosa",
      description: "Stylish cafe chair",
      image: "/images/p_2.png",
      price: 2500000,
      previousPrice: 3500000,
    },
    {
      id: "lolito",
      title: "Lolito",
      description: "Luxury big sofa",
      image: "/images/p_3.png",
      price: 7000000,
      previousPrice: 14000000,
      badge: {
        type: "discount",
        label: "-50%",
      },
    },
    {
      id: "respira",
      title: "Respira",
      description: "Outdoor bar table and stool",
      image: "/images/p_4.png",
      price: 500000,
      badge: {
        type: "new",
        label: "New",
      },
    },
    {
      id: "grifo",
      title: "Grifo",
      description: "Night lamp",
      image: "/images/p_5.png",
      price: 1500000,
    },
    {
      id: "muggo",
      title: "Muggo",
      description: "Small mug",
      image: "/images/p_6.png",
      price: 150000,
      badge: {
        type: "new",
        label: "New",
      },
    },
    {
      id: "pingky",
      title: "Pingky",
      description: "Cute bed set",
      image: "/images/p_7.png",
      price: 7000000,
      previousPrice: 14000000,
      badge: {
        type: "discount",
        label: "-50%",
      },
    },
    {
      id: "potty",
      title: "Potty",
      description: "Minimalist flower pot",
      image: "/images/p_8.png",
      price: 500000,
      badge: {
        type: "new",
        label: "New",
      },
    },
  ],
  inspiration: {
    title: "50+ Beautiful rooms inspiration",
    description:
      "Our designer already made a lot of beautiful prototype rooms that inspire you.",
    ctaLabel: "Explore More",
    slides: [
      {
        id: "inner-peace",
        image: "/images/r_1.png",
        alt: "Bedroom inspiration with wall art and soft neutral palette",
        eyebrow: "01 - Bed Room",
        title: "Inner Peace",
      },
      {
        id: "morning-light",
        image: "/images/r_2.png",
        alt: "Bright dining nook with warm wood chairs and soft daylight",
        eyebrow: "02 - Dining Room",
        title: "Morning Light",
      },
      {
        id: "earth-tone",
        image: "/images/r_3.png",
        alt: "Warm minimalist corner with oak dresser and sculptural vase",
        eyebrow: "03 - Living Space",
        title: "Earth Tone",
      },
    ],
  },
  socialShowcase: {
    eyebrow: "Share your setup with",
    title: "#FuniroFurniture",
    image: "/images/share_your_setup.png",
    alt: "Furniro furniture inspiration collage",
  },
};
