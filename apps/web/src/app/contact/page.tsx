import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page for AI Agent Skill for One Person Company."
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Contact</div>
        <h1>Contact workflow placeholder.</h1>
        <p className="lede">
          A production contact route should be added after the deployment target,
          email provider, and privacy policy are confirmed.
        </p>
      </section>
    </main>
  );
}
