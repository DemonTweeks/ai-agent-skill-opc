import Link from "next/link";
import {
  allAgents,
  allPlaybooks,
  allStacks,
  allTemplates,
  getCommercialComparisons,
  getFeaturedSkills,
  getFeaturedWorkflows
} from "@/lib/data";

export default function HomePage() {
  const skills = getFeaturedSkills(6);
  const comparisons = getCommercialComparisons(5);
  const workflows = getFeaturedWorkflows(3);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">AI agent operating manual for solo companies</div>
        <h1>AI skills and workflows for one-person companies.</h1>
        <p className="lede">
          AI Agent Skill for One Person Company helps solo operators compare AI
          agent tools, choose the right skills, and implement workflows with
          safety boundaries before automation gets risky.
        </p>
        <div className="actions">
          <Link className="button" href="/comparisons">
            Compare tools
          </Link>
          <Link className="button secondary" href="/skills">
            Browse skills
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Commercial comparison starting points</h2>
        <div className="grid">
          {comparisons.map((comparison) => (
            <Link
              className="card"
              href={`/comparisons/${comparison.slug}`}
              key={comparison.id}
            >
              <h3>{comparison.title}</h3>
              <p>{comparison.finalVerdict}</p>
              <div className="meta-row">
                <span className="pill">{comparison.targetKeyword}</span>
                <span className="pill">{comparison.searchIntent}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>High-fit AI agent skills</h2>
        <div className="grid">
          {skills.map((skill) => (
            <Link className="card" href={`/skills/${skill.slug}`} key={skill.id}>
              <h3>{skill.name}</h3>
              <p>{skill.shortDescription}</p>
              <div className="meta-row">
                <span className="pill">OPC fit {skill.opcFitScore}</span>
                <span className="pill">{skill.businessFunction}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Workflow and operating-system modules</h2>
        <div className="grid">
          {[
            {
              title: "Workflows",
              href: "/workflows",
              value: `${workflows.length} ready workflows`
            },
            {
              title: "Agents",
              href: "/agents",
              value: `${allAgents.length} agent roles`
            },
            {
              title: "Stacks",
              href: "/stacks",
              value: `${allStacks.length} stacks`
            },
            {
              title: "Playbooks",
              href: "/playbooks",
              value: `${allPlaybooks.length} playbooks`
            },
            {
              title: "Templates",
              href: "/templates",
              value: `${allTemplates.length} templates`
            },
            {
              title: "Affiliate Targets",
              href: "/affiliate-programs",
              value: "planned, not claimed active"
            }
          ].map((item) => (
            <Link className="card" href={item.href} key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
