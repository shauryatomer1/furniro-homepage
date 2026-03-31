import type { Metadata } from "next";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact preview route for the Furniro homepage implementation.",
};

export default function ContactPage() {
  return (
    <ComingSoonPage
      title="Contact Page Coming Soon"
      description="This preview route avoids dead navigation and leaves room for the remaining pages to be implemented later."
    />
  );
}
