import Link from "next/link";
import type { RelatedLink } from "@/lib/data";

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

export function RelatedLinks({
  title = "Related next steps",
  links
}: RelatedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="grid">
        {links.map((link) => (
          <Link className="card" href={link.href} key={`${link.kind}-${link.href}`}>
            <h3>{link.label}</h3>
            <p>{link.kind}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
