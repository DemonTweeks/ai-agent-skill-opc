import { getSiteUrl } from "@/lib/site-url";

export function GET() {
  const baseUrl = getSiteUrl();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>2026-05-02</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml"
    }
  });
}
