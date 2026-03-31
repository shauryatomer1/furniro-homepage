export type LinkItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export type Category = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

export type ProductBadge =
  | {
      type: "discount";
      label: string;
    }
  | {
      type: "new";
      label: string;
    };

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice?: number;
  badge?: ProductBadge;
};

export type InspirationSlide = {
  id: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
};

export type InspirationContent = {
  title: string;
  description: string;
  ctaLabel: string;
  slides: InspirationSlide[];
};

export type SocialShowcase = {
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
};

export type HomePageData = {
  hero: HeroContent;
  categories: Category[];
  products: Product[];
  inspiration: InspirationContent;
  socialShowcase: SocialShowcase;
};
