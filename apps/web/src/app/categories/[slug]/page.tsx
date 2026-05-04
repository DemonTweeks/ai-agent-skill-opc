import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import {
  allCategories,
  getCategory,
  resolveRelatedLinks
} from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category
    ? { title: category.name, description: category.description }
    : {};
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const relatedLinks = resolveRelatedLinks([
    ...category.relatedSkills,
    ...category.relatedAgents,
    ...category.relatedWorkflows,
    ...category.relatedComparisons
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">{category.categoryType}</div>
        <h1>{category.name}</h1>
        <p className="lede">{category.description}</p>
        <div className="meta-row">
          <span className="pill">{category.targetKeyword}</span>
          <span className="pill">{category.searchIntent}</span>
        </div>
      </section>
      <section className="section">
        <h2>Decision Question</h2>
        <div className="card">
          <p>{category.decisionQuestion}</p>
        </div>
      </section>
      <RelatedLinks title="Related starting points" links={relatedLinks} />
      <section className="section-links">
        <Link className="button" href="/skills">
          Browse skills
        </Link>
        <Link className="button secondary" href="/comparisons">
          Compare tools
        </Link>
      </section>
    </main>
  );
}
