import { cache } from "react";

import { homePageData } from "@/lib/homepage-data";
import type { HomePageData } from "@/types/home";

export const getHomepageData = cache(async (): Promise<HomePageData> => {
  // Keeping the service async makes it easy to swap this mock payload with a CMS or API later.
  return structuredClone(homePageData);
});
