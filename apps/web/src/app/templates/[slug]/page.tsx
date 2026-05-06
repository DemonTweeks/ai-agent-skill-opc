import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { FeedbackForm } from "@/components/FeedbackForm";
import { allTemplates, getTemplate, resolveRelatedLinks } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allTemplates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);
  return template ? { title: template.name, description: template.useCase } : {};
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();

  const relatedLinks = resolveRelatedLinks([
    template.relatedSkill,
    template.relatedAgent,
    template.relatedWorkflow
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">{template.templateType} template</div>
        <h1>{template.name}</h1>
        <p className="lede">{template.useCase}</p>
      </section>
      <section className="section grid">
        <div className="card">
          <h2>Template</h2>
          <p>{template.templateContent}</p>
        </div>
        <div className="card">
          <h2>Safety Notes</h2>
          {template.safetyNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
        <div className="card">
          <h2>Example Usage</h2>
          <p>{template.exampleUsage}</p>
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />

      <FeedbackForm pagePath={`/templates/${template.slug}`} />
    </main>
  );
}
