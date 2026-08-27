import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/advocate";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-27"),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
