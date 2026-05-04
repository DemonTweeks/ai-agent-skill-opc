import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { allTools, getTool, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  return tool ? { title: tool.name, description: tool.description } : {};
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...tool.relatedSkills,
    ...tool.relatedWorkflows,
    ...tool.relatedTemplates
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">{tool.category}</div>
        <h1>{tool.name}</h1>
        <p className="lede">{tool.description}</p>
      </section>
      <section className="section grid">
        <div className="card">
          <h2>Best For</h2>
          {tool.bestFor.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="card">
          <h2>Not For</h2>
          {tool.notFor.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="card">
          <h2>Safety Notes</h2>
          {tool.safetyNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Setup Notes</h2>
        <div className="grid">
          {tool.setupNotes.map((note) => (
            <div className="card" key={note}>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
