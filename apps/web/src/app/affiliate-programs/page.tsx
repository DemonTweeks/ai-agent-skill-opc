import type { Metadata } from "next";
import { allAffiliateTargets } from "@/lib/data";

export const metadata: Metadata = {
  title: "Affiliate Program Targets",
  description:
    "Planned affiliate targets and monetization status for AI Agent Skill for One Person Company."
};

export default function AffiliateProgramsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Affiliate-first monetization</div>
        <h1>Affiliate targets are tracked before links go live.</h1>
        <p className="lede">
          This page is a public-safe status view. Planned targets are not active
          affiliate links until approval and official URLs exist.
        </p>
      </section>
      <div className="grid">
        {allAffiliateTargets.map((target) => (
          <div className="card" id={target.slug} key={target.id}>
            <h3>{target.toolName}</h3>
            <p>{target.nextAction}</p>
            <div className="meta-row">
              <span className="pill">{target.category}</span>
              <span className="pill">{target.status}</span>
              <span className="pill">
                {target.disclosureRequired ? "disclosure required" : "standard link"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
