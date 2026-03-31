import type { Metadata } from "next";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop preview route for the Furniro homepage implementation.",
};

export default function ShopPage() {
  return (
    <ComingSoonPage
      title="Shop Page Coming Soon"
      description="The brief only required the homepage, so this route is intentionally lightweight while keeping navigation intact."
    />
  );
}
