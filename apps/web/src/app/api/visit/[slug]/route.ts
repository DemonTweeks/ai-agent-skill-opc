import { NextResponse } from "next/server";
import { getAffiliateTarget } from "@/lib/data";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const target = getAffiliateTarget(slug);

  if (!target) {
    return NextResponse.json({ error: "Unknown outbound target" }, { status: 404 });
  }

  if (target.status !== "active" || !target.affiliateUrl) {
    return NextResponse.json(
      {
        error: "Outbound target is not active",
        status: target.status,
        publicUrl: target.publicUrl
      },
      { status: 409 }
    );
  }

  return NextResponse.redirect(target.affiliateUrl, 302);
}

