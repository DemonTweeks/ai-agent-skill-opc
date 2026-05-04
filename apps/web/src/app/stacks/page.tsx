import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allStacks } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Stacks",
  description: "Bundled AI agent stacks for one-person company workflows."
};

export default function StacksPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Agent stack library</div>
        <h1>Bundled systems for business functions.</h1>
        <p className="lede">
          Stacks combine agents, skills, tools, runtime recommendations, costs,
          risks, and upgrade paths.
        </p>
      </section>
      <div className="grid">
        {allStacks.map((stack) => (
          <ContentCard
            description={stack.runtimeRecommendation}
            href={`/stacks/${stack.slug}`}
            key={stack.id}
            tags={[stack.businessFunction, stack.monetizationPriority]}
            title={stack.name}
          />
        ))}
      </div>
    </main>
  );
}
