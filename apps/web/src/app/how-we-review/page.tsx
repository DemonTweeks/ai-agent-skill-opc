import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Review",
  description:
    "How AI Agent Skill for One Person Company reviews AI agent skills, workflows, comparisons, and templates."
};

export default function HowWeReviewPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Trust and safety</div>
        <h1>Every serious page must help a solo operator make a better decision.</h1>
        <p className="lede">
          We check business usefulness, OPC fit, security risk, privacy risk,
          decision value, disclosure needs, and whether a human approval step is
          required.
        </p>
      </section>
      <section className="section">
        <h2>Review checks</h2>
        <div className="grid">
          {[
            "Business usefulness",
            "OPC fit",
            "Security and privacy risk",
            "Human approval boundary",
            "No fake affiliate or sponsor claims",
            "Decision guidance and alternatives"
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                A page should remain useful even when affiliate links are
                removed.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
