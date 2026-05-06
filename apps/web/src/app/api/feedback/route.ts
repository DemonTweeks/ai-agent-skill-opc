import { NextRequest, NextResponse } from "next/server";
import { logFeedback } from "@/lib/db";

const RATE_LIMIT_MAP = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return realIp || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = RATE_LIMIT_MAP.get(ip);
  const requestCount = RATE_LIMIT_MAP.get(`${ip}_count`) || 0;

  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
    if (requestCount >= MAX_REQUESTS_PER_WINDOW) {
      return true;
    }
    RATE_LIMIT_MAP.set(`${ip}_count`, requestCount + 1);
    RATE_LIMIT_MAP.set(ip, now);
    return false;
  }

  RATE_LIMIT_MAP.set(ip, now);
  RATE_LIMIT_MAP.set(`${ip}_count`, 1);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { rating, category, feedback, email, pagePath, pageUrl } = body;

    if (!feedback || typeof feedback !== "string" || feedback.trim().length === 0) {
      return NextResponse.json(
        { error: "Feedback message is required" },
        { status: 400 }
      );
    }

    if (feedback.length > 2000) {
      return NextResponse.json(
        { error: "Feedback message is too long (max 2000 characters)" },
        { status: 400 }
      );
    }

    const validCategories = ["bug", "suggestion", "question", "praise", "other"];
    if (category && !validCategories.includes(category)) {
      return NextResponse.json(
        { error: "Invalid category" },
        { status: 400 }
      );
    }

    if (rating !== undefined && (typeof rating !== "number" || rating < 1 || rating > 5)) {
      return NextResponse.json(
        { error: "Rating must be a number between 1 and 5" },
        { status: 400 }
      );
    }

    if (email && (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await logFeedback({
      pagePath: pagePath || null,
      pageUrl: pageUrl || null,
      rating: rating || null,
      category: category || null,
      feedback: feedback.trim(),
      email: email || null,
    });

    return NextResponse.json(
      { success: true, message: "Thank you for your feedback!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback. Please try again." },
      { status: 500 }
    );
  }
}
