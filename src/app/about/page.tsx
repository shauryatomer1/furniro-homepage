import type { Metadata } from "next";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";

export const metadata: Metadata = {
  title: "About",
  description: "About preview route for the Furniro homepage implementation.",
};

export default function AboutPage() {
  return (
    <ComingSoonPage
      title="About Page Coming Soon"
      description="This placeholder keeps the global navigation working while the scoped homepage remains the primary deliverable."
    />
  );
}
