import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allTemplates } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Templates",
  description:
    "SOUL.md templates, prompts, checklists, and workflow assets for solo operators."
};

export default function TemplatesPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Template library</div>
        <h1>Templates will support the paid product path later.</h1>
        <p className="lede">
          The first templates will cover command-center files, task planning,
          QA review, research collection, and deployment smoke tests.
        </p>
      </section>
      <div className="grid">
        {allTemplates.map((template) => (
          <ContentCard
            description={template.useCase}
            href={`/templates/${template.slug}`}
            key={template.id}
            tags={[template.templateType, template.searchIntent]}
            title={template.name}
          />
        ))}
      </div>
    </main>
  );
}
