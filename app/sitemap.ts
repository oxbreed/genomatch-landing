import { MetadataRoute } from "next";

// Update these when the corresponding page content meaningfully changes.
const LAST_MODIFIED = {
  home: new Date("2026-06-10"),
  mission: new Date("2026-06-10"),
  partners: new Date("2026-06-10"),
  blog: new Date("2026-06-10"),
  posts: new Date("2026-06-01"),
  legal: new Date("2026-06-01"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://genomatch.app",
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://genomatch.app/mission",
      lastModified: LAST_MODIFIED.mission,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://genomatch.app/partners",
      lastModified: LAST_MODIFIED.partners,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://genomatch.app/blog",
      lastModified: LAST_MODIFIED.blog,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://genomatch.app/blog/what-genotype-should-i-check-before-marriage",
      lastModified: LAST_MODIFIED.posts,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://genomatch.app/blog/can-as-marry-as",
      lastModified: LAST_MODIFIED.posts,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://genomatch.app/blog/sickle-cell-disease-nigeria-facts",
      lastModified: LAST_MODIFIED.posts,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://genomatch.app/privacy",
      lastModified: LAST_MODIFIED.legal,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://genomatch.app/terms",
      lastModified: LAST_MODIFIED.legal,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
