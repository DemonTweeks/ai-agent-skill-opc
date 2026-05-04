import type { Metadata } from "next";
import Link from "next/link";
import { allSkills } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Skills",
  description:
    "AI agent skills for one-person companies, with OPC fit scores and safety boundaries."
};

export default function SkillsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Skill directory</div>
        <h1>Find the AI skill that matches the business task.</h1>
        <p className="lede">
          Every skill includes decision guidance, safety notes, human approval
          boundaries, and a transparent OPC Fit Score.
        </p>
      </section>
      <div className="grid">
        {allSkills.map((skill) => (
          <Link className="card" href={`/skills/${skill.slug}`} key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.shortDescription}</p>
            <div className="meta-row">
              <span className="pill score">OPC {skill.opcFitScore}</span>
              <span className="pill">{skill.securityRisk} security risk</span>
              <span className="pill">{skill.searchIntent}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

