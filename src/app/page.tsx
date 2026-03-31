import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { BrowseRangeSection } from "@/components/feature/home/browse-range-section";
import { HeroSection } from "@/components/feature/home/hero-section";
import { SocialGallerySection } from "@/components/feature/home/social-gallery-section";
import { siteConfig } from "@/lib/site-config";
import { getHomepageData } from "@/services/homepage-service";

const ProductsSection = dynamic(
  () => import("@/components/feature/home/products-section"),
  {
    loading: () => <ProductsSectionLoading />,
  },
);

const InspirationSection = dynamic(
  () => import("@/components/feature/home/inspiration-section"),
  {
    loading: () => <InspirationSectionLoading />,
  },
);

export const metadata: Metadata = {
  title: "Discover Our New Collection",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Furniro | Discover Our New Collection",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Furniro homepage hero furniture display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniro | Discover Our New Collection",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

function ProductsSectionLoading() {
  return (
    <section className="section-space">
      <div className="layout-shell">
        <div className="mx-auto h-10 w-52 animate-pulse rounded-full bg-black/5" />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-none">
              <div className="aspect-[285/301] animate-pulse bg-black/5" />
              <div className="space-y-3 bg-[#f4f5f7] p-4">
                <div className="h-6 w-2/3 animate-pulse rounded-full bg-black/5" />
                <div className="h-4 w-full animate-pulse rounded-full bg-black/5" />
                <div className="h-5 w-1/2 animate-pulse rounded-full bg-black/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InspirationSectionLoading() {
  return (
    <section className="bg-[#fcf8f3] py-12 lg:py-[44px]">
      <div className="layout-shell grid gap-8 lg:grid-cols-[390px_minmax(0,1fr)] lg:items-center">
        <div className="space-y-4">
          <div className="h-12 w-4/5 animate-pulse rounded-full bg-black/5" />
          <div className="h-16 w-full animate-pulse rounded-2xl bg-black/5" />
          <div className="h-12 w-40 animate-pulse rounded-none bg-black/5" />
        </div>
        <div className="grid gap-6 md:grid-cols-[404px_372px]">
          <div className="h-[420px] animate-pulse bg-black/5 lg:h-[582px]" />
          <div className="hidden h-[486px] animate-pulse bg-black/5 md:block" />
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <main className="bg-background flex-1">
      <HeroSection hero={data.hero} />
      <BrowseRangeSection categories={data.categories} />
      <ProductsSection products={data.products} />
      <InspirationSection inspiration={data.inspiration} />
      <SocialGallerySection showcase={data.socialShowcase} />
    </main>
  );
}
