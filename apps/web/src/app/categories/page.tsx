import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Categories",
  description: "Business-function categories for AI agent skills and workflows."
};

export default function CategoriesPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Category taxonomy</div>
        <h1>Browse by the business function you want to run better.</h1>
        <p className="lede">
          Categories connect skills, agents, workflows, comparisons, and
          playbooks around a decision a solo operator actually needs to make.
        </p>
      </section>
      <div className="grid">
        {allCategories.map((category) => (
          <ContentCard
            description={category.decisionQuestion}
            href={`/categories/${category.slug}`}
            key={category.id}
            tags={[category.categoryType, category.searchIntent]}
            title={category.name}
          />
        ))}
      </div>
    </main>
  );
}
