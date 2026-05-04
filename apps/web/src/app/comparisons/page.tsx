import type { Metadata } from "next";
import Link from "next/link";
import { allComparisons } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Agent Tool Comparisons",
  description:
    "Commercial AI agent and automation comparisons for solo operators."
};

export default function ComparisonsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Comparison engine</div>
        <h1>Compare tools before building the workflow.</h1>
        <p className="lede">
          Start with commercial-intent decisions: winner, best-for blocks,
          cheapest option, safest option, and when to choose each path.
        </p>
      </section>
      <div className="grid">
        {allComparisons.map((comparison) => (
          <Link
            className="card"
            href={`/comparisons/${comparison.slug}`}
            key={comparison.id}
          >
            <h3>{comparison.title}</h3>
            <p>{comparison.winner}</p>
            <div className="meta-row">
              <span className="pill">{comparison.targetKeyword}</span>
              <span className="pill">{comparison.searchIntent}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

