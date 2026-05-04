import comparisons from "@data/comparisons.json";
import affiliateTargets from "@data/affiliate-targets.json";
import agents from "@data/agents.json";
import categories from "@data/categories.json";
import playbooks from "@data/playbooks.json";
import skills from "@data/skills.json";
import sponsoredPlacements from "@data/sponsored-placements.json";
import stacks from "@data/stacks.json";
import templates from "@data/templates.json";
import tools from "@data/tools.json";
import workflows from "@data/workflows.json";
import type {
  AffiliateTarget,
  AgentRole,
  AgentStack,
  AgentTemplate,
  Category,
  Comparison,
  Playbook,
  Skill,
  SponsoredPlacement,
  ToolProfile,
  Workflow
} from "@/types/content";

export const allSkills = skills as Skill[];
export const allComparisons = comparisons as Comparison[];
export const allAgents = agents as AgentRole[];
export const allWorkflows = workflows as Workflow[];
export const allTemplates = templates as AgentTemplate[];
export const allTools = tools as ToolProfile[];
export const allStacks = stacks as AgentStack[];
export const allPlaybooks = playbooks as Playbook[];
export const allAffiliateTargets = affiliateTargets as AffiliateTarget[];
export const allSponsoredPlacements =
  sponsoredPlacements as SponsoredPlacement[];
export const allCategories = categories as Category[];

export function getSkill(slug: string) {
  return allSkills.find((skill) => skill.slug === slug);
}

export function getComparison(slug: string) {
  return allComparisons.find((comparison) => comparison.slug === slug);
}

export function getAgent(slug: string) {
  return allAgents.find((agent) => agent.slug === slug);
}

export function getWorkflow(slug: string) {
  return allWorkflows.find((workflow) => workflow.slug === slug);
}

export function getTemplate(slug: string) {
  return allTemplates.find((template) => template.slug === slug);
}

export function getTool(slug: string) {
  return allTools.find((tool) => tool.slug === slug);
}

export function getStack(slug: string) {
  return allStacks.find((stack) => stack.slug === slug);
}

export function getPlaybook(slug: string) {
  return allPlaybooks.find((playbook) => playbook.slug === slug);
}

export function getAffiliateTarget(slug: string) {
  return allAffiliateTargets.find((target) => target.slug === slug);
}

export function getCategory(slug: string) {
  return allCategories.find((category) => category.slug === slug);
}

export function getFeaturedSkills(limit = 6) {
  return allSkills
    .filter((skill) => skill.status !== "needs_review")
    .sort((a, b) => b.opcFitScore - a.opcFitScore)
    .slice(0, limit);
}

export function getCommercialComparisons(limit = 5) {
  return allComparisons
    .filter((comparison) => comparison.status !== "needs_review")
    .slice(0, limit);
}

export function getFeaturedWorkflows(limit = 5) {
  return allWorkflows
    .filter((workflow) => workflow.status !== "needs_review")
    .slice(0, limit);
}

export type RelatedLink = {
  label: string;
  href: string;
  kind: string;
};

const collections: Array<{
  kind: string;
  basePath: string;
  items: Array<{
    name?: string;
    title?: string;
    toolName?: string;
    slug: string;
  }>;
}> = [
  { kind: "Skill", basePath: "/skills", items: allSkills },
  { kind: "Agent", basePath: "/agents", items: allAgents },
  { kind: "Workflow", basePath: "/workflows", items: allWorkflows },
  { kind: "Template", basePath: "/templates", items: allTemplates },
  { kind: "Tool", basePath: "/tools", items: allTools },
  { kind: "Stack", basePath: "/stacks", items: allStacks },
  { kind: "Playbook", basePath: "/playbooks", items: allPlaybooks },
  { kind: "Comparison", basePath: "/comparisons", items: allComparisons },
  { kind: "Category", basePath: "/categories", items: allCategories },
  { kind: "Affiliate target", basePath: "/affiliate-programs", items: allAffiliateTargets }
];

export function resolveRelatedLinks(names: string[]): RelatedLink[] {
  return names.flatMap((name) => {
    for (const collection of collections) {
      const item = collection.items.find(
        (entry) =>
          entry.name === name || entry.title === name || entry.toolName === name
      );

      if (item) {
        const href =
          collection.basePath === "/affiliate-programs"
            ? `${collection.basePath}#${item.slug}`
            : `${collection.basePath}/${item.slug}`;

        return [
          {
            label: name,
            href,
            kind: collection.kind
          }
        ];
      }
    }

    return [];
  });
}
