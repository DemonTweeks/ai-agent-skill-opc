import Link from "next/link";

type ContentCardProps = {
  href: string;
  title: string;
  description: string;
  tags?: string[];
};

export function ContentCard({
  href,
  title,
  description,
  tags = []
}: ContentCardProps) {
  return (
    <Link className="card" href={href}>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 ? (
        <div className="meta-row">
          {tags.map((tag) => (
            <span className="pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}

