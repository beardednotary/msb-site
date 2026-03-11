import { MetadataRoute } from "next";

const BASE = "https://mysocialbattery.app";

const pages: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/about/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/blog/", priority: 0.7, changeFrequency: "weekly" },
  { url: "/privacy-policy/", priority: 0.4, changeFrequency: "yearly" },
  { url: "/terms-of-service/", priority: 0.4, changeFrequency: "yearly" },
  { url: "/support/", priority: 0.6, changeFrequency: "monthly" },
  // Content pages
  { url: "/social-battery-phenomenon/", priority: 0.9, changeFrequency: "monthly" },
  { url: "/the-hidden-cost-of-people-pleasing/", priority: 0.9, changeFrequency: "monthly" },
  { url: "/introvert-extrovert-social-energy-drain/", priority: 0.9, changeFrequency: "monthly" },
  { url: "/7-signs-socially-burned-out/", priority: 0.9, changeFrequency: "monthly" },
  { url: "/30-day-social-energy-experiment/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/the-friendship-audit/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/introverts-guide-to-networking/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/remote-work-social-adapt/", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
