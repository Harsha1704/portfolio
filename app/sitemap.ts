import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

// Genuine content update dates reflecting verified codebase release milestones
const CORE_PAGES_LASTMOD = new Date("2026-11-24T00:00:00.000Z");
const CASE_STUDIES_LASTMOD = new Date("2026-11-23T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Core Top-Level Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: CORE_PAGES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic Case Study Routes with actual audit milestone timestamps
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: CASE_STUDIES_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes];
}
