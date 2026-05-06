import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { FeedbackForm } from "@/components/FeedbackForm";
import { allPlaybooks, getPlaybook, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPlaybooks.map((playbook) => ({ slug: playbook.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  return playbook ? { title: playbook.title, description: playbook.verdict } : {};
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...playbook.relatedTools,
    ...playbook.relatedComparisons
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Playbook</div>
        <h1>{playbook.title}</h1>
        <p className="lede">{playbook.verdict}</p>
      </section>
      <section className="section grid">
        <div className="card">
          <h2>Problem</h2>
          <p>{playbook.problem}</p>
        </div>
        <div className="card">
          <h2>Review Cadence</h2>
          <p>{playbook.reviewCadence}</p>
        </div>
        <div className="card">
          <h2>Template</h2>
          <p>{playbook.template}</p>
        </div>
      </section>
      <section className="section">
        <h2>Steps</h2>
        <div className="grid">
          {playbook.steps.map((step) => (
            <div className="card" key={step}>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />

      <FeedbackForm pagePath={`/playbooks/${playbook.slug}`} />
    </main>
  );
}
