import type { MetadataRoute } from "next";
import {
  allAgents,
  allCategories,
  allComparisons,
  allPlaybooks,
  allSkills,
  allStacks,
  allTemplates,
  allTools,
  allWorkflows
} from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const staticRoutes = [
    "",
    "/skills",
    "/comparisons",
    "/workflows",
    "/agents",
    "/stacks",
    "/playbooks",
    "/templates",
    "/tools",
    "/categories",
    "/affiliate-programs",
    "/how-we-review",
    "/affiliate-disclosure",
    "/privacy",
    "/about"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-05-02")
    })),
    ...allSkills.map((skill) => ({
      url: `${baseUrl}/skills/${skill.slug}`,
      lastModified: new Date(skill.lastReviewedAt)
    })),
    ...allComparisons.map((comparison) => ({
      url: `${baseUrl}/comparisons/${comparison.slug}`,
      lastModified: new Date(comparison.lastReviewedAt)
    })),
    ...allAgents.map((agent) => ({
      url: `${baseUrl}/agents/${agent.slug}`,
      lastModified: new Date(agent.lastReviewedAt)
    })),
    ...allWorkflows.map((workflow) => ({
      url: `${baseUrl}/workflows/${workflow.slug}`,
      lastModified: new Date(workflow.lastReviewedAt)
    })),
    ...allTemplates.map((template) => ({
      url: `${baseUrl}/templates/${template.slug}`,
      lastModified: new Date(template.lastReviewedAt)
    })),
    ...allTools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(tool.lastReviewedAt)
    })),
    ...allStacks.map((stack) => ({
      url: `${baseUrl}/stacks/${stack.slug}`,
      lastModified: new Date(stack.lastReviewedAt)
    })),
    ...allPlaybooks.map((playbook) => ({
      url: `${baseUrl}/playbooks/${playbook.slug}`,
      lastModified: new Date(playbook.lastReviewedAt)
    })),
    ...allCategories.map((category) => ({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(category.lastReviewedAt)
    }))
  ];
}
