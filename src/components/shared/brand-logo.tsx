import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline-none",
        className,
      )}
      aria-label="Furniro home"
    >
      <Image
        src="/images/logo.png"
        alt="Furniro"
        width={185}
        height={41}
        priority
        className="h-auto w-[132px] md:w-[185px]"
      />
    </Link>
  );
}
