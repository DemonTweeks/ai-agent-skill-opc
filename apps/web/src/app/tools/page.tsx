import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allTools } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Tools",
  description:
    "Tool profiles for one-person companies building AI agent skills, workflows, and content operations."
};

export default function ToolsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Tool profiles</div>
        <h1>Tools are separated from affiliate targets.</h1>
        <p className="lede">
          Use this library to understand practical setup notes and safety
          boundaries for the tools that support AI agent workflows.
        </p>
      </section>
      <div className="grid">
        {allTools.map((tool) => (
          <ContentCard
            description={tool.description}
            href={`/tools/${tool.slug}`}
            key={tool.id}
            tags={[tool.category, tool.monetizationPriority]}
            title={tool.name}
          />
        ))}
      </div>
    </main>
  );
}
