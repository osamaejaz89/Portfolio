import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://osamaejaz.dev";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/playground`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
