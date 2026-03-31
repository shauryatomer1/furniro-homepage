"use client";

import Image from "next/image";
import { GitCompareArrows, Heart, Share2 } from "lucide-react";

import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";
import type { Product } from "@/types/home";

export function ProductCard({ product }: { product: Product }) {
  const isFavorite = useUiStore((state) =>
    state.favoriteProductIds.includes(product.id),
  );
  const toggleFavorite = useUiStore((state) => state.toggleFavorite);
  const addToCart = useUiStore((state) => state.addToCart);

  async function handleShare() {
    if (!navigator.share) {
      return;
    }

    try {
      await navigator.share({
        title: product.title,
        text: product.description,
      });
    } catch {
      // Ignore user-cancelled shares.
    }
  }

  return (
    <article className="group bg-surface relative overflow-hidden">
      <div className="relative aspect-[285/301] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span
            className={cn(
              "absolute top-6 right-6 inline-flex size-12 items-center justify-center rounded-full text-base font-medium text-white",
              product.badge.type === "discount" ? "bg-danger" : "bg-success",
            )}
          >
            {product.badge.label}
          </span>
        ) : null}
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-foreground text-[24px] leading-tight font-semibold">
          {product.title}
        </h3>
        <p className="text-muted text-base font-medium">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-foreground text-[20px] font-semibold">
            {formatRupiah(product.price)}
          </p>
          {product.previousPrice ? (
            <p className="text-muted-2 text-base line-through">
              {formatRupiah(product.previousPrice)}
            </p>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden bg-[#3a3a3a]/72 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 md:block">
        <div className="flex h-full flex-col items-center justify-center px-5">
          <button
            type="button"
            onClick={addToCart}
            className="text-brand min-h-12 min-w-[202px] bg-white px-6 py-3 text-base font-semibold"
          >
            Add to cart
          </button>
          <div className="mt-6 flex items-center gap-5 text-sm font-semibold text-white">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2"
            >
              <Share2 className="size-4" />
              Share
            </button>
            <button type="button" className="inline-flex items-center gap-2">
              <GitCompareArrows className="size-4" />
              Compare
            </button>
            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              className="inline-flex items-center gap-2"
            >
              <Heart className={cn("size-4", isFavorite && "fill-current")} />
              Like
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
