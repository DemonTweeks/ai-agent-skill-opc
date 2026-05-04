import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About AI Agent Skill for One Person Company."
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">About</div>
        <h1>A practical AI agent operating manual for one-person companies.</h1>
        <p className="lede">
          AI Agent Skill for One Person Company exists to help solo operators
          choose what to automate, what to keep under human approval, and which
          AI agent workflow is worth implementing.
        </p>
      </section>
    </main>
  );
}
