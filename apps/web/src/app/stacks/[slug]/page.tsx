import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { allStacks, getStack, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allStacks.map((stack) => ({ slug: stack.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const stack = getStack(slug);
  return stack
    ? { title: stack.name, description: stack.runtimeRecommendation }
    : {};
}

export default async function StackPage({ params }: PageProps) {
  const { slug } = await params;
  const stack = getStack(slug);
  if (!stack) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...stack.includedAgents,
    ...stack.includedSkills,
    ...stack.alternatives
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">{stack.businessFunction} stack</div>
        <h1>{stack.name}</h1>
        <p className="lede">{stack.runtimeRecommendation}</p>
        <div className="meta-row">
          <span className="pill">{stack.costEstimate}</span>
          <span className="pill">{stack.setupDifficulty}</span>
          <span className="pill">{stack.automationLevel}</span>
        </div>
      </section>
      <section className="section">
        <h2>Implementation Sequence</h2>
        <div className="grid">
          {stack.implementationSequence.map((step) => (
            <div className="card" key={step}>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
