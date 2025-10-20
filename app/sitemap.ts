// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitebsonsinc.vercel.app"; // change later to your custom domain

  const routes = [
    "",
    "/about",
    "/careers",
    "/programs/autos",
    "/programs/investment",
    "/programs/community-support",
    "/donation",
    "/resources",
    "/contact",
    "/privacy",
  ];

  const now = new Date().toISOString();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
