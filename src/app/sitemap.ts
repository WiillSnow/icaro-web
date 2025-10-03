import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://www.icarosolar.mx/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.icarosolar.mx/faqs",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }

  ];
}
