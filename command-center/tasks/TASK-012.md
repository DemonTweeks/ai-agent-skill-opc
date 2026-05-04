# TASK-012

## Basic Info

Task ID: TASK-012
Title: Add production domain configuration switch
Assigned Agent Type: DEV
Priority: Medium
Status: DONE
Risk Level: Medium

## Objective

Remove hard-coded `example.com` from production SEO routes and deploy to Vercel using the Vercel-provided domain.

## Background

The user confirmed Vercel as deployment target and no custom domain. The site should use the Vercel-provided domain for metadata, sitemap, sitemap-index, and robots.

## Input Files

- `apps/web/src/app/layout.tsx`
- `apps/web/src/app/sitemap.ts`
- `apps/web/src/app/robots.ts`
- `apps/web/src/app/sitemap-index.xml/route.ts`

## Target Files / Areas

- `apps/web/src/lib/site-url.ts`
- `vercel.json`
- `.vercel/project.json`

## Expected Output

Production URLs are environment-driven and the project is deployed to Vercel.

## Acceptance Criteria

- `example.com` is not hard-coded in app SEO routes.
- Local fallback works.
- Vercel deployment succeeds.
- Production sitemap and robots use the Vercel-provided domain.

## Dependencies

TASK-001 to TASK-010.

## Parallel Group

J

## Testing Requirement

Run lint, typecheck, build, local SEO route checks, Vercel deployment, and production route checks.

## QA Requirement

Verify production sitemap/robots use the Vercel-provided domain.

## Output File Path

`command-center/agent-results/TASK-012/programming.md`

## Testing File Path

`command-center/agent-results/TASK-012/testing.md`

## QA File Path

`command-center/agent-results/TASK-012/qa.md`

## User Action Required

None. User approved deployment.

## Progress Update Required

Yes.

