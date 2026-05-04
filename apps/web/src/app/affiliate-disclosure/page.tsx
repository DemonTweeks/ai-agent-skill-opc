import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Affiliate and sponsor disclosure for AI Agent Skill for One Person Company."
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Disclosure</div>
        <h1>Affiliate links must be labeled clearly.</h1>
        <p className="lede">
          AI Agent Skill for One Person Company is designed to support affiliate
          revenue in the future. We do not label a link as affiliate unless the
          program and URL are actually active.
        </p>
      </section>
    </main>
  );
}
