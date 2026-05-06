import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { FeedbackForm } from "@/components/FeedbackForm";
import { allWorkflows, getWorkflow, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allWorkflows.map((workflow) => ({ slug: workflow.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workflow = getWorkflow(slug);
  return workflow
    ? { title: workflow.name, description: workflow.businessOutcome }
    : {};
}

export default async function WorkflowPage({ params }: PageProps) {
  const { slug } = await params;
  const workflow = getWorkflow(slug);
  if (!workflow) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...workflow.requiredAgents,
    ...workflow.requiredSkills,
    ...workflow.relatedTemplates,
    ...workflow.relatedComparisons
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Workflow</div>
        <h1>{workflow.name}</h1>
        <p className="lede">{workflow.description}</p>
        <div className="meta-row">
          <span className="pill score">{workflow.automationCoverage}% automation</span>
          <span className="pill">{workflow.setupTimeEstimate}</span>
          <span className="pill">{workflow.targetKeyword}</span>
        </div>
      </section>
      <section className="section grid">
        <div className="card">
          <h2>Business Outcome</h2>
          <p>{workflow.businessOutcome}</p>
        </div>
        <div className="card">
          <h2>Human Checkpoints</h2>
          {workflow.humanCheckpoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="card">
          <h2>Maintenance</h2>
          <p>{workflow.maintenanceCadence}</p>
        </div>
      </section>
      <section className="section">
        <h2>Workflow Steps</h2>
        <div className="grid">
          {workflow.steps.map((step, index) => (
            <div className="card" key={step}>
              <h3>{index + 1}. {step}</h3>
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />

      <FeedbackForm pagePath={`/workflows/${workflow.slug}`} />
    </main>
  );
}
