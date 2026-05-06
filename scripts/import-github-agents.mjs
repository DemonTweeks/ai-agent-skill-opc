#!/usr/bin/env node
/**
 * Import agent data from GitHub repos:
 * 1. mergisi/awesome-openclaw-agents (agents.json + SOUL.md files)
 * 2. msitarzewski/agency-agents (category MD files)
 *
 * Outputs: updated data/agents.json with merged real agent data
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const GITHUB_API = "https://api.github.com";
const GITHUB_RAW = "https://raw.githubusercontent.com";

// Helper: fetch JSON from GitHub API
async function fetchAPI(path) {
  const res = await fetch(`${GITHUB_API}${path}`, {
    headers: { "User-Agent": "agent-import-script" }
  });
  if (!res.ok) throw new Error(`API error ${res.status} for ${path}`);
  return res.json();
}

// Helper: fetch raw file content
async function fetchRaw(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "agent-import-script" }
  });
  if (!res.ok) throw new Error(`Raw fetch error ${res.status} for ${url}`);
  return res.text();
}

// Fetch agents.json from mergisi/awesome-openclaw-agents
async function fetchOpenClawAgents() {
  console.log("Fetching agents.json from mergisi/awesome-openclaw-agents...");
  const data = await fetchAPI("/repos/mergisi/awesome-openclaw-agents/contents/agents.json");
  const rawUrl = data.download_url;
  const res = await fetch(rawUrl);
  const json = await res.json();
  return json.agents || [];
}

// Fetch SOUL.md content for an agent
async function fetchSoulMd(path) {
  const url = `${GITHUB_RAW}/mergisi/awesome-openclaw-agents/main/${path}`;
  try {
    return await fetchRaw(url);
  } catch {
    return null;
  }
}

// Parse SOUL.md content into structured data
function parseSoulMd(content) {
  const result = {};
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Look for key: value patterns
    const match = line.match(/^(\w[\w\s]+):\s*(.+)$/);
    if (match) {
      const key = match[1].trim().toLowerCase().replace(/\s+/g, "");
      const value = match[2].trim();
      result[key] = value;
    }
  }

  return result;
}

// Transform OpenClaw agent to our AgentRole schema
function transformOpenClawAgent(agent, soulContent) {
  const soulData = soulContent ? parseSoulMd(soulContent) : {};

  const slug = `openclaw-${agent.id}`;

  return {
    id: `agent-openclaw-${agent.id}`,
    name: `OpenClaw ${agent.name}`,
    slug: slug,
    businessMission: soulData.mission || `AI agent for ${agent.category}: ${agent.name}`,
    description: soulData.description || `${agent.role || agent.name} - automated by OpenClaw`,
    responsibilities: soulData.responsibilities ? soulData.responsibilities.split(",").map(s => s.trim()) : [`Handle ${agent.category} tasks`],
    mustNotDo: ["Edit command-center files", "Commit or deploy", "Talk to users directly"],
    requiredSkills: [`${agent.category} automation skill`],
    requiredTools: ["OpenClaw", "ClawHub"],
    operatingStyle: soulData.style || "Task-focused, automated, category-specific",
    decisionAuthority: soulData.decisions ? soulData.decisions.split(",").map(s => s.trim()) : ["Execute assigned tasks within scope"],
    humanApprovalBoundaries: ["Chat Agent reviews output", "User approves major decisions"],
    deliverables: soulData.deliverables ? soulData.deliverables.split(",").map(s => s.trim()) : ["Task results", "Status report"],
    successMetrics: ["Tasks completed", "No scope violations", "Output quality"],
    exampleTasks: [`Run ${agent.name} tasks`, `Automate ${agent.category} workflow`],
    soulTemplate: soulContent ? soulContent.substring(0, 500) : `You are ${agent.name}. Execute tasks within your assigned scope.`,
    relatedWorkflows: [],
    relatedStacks: [],
    riskLevel: "low",
    opcFitScore: 8.0,
    targetKeyword: `${agent.name.toLowerCase()} AI agent`,
    searchIntent: "implementation",
    status: "ready",
    lastReviewedAt: new Date().toISOString().split("T")[0],
    // Track origin
    _source: "mergisi/awesome-openclaw-agents",
    _sourceUrl: `https://github.com/mergisi/awesome-openclaw-agents/blob/main/${agent.path}`
  };
}

// Fetch category MD files from msitarzewski/agency-agents
async function fetchAgencyAgents() {
  console.log("Fetching agent files from msitarzewski/agency-agents...");
  const categories = ["engineering", "design", "academic", "finance", "marketing", "sales", "support"];
  const agents = [];

  for (const cat of categories) {
    try {
      const items = await fetchAPI(`/repos/msitarzewski/agency-agents/contents/${cat}?ref=main`);
      for (const item of items) {
        if (item.type === "file" && item.name.endsWith(".md")) {
          const content = await fetchRaw(item.download_url);
          agents.push({ category: cat, file: item.name, content });
        }
      }
    } catch (e) {
      console.log(`  Skipping category ${cat}: ${e.message}`);
    }
  }

  return agents;
}

// Transform agency-agents MD to our AgentRole schema
function transformAgencyAgent(agent) {
  const name = agent.file.replace(".md", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const slug = `agency-${agent.file.replace(".md", "").toLowerCase()}`;

  // Extract content snippets
  const lines = agent.content.split("\n");
  const description = lines.find(l => l.trim() && !l.startsWith("#") && !l.startsWith("---")) || "AI agent role";

  return {
    id: `agent-agency-${agent.file.replace(".md", "").toLowerCase()}`,
    name: name,
    slug: slug,
    businessMission: `AI agent for ${agent.category}: ${name}`,
    description: description.substring(0, 200),
    responsibilities: ["Execute assigned tasks", "Report results"],
    mustNotDo: ["Edit command-center files", "Commit or deploy"],
    requiredSkills: [`${agent.category} skill`],
    requiredTools: ["Codex", "OpenClaw"],
    operatingStyle: "Structured, category-focused",
    decisionAuthority: ["Execute within scope"],
    humanApprovalBoundaries: ["Chat Agent reviews output"],
    deliverables: ["Task results"],
    successMetrics: ["Tasks completed successfully"],
    exampleTasks: [`Run ${name} tasks`],
    soulTemplate: agent.content.substring(0, 500),
    relatedWorkflows: [],
    relatedStacks: [],
    riskLevel: "low",
    opcFitScore: 7.5,
    targetKeyword: `${name.toLowerCase()} AI agent`,
    searchIntent: "implementation",
    status: "ready",
    lastReviewedAt: new Date().toISOString().split("T")[0],
    _source: "msitarzewski/agency-agents",
    _sourceUrl: `https://github.com/msitarzewski/agency-agents/blob/main/${agent.category}/${agent.file}`
  };
}

async function main() {
  try {
    // Load existing agents
    const existingAgents = JSON.parse(
      readFileSync(resolve("data/agents.json"), "utf-8")
    );
    console.log(`Loaded ${existingAgents.length} existing agents`);

    const newAgents = [];

    // Fetch from mergisi/awesome-openclaw-agents
    try {
      const openclawAgents = await fetchOpenClawAgents();
      console.log(`Found ${openclawAgents.length} OpenClaw agents`);

      // Fetch SOUL.md for first 10 agents (to avoid rate limits)
      const batchSize = 10;
      for (let i = 0; i < Math.min(openclawAgents.length, batchSize); i++) {
        const agent = openclawAgents[i];
        console.log(`  Fetching SOUL.md for ${agent.id}...`);
        const soulContent = await fetchSoulMd(agent.path);
        newAgents.push(transformOpenClawAgent(agent, soulContent));
      }
      console.log(`Transformed ${newAgents.length} OpenClaw agents`);
    } catch (e) {
      console.error(`Error fetching OpenClaw agents: ${e.message}`);
    }

    // Fetch from msitarzewski/agency-agents
    try {
      const agencyAgents = await fetchAgencyAgents();
      console.log(`Found ${agencyAgents.length} agency agent files`);

      const transformed = agencyAgents.map(a => transformAgencyAgent(a));
      newAgents.push(...transformed);
      console.log(`Transformed ${transformed.length} agency agents`);
    } catch (e) {
      console.error(`Error fetching agency agents: ${e.message}`);
    }

    // Merge: keep existing, add new ones that don't exist
    const existingSlugs = new Set(existingAgents.map(a => a.slug));
    const toAdd = newAgents.filter(a => !existingSlugs.has(a.slug));

    const merged = [...existingAgents, ...toAdd];
    console.log(`Total agents: ${merged.length} (${toAdd.length} new)`);

    // Write updated agents.json
    writeFileSync(
      resolve("data/agents.json"),
      JSON.stringify(merged, null, 2)
    );
    console.log("Wrote data/agents.json");

  } catch (e) {
    console.error(`Fatal error: ${e.message}`);
    process.exit(1);
  }
}

main();
