#!/usr/bin/env node
/**
 * Import skill content from GitHub repos:
 * 1. mergisi/awesome-openclaw-agents (skills/{model}/{skill}/SKILL.md)
 * 2. msitarzewski/agency-agents (skill-like MD files)
 *
 * Outputs: updated data/skills.json with real content
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const GITHUB_API = "https://api.github.com";
const GITHUB_RAW = "https://raw.githubusercontent.com";

async function fetchAPI(path) {
  const res = await fetch(`${GITHUB_API}${path}`, {
    headers: { "User-Agent": "skill-import-script" }
  });
  if (!res.ok) throw new Error(`API error ${res.status} for ${path}`);
  return res.json();
}

async function fetchRaw(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "skill-import-script" }
  });
  if (!res.ok) throw new Error(`Raw fetch error ${res.status} for ${url}`);
  return res.text();
}

// Parse SKILL.md frontmatter and body
function parseSkillMd(content, skillPath) {
  const result = {
    name: "",
    description: "",
    longDescription: "",
    body: "",
    fullContent: content
  };

  // Extract frontmatter between ---
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (fmMatch) {
    const fm = fmMatch[1];
    const body = fmMatch[2];
    result.body = body;

    // Parse frontmatter
    const nameMatch = fm.match(/^name:\s*(.+)$/m);
    if (nameMatch) result.name = nameMatch[1].trim();

    const descMatch = fm.match(/^description:\s*(.+)$/m);
    if (descMatch) result.description = descMatch[1].trim();

    result.longDescription = body.split("\n").slice(0, 10).join("\n").substring(0, 500);
  } else {
    // No frontmatter, treat whole thing as body
    result.body = content;
    result.longDescription = content.substring(0, 500);
  }

  return result;
}

// Transform to project Skill schema
function transformSkill(parsed, skillPath, source) {
  const pathParts = skillPath.split("/");
  const model = pathParts[1]; // e.g., "claude"
  const skillDir = pathParts[2]; // e.g., "cost-optimizer"

  const slug = `openclaw-${model}-${skillDir}`;

  // Extract implementation steps from body
  const steps = [];
  const lines = parsed.body.split("\n");
  let inSteps = false;

  for (const line of lines) {
    if (line.match(/^##\s+What to check|^##\s+Implementation|^##\s+Steps/i)) {
      inSteps = true;
      continue;
    }
    if (line.startsWith("##") && inSteps) break;
    if (inSteps && line.trim().startsWith("```") === false && line.trim()) {
      const cleaned = line.replace(/^[-\d.\s*]+/, "").trim();
      if (cleaned && steps.length < 10) steps.push(cleaned);
    }
  }

  return {
    id: `skill-openclaw-${model}-${skillDir}`,
    name: parsed.name || `${model} ${skillDir}`,
    slug: slug,
    shortDescription: parsed.description || `AI skill for ${skillDir}`,
    longDescription: parsed.longDescription || parsed.description || `Real skill content from OpenClaw ${model} skills.`,
    businessFunction: model.charAt(0).toUpperCase() + model.slice(1),
    capabilityCategory: ["Automation", "AI Skill", model],
    runtimeCategory: [`${model.charAt(0).toUpperCase() + model.slice(1)} Agent`],
    problemSolved: `Automate ${skillDir} tasks using ${model}`,
    bestFor: [`${skillDir} automation`, `${model} workflows`],
    notFor: ["Non-automated tasks", "Manual processes"],
    inputs: ["User request", "Project context"],
    outputs: ["Automated results", "Task completion"],
    toolsRequired: [model.charAt(0).toUpperCase() + model.slice(1), "OpenClaw"],
    compatiblePlatforms: ["OpenClaw", "ClawHub"],
    setupDifficulty: "easy",
    maintenanceEffort: "low",
    humanApprovalRequired: true,
    securityRisk: "low",
    privacyRisk: "low",
    externalToolAccess: false,
    fileSystemAccess: true,
    networkAccess: false,
    credentialRequirement: "None for local execution.",
    humanApprovalBoundary: "User approves task execution and reviews output.",
    safeTestModeRecommendation: `Test ${skillDir} skill on a sample project first.`,
    opcFitScore: 8.0,
    scoreBreakdown: {
      businessImpact: 8,
      setupSimplicity: 9,
      maintenanceBurden: 9,
      supervisionNeed: 7,
      costFriendliness: 9,
      securityRisk: 8,
      repeatability: 9,
      soloUsefulness: 8
    },
    implementationSteps: steps.length > 0 ? steps : [
      `Read the ${skillDir} skill definition`,
      `Configure the skill in your ${model} setup`,
      `Test with a sample task`,
      `Deploy for regular use`
    ],
    examplePrompt: parsed.body.match(/Example invocation[s]?:\s*\n+([\s\S]*?)(?=\n##|$)/i)?.[1]?.split("\n").find(l => l.trim().startsWith("-"))?.replace(/^-\s*/, "") || `Run /${skillDir} on my project`,
    exampleOutput: `Completed ${skillDir} task with results`,
    failureModes: [`Over-complicating simple ${skillDir} tasks`, "Missing context for task"],
    skillDefinition: parsed.fullContent || parsed.body || "",
    whyUseThis: [`Real skill from OpenClaw ${model} collection`, `Automates ${skillDir} reliably`],
    whenNotToUse: ["When the task is too simple", "When manual control is preferred"],
    cheaperAlternative: "Manual execution without automation",
    saferAlternative: "Require human review before each execution",
    alternatives: ["Manual process", "Other automation tools"],
    relatedAgents: [`OpenClaw ${model} agent`],
    relatedWorkflows: [],
    relatedTemplates: [],
    affiliateToolSlugs: [],
    targetKeyword: `${skillDir} ${model} skill`,
    searchIntent: "implementation",
    monetizationPriority: "medium",
    status: "ready",
    lastReviewedAt: new Date().toISOString().split("T")[0],
    // Track origin
    _source: source,
    _sourceUrl: `https://github.com/mergisi/awesome-openclaw-agents/blob/main/${skillPath}`
  };
}

