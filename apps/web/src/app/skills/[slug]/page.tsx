import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedLinks } from "@/components/related-links";
import { allSkills, getSkill, resolveRelatedLinks } from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allSkills.map((skill) => ({
    slug: skill.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    return {};
  }

  return {
    title: skill.name,
    description: skill.shortDescription
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    notFound();
  }

  const relatedLinks = resolveRelatedLinks([
    ...skill.relatedAgents,
    ...skill.relatedWorkflows,
    ...skill.relatedTemplates,
    ...skill.alternatives
  ]);

  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">{skill.businessFunction} skill</div>
        <h1>{skill.name}</h1>
        <p className="lede">{skill.longDescription}</p>
        <div className="meta-row">
          <span className="pill score">OPC Fit Score {skill.opcFitScore}</span>
          <span className="pill">{skill.securityRisk} security risk</span>
          <span className="pill">{skill.privacyRisk} privacy risk</span>
          <span className="pill">{skill.searchIntent}</span>
        </div>
      </section>

      <section className="section grid">
        <div className="card">
          <h2>Should You Use This?</h2>
          {skill.whyUseThis.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="card">
          <h2>When Not To Use</h2>
          {skill.whenNotToUse.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="card">
          <h2>Human Approval Boundary</h2>
          <p>{skill.humanApprovalBoundary}</p>
        </div>
      </section>

      <section className="section">
        <h2>Implementation Steps</h2>
        <div className="grid">
          {skill.implementationSteps.map((step, index) => (
            <div className="card" key={step}>
              <h3>{index + 1}. {step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section grid">
        <div className="card">
          <h2>Cheaper Alternative</h2>
          <p>{skill.cheaperAlternative ?? "No cheaper alternative listed yet."}</p>
        </div>
        <div className="card">
          <h2>Safer Alternative</h2>
          <p>{skill.saferAlternative ?? "No safer alternative listed yet."}</p>
        </div>
        <div className="card">
          <h2>Last Reviewed</h2>
          <p>{skill.lastReviewedAt}</p>
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
