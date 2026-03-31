import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ComingSoonPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="layout-shell flex flex-1 items-center justify-center py-24">
      <section className="border-border bg-brand-soft max-w-xl space-y-4 rounded-[24px] border p-8 text-center shadow-sm">
        <p className="text-brand text-sm font-semibold tracking-[0.18em] uppercase">
          Preview Route
        </p>
        <h1 className="text-foreground text-[32px] leading-tight font-bold">
          {title}
        </h1>
        <p className="text-muted text-base leading-7">{description}</p>
        <Button asChild className="rounded-none px-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </section>
    </main>
  );
}
