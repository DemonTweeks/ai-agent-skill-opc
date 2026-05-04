import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise",
  description: "Sponsor readiness page for AI Agent Skill for One Person Company."
};

export default function AdvertisePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow">Sponsor readiness</div>
        <h1>Native sponsor placements will come after useful content exists.</h1>
        <p className="lede">
          The site is being prepared for sponsor inventory, but no sponsor
          placement is active in the local MVP.
        </p>
      </section>
    </main>
  );
}
