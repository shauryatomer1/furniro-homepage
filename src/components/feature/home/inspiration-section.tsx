"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { InspirationContent } from "@/types/home";

export default function InspirationSection({
  inspiration,
}: {
  inspiration: InspirationContent;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = inspiration.slides[activeIndex];
  const nextSlide =
    inspiration.slides[(activeIndex + 1) % inspiration.slides.length];

  return (
    <section className="bg-surface-alt py-12 lg:py-[44px]">
      <div className="layout-shell grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center">
        <div className="max-w-[422px]">
          <h2 className="text-foreground text-[32px] leading-tight font-bold md:text-[40px]">
            {inspiration.title}
          </h2>
          <p className="text-muted mt-4 text-base leading-7 font-medium">
            {inspiration.description}
          </p>
          <Button asChild className="mt-6 rounded-none px-9 md:mt-[25px]">
            <Link href="#gallery">{inspiration.ctaLabel}</Link>
          </Button>
        </div>

        <div className="relative flex min-w-0 items-end gap-4 overflow-hidden md:gap-6">
          <div className="relative h-[360px] w-full max-w-[285px] overflow-hidden sm:max-w-[320px] md:h-[582px] md:max-w-[404px]">
            <Image
              src={activeSlide.image}
              alt={activeSlide.alt}
              fill
              sizes="(max-width: 639px) 70vw, (max-width: 1023px) 320px, 404px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-end gap-3 md:bottom-6 md:left-6 md:gap-4">
              <div className="bg-white/88 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
                <p className="text-muted text-sm font-medium md:text-base">
                  {activeSlide.eyebrow}
                </p>
                <h3 className="text-foreground mt-2 text-[20px] font-semibold md:text-[28px]">
                  {activeSlide.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Next inspiration room"
                onClick={() =>
                  setActiveIndex(
                    (index) => (index + 1) % inspiration.slides.length,
                  )
                }
                className="bg-brand inline-flex size-10 items-center justify-center text-white shadow-lg md:size-12"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="h-[300px] w-[110px] overflow-hidden sm:w-[132px] md:h-[486px] md:w-[372px]">
            <div className="relative h-full w-full">
              <Image
                src={nextSlide.image}
                alt={nextSlide.alt}
                fill
                sizes="(max-width: 639px) 110px, (max-width: 767px) 132px, 372px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute right-0 -bottom-10 flex items-center gap-3 md:right-[182px] md:bottom-6">
            {inspiration.slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.title}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full border transition-colors",
                  index === activeIndex
                    ? "border-brand size-[27px] p-[7px]"
                    : "size-[11px] border-transparent bg-[#d8d8d8]",
                )}
              >
                {index === activeIndex ? (
                  <span className="bg-brand block size-full rounded-full" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
