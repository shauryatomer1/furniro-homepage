"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui-store";

const headerIcons = [
  {
    key: "account",
    src: "/images/user_icon.png",
    alt: "Account",
    width: 24,
    height: 20,
  },
  {
    key: "search",
    src: "/images/search_icon.png",
    alt: "Search",
    width: 28,
    height: 28,
  },
  {
    key: "favorites",
    src: "/images/heart_icon.png",
    alt: "Favorites",
    width: 28,
    height: 28,
  },
  {
    key: "cart",
    src: "/images/cart_icon.png",
    alt: "Shopping cart",
    width: 28,
    height: 28,
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isMobileMenuOpen = useUiStore((state) => state.isMobileMenuOpen);
  const favoriteCount = useUiStore((state) => state.favoriteProductIds.length);
  const cartCount = useUiStore((state) => state.cartCount);
  const toggleMobileMenu = useUiStore((state) => state.toggleMobileMenu);
  const closeMobileMenu = useUiStore((state) => state.closeMobileMenu);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="layout-shell">
        <div className="flex h-[74px] items-center justify-between lg:h-[100px]">
          <BrandLogo />

          <nav className="hidden items-center gap-[48px] lg:flex">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "hover:text-brand text-base font-medium transition-colors",
                    isActive ? "text-brand" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {headerIcons.map((icon) => {
              const count =
                icon.key === "favorites"
                  ? favoriteCount
                  : icon.key === "cart"
                    ? cartCount
                    : 0;

              return (
                <button
                  key={icon.key}
                  type="button"
                  className="relative inline-flex items-center justify-center"
                  aria-label={icon.alt}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="h-auto"
                  />
                  {count > 0 ? (
                    <span className="bg-brand absolute -top-2 -right-3 inline-flex size-5 items-center justify-center rounded-full text-[11px] font-semibold text-white">
                      {count}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="layout-shell flex flex-col gap-8 py-6">
            <nav className="flex flex-col gap-4">
              {primaryNavigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "hover:text-brand text-base font-medium transition-colors",
                      isActive ? "text-brand" : "text-foreground",
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-5">
              {headerIcons.map((icon) => (
                <button
                  key={icon.key}
                  type="button"
                  className="inline-flex items-center justify-center"
                  aria-label={icon.alt}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    className="h-auto"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
