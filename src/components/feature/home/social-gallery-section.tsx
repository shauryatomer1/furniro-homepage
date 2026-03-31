import Image from "next/image";

import type { SocialShowcase } from "@/types/home";

export function SocialGallerySection({
  showcase,
}: {
  showcase: SocialShowcase;
}) {
  return (
    <section id="gallery" className="section-space pb-10 lg:pb-[50px]">
      <div className="mx-auto w-full max-w-[1799px]">
        <div className="px-4 text-center md:px-6">
          <p className="text-muted text-[20px] font-semibold">
            {showcase.eyebrow}
          </p>
          <h2 className="text-foreground mt-1 text-[32px] leading-tight font-bold md:text-[40px]">
            {showcase.title}
          </h2>
        </div>
        <div className="mt-[43px]">
          <Image
            src={showcase.image}
            alt={showcase.alt}
            width={1799}
            height={721}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
