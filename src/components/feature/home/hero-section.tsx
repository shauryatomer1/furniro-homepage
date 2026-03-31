import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types/home";

export function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section className="relative isolate min-h-[540px] overflow-hidden lg:min-h-[716px]">
      <Image
        src="/images/hero.jpg"
        alt="Scandinavian chair with woven seat beside a plant"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="layout-shell relative flex min-h-[540px] items-center justify-center py-8 lg:min-h-[716px] lg:justify-end">
        <div className="bg-brand-soft w-full max-w-[643px] px-6 py-8 shadow-[0_8px_30px_rgb(0_0_0_/_0.06)] md:translate-y-4 md:rounded-[10px] md:px-[39px] md:pt-[62px] md:pb-[37px]">
          <p className="text-foreground text-base font-semibold tracking-[0.18em] uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-brand mt-1 max-w-[420px] text-[38px] leading-[1.2] font-bold whitespace-pre-line md:text-[52px]">
            {hero.title}
          </h1>
          <p className="text-foreground mt-4 max-w-[540px] text-[18px] leading-7">
            {hero.description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 w-full rounded-none md:mt-[46px] md:w-[222px]"
          >
            <Link href="#products">{hero.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
