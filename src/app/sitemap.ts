import { existsSync, statSync } from "fs";
import { join } from "path";
import { MetadataRoute } from "next";

const BASE = "https://mysocialbattery.app";

const pages: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/social-battery-app/", priority: 0.95, changeFrequency: "weekly" },
  { url: "/about/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/faq/", priority: 0.8, changeFrequency: "monthly" },
  { url: "/blog/", priority: 0.7, changeFrequency: "weekly" },
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

function getPageFilePath(url: string) {
  if (url === "/") {
    return join(process.cwd(), "src", "app", "page.tsx");
  }

  const slug = url.replace(/^\/|\/$/g, "");
  return join(process.cwd(), "src", "app", slug, "page.tsx");
}

function getLastModified(url: string) {
  const filePath = getPageFilePath(url);
  return existsSync(filePath) ? statSync(filePath).mtime : new Date("2026-04-03T00:00:00.000Z");
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: getLastModified(url),
    changeFrequency,
    priority,
  }));
}
