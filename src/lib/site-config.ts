import type { LinkItem } from "@/types/home";

type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
};

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return "http://localhost:3000";
  }

  return value.startsWith("http") ? value : `https://${value}`;
}

export const siteConfig: SiteConfig = {
  name: "Furniro",
  description:
    "Pixel-matched Furniro interior landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui patterns.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  ogImage: "/images/hero.jpg",
  keywords: [
    "furniture landing page",
    "interior ecommerce",
    "Furniro homepage",
    "Next.js furniture UI",
    "modern interior furniture",
  ],
};

export const primaryNavigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const helpLinks: LinkItem[] = [
  { label: "Payment Options", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Privacy Policies", href: "#" },
];
