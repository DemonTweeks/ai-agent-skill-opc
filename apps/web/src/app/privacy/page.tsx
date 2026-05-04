import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for AI Agent Skill for One Person Company."
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Privacy</div>
        <h1>Privacy policy placeholder for the local MVP.</h1>
        <p className="lede">
          This local foundation does not yet collect submissions, analytics, or
          affiliate click events. A production privacy policy should be finalized
          before public launch.
        </p>
      </section>
    </main>
  );
}
