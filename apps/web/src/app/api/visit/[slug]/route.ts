import { NextResponse } from "next/server";
import { getAffiliateTarget } from "@/lib/data";
import { logAffiliateClick } from "@/lib/db";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const target = getAffiliateTarget(slug);

  if (!target) {
    return NextResponse.json({ error: "Unknown outbound target" }, { status: 404 });
  }

  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent");
  const referrer = request.headers.get("referer");
  const pagePath = url.pathname;
  const utmSource = url.searchParams.get("utm_source");
  const utmMedium = url.searchParams.get("utm_medium");
  const utmCampaign = url.searchParams.get("utm_campaign");

  if (target.status !== "active" || !target.affiliateUrl) {
    void logAffiliateClick({
      slug,
      affiliateTargetId: target.id,
      publicUrl: target.publicUrl,
      affiliateUrl: target.affiliateUrl ?? "",
      status: target.status,
      userAgent,
      referrer,
      pagePath,
      utmSource,
      utmMedium,
      utmCampaign
    }).catch(() => null);

    return NextResponse.json(
      {
        error: "Outbound target is not active",
        status: target.status,
        publicUrl: target.publicUrl
      },
      { status: 409 }
    );
  }

  void logAffiliateClick({
    slug,
    affiliateTargetId: target.id,
    publicUrl: target.publicUrl,
    affiliateUrl: target.affiliateUrl,
    status: target.status,
    userAgent,
    referrer,
    pagePath,
    utmSource,
    utmMedium,
    utmCampaign
  }).catch(() => null);

  return NextResponse.redirect(target.affiliateUrl, 302);
}