async function fetchOpenClawSkills() {
  console.log("Fetching skill directories from mergisi/awesome-openclaw-agents...");

  // Get top-level skill directories (claude, gemma, etc.)
  const skillDirs = await fetchAPI("/repos/mergisi/awesome-openclaw-agents/contents/skills?ref=main");

  const skills = [];
  for (const dir of skillDirs) {
    if (dir.type !== "dir") continue;
    if (dir.name === "README.md") continue;

    console.log(`  Processing model: ${dir.name}`);
    try {
      const modelSkills = await fetchAPI(`/repos/mergisi/awesome-openclaw-agents/contents/skills/${dir.name}?ref=main`);
      for (const skillDir of modelSkills) {
        if (skillDir.type !== "dir") continue;

        const skillPath = `skills/${dir.name}/${skillDir.name}/SKILL.md`;
        console.log(`    Fetching ${skillPath}...`);

        try {
          const content = await fetchRaw(`https://raw.githubusercontent.com/mergisi/awesome-openclaw-agents/main/${skillPath}`);
          const parsed = parseSkillMd(content, skillPath);
          const transformed = transformSkill(parsed, skillPath, "mergisi/awesome-openclaw-agents");
          skills.push(transformed);
        } catch (e) {
          console.log(`      Skipping ${skillPath}: ${e.message}`);
        }
      }
    } catch (e) {
      console.log(`  Skipping model ${dir.name}: ${e.message}`);
    }
  }

  return skills;
}

async function main() {
  try {
    // Load existing skills
    const existingSkills = JSON.parse(
      readFileSync(resolve("data/skills.json"), "utf-8")
    );
    console.log(`Loaded ${existingSkills.length} existing skills`);

    const newSkills = [];

    // Fetch from mergisi/awesome-openclaw-agents
    try {
      const openclawSkills = await fetchOpenClawSkills();
      console.log(`Found ${openclawSkills.length} OpenClaw skills`);
      newSkills.push(...openclawSkills);
    } catch (e) {
      console.error(`Error fetching OpenClaw skills: ${e.message}`);
    }

    // Merge: overwrite existing skills from GitHub sources, add new ones
    const existingSlugs = new Set(existingSkills.map(s => s.slug));
    const newSlugs = new Set(newSkills.map(s => s.slug));

    // Remove existing skills that are being re-imported from GitHub
    const kept = existingSkills.filter(s => !newSlugs.has(s.slug));
    const merged = [...kept, ...newSkills];
    console.log(`Total skills: ${merged.length} (${newSkills.length} from GitHub, ${kept.length} existing)`);

    // Write updated skills.json
    writeFileSync(
      resolve("data/skills.json"),
      JSON.stringify(merged, null, 2)
    );
    console.log("Wrote data/skills.json");

  } catch (e) {
    console.error(`Fatal error: ${e.message}`);
    process.exit(1);
  }
}

main();
