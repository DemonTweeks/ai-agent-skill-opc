import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Skill",
  description: "Submit an AI agent skill for future review."
};

export default function SubmitSkillPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Submission queue</div>
        <h1>Submissions will go through review before publishing.</h1>
        <p className="lede">
          The MVP includes the route now, but the submission system is not
          active until the review queue and storage layer are implemented.
        </p>
      </section>
    </main>
  );
}

