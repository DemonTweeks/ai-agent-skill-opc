import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allWorkflows } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Workflows",
  description:
    "Workflow library for one-person companies using AI agents and automation."
};

export default function WorkflowsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Workflow library</div>
        <h1>Workflow pages are next in the build sequence.</h1>
        <p className="lede">
          The first workflow cluster will cover multi-agent command centers,
          content production, customer support, affiliate operations, and
          website health monitoring.
        </p>
      </section>
      <div className="grid">
        {allWorkflows.map((workflow) => (
          <ContentCard
            description={workflow.businessOutcome}
            href={`/workflows/${workflow.slug}`}
            key={workflow.id}
            tags={[`${workflow.automationCoverage}% automation`, workflow.searchIntent]}
            title={workflow.name}
          />
        ))}
      </div>
    </main>
  );
}
