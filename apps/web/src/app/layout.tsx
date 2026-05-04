import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "AI Agent Skill for One Person Company",
    template: "%s | AI Agent Skill for One Person Company"
  },
  description:
    "AI agent skills, workflows, and comparison guides for one-person companies.",
  metadataBase: new URL(getSiteUrl()),
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification
      }
    : undefined
};

const navItems = [
  ["Skills", "/skills"],
  ["Comparisons", "/comparisons"],
  ["Workflows", "/workflows"],
  ["Agents", "/agents"],
  ["Stacks", "/stacks"],
  ["Playbooks", "/playbooks"],
  ["Templates", "/templates"],
  ["Tools", "/tools"],
  ["Categories", "/categories"],
  ["Affiliate", "/affiliate-programs"],
  ["How We Review", "/how-we-review"]
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header-inner">
              <Link className="brand" href="/">
                AI Agent Skill for One Person Company
              </Link>
              <nav className="nav" aria-label="Primary navigation">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="footer-inner">
              Built as a practical AI agent operating manual for one-person
              companies.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
