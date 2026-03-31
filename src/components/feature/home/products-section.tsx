"use client";

import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/home";

import { ProductCard } from "./product-card";

export default function ProductsSection({ products }: { products: Product[] }) {
  return (
    <section id="products" className="section-space pt-0">
      <div className="layout-shell">
        <SectionHeading title="Our Products" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-[32px] md:gap-6 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            type="button"
            variant="outline"
            className="min-w-[245px] rounded-none px-10"
          >
            <Link href="/shop">Show More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
