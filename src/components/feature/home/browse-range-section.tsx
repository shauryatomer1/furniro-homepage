import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import type { Category } from "@/types/home";

export function BrowseRangeSection({ categories }: { categories: Category[] }) {
  return (
    <section className="section-space">
      <div className="layout-shell">
        <SectionHeading
          title="Browse The Range"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="mt-[32px] grid gap-5 md:grid-cols-3 lg:mt-[62px]">
          {categories.map((category) => (
            <article key={category.id} className="space-y-[30px]">
              <div className="relative aspect-[381/480] overflow-hidden rounded-[10px]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-foreground text-center text-[24px] font-semibold">
                {category.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
