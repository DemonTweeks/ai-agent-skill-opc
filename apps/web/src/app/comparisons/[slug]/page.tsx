import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { FeedbackForm } from "@/components/FeedbackForm";
import {
  allComparisons,
  getComparison,
  resolveRelatedLinks
} from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allComparisons.map((comparison) => ({
    slug: comparison.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    return {};
  }

  return {
    title: comparison.title,
    description: comparison.finalVerdict
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const relatedLinks = resolveRelatedLinks([
    ...comparison.relatedSkills,
    ...comparison.relatedWorkflows
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Commercial comparison</div>
        <h1>{comparison.title}</h1>
        <p className="lede">{comparison.finalVerdict}</p>
        <div className="meta-row">
          <span className="pill">{comparison.targetKeyword}</span>
          <span className="pill">Winner: {comparison.winner}</span>
        </div>
      </section>

      <section className="section grid">
        <div className="card">
          <h2>Best For Beginners</h2>
          <p>{comparison.bestForBeginners}</p>
        </div>
        <div className="card">
          <h2>Best For Developers</h2>
          <p>{comparison.bestForDevelopers}</p>
        </div>
        <div className="card">
          <h2>Cheapest Option</h2>
          <p>{comparison.cheapestOption}</p>
        </div>
        <div className="card">
          <h2>Safest Option</h2>
          <p>{comparison.safestOption}</p>
        </div>
      </section>

      <section className="section">
        <h2>When To Choose Each</h2>
        <div className="grid">
          {comparison.whenToChooseEach.map((item) => (
            <div className="card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>FAQ</h2>
        <div className="grid">
          {comparison.faq.map((item) => (
            <div className="card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Source-Backed Notes</h2>
        <div className="grid">
          {comparison.researchNotes.map((note) => (
            <div className="card" key={note}>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Sources</h2>
        <div className="grid">
          {comparison.sources.map((source) => (
            <a
              className="card"
              href={source.url}
              key={source.url}
              rel="noreferrer"
              target="_blank"
            >
              <h3>{source.title}</h3>
              <p>{source.url}</p>
            </a>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />

      <FeedbackForm pagePath={`/comparisons/${comparison.slug}`} />
    </main>
  );
}
