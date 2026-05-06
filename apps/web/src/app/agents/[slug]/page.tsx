import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { FeedbackForm } from "@/components/FeedbackForm";
import { allAgents, getAgent, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allAgents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  return agent
    ? { title: agent.name, description: agent.businessMission }
    : {};
}

export default async function AgentPage({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...agent.requiredSkills,
    ...agent.relatedWorkflows,
    ...agent.relatedStacks
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Agent role</div>
        <h1>{agent.name}</h1>
        <p className="lede">{agent.description}</p>
        <div className="meta-row">
          <span className="pill score">OPC {agent.opcFitScore}</span>
          <span className="pill">{agent.riskLevel} risk</span>
          <span className="pill">{agent.targetKeyword}</span>
        </div>
      </section>
      <section className="section grid">
        <div className="card">
          <h2>Mission</h2>
          <p>{agent.businessMission}</p>
        </div>
        <div className="card">
          <h2>Operating Style</h2>
          <p>{agent.operatingStyle}</p>
        </div>
        <div className="card">
          <h2>Human Approval</h2>
          {agent.humanApprovalBoundaries.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Deliverables</h2>
        <div className="grid">
          {agent.deliverables.map((item) => (
            <div className="card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />

      <FeedbackForm pagePath={`/agents/${agent.slug}`} />
    </main>
  );
}
