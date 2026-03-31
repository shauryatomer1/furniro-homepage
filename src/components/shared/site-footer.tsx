import dynamic from "next/dynamic";
import Link from "next/link";

import { helpLinks, primaryNavigation } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

const NewsletterForm = dynamic(
  () => import("@/components/shared/newsletter-form"),
  {
    loading: () => <div className="border-border h-11 w-full border-b" />,
  },
);

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-white">
      <div className="layout-shell pt-12 pb-8">
        <Separator />
        <div className="grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.7fr_1fr]">
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-foreground text-2xl font-bold">Funiro.</h2>
              <p className="text-muted-2 max-w-[280px] text-base leading-7">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-muted-2 text-base font-medium">Links</h3>
            <ul className="space-y-7">
              {primaryNavigation.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-foreground hover:text-brand font-medium"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-muted-2 text-base font-medium">Help</h3>
            <ul className="space-y-7">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-foreground hover:text-brand font-medium"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-muted-2 text-base font-medium">Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>
        <Separator />
        <p className="text-foreground pt-8 text-sm">
          2023 furino. All rights reserved
        </p>
      </div>
    </footer>
  );
}
