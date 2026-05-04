import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { allPlaybooks } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Playbooks",
  description: "Practical implementation playbooks for AI agent workflows."
};

export default function PlaybooksPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Playbook library</div>
        <h1>Long-form guides for implementation decisions.</h1>
        <p className="lede">
          Playbooks turn the directory into an operating manual: verdict,
          checklist, failure modes, examples, and review cadence.
        </p>
      </section>
      <div className="grid">
        {allPlaybooks.map((playbook) => (
          <ContentCard
            description={playbook.verdict}
            href={`/playbooks/${playbook.slug}`}
            key={playbook.id}
            tags={[playbook.targetKeyword, playbook.monetizationPriority]}
            title={playbook.title}
          />
        ))}
      </div>
    </main>
  );
}
