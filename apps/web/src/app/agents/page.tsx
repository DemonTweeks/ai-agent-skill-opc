import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allAgents } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Roles",
  description:
    "Agent role library for solo operators building AI-powered business functions."
};

export default function AgentsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Agent role library</div>
        <h1>Agent role records are queued after the first commercial pages.</h1>
        <p className="lede">
          The initial role cluster will include Task Planning, Programming,
          Testing, QA, Research, and Writer agents.
        </p>
      </section>
      <div className="grid">
        {allAgents.map((agent) => (
          <ContentCard
            description={agent.businessMission}
            href={`/agents/${agent.slug}`}
            key={agent.id}
            tags={[agent.riskLevel, `OPC ${agent.opcFitScore}`]}
            title={agent.name}
          />
        ))}
      </div>
    </main>
  );
}
