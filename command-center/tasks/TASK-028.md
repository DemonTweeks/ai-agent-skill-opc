# TASK-028

## Basic Info

Task ID: TASK-028
Title: Add feedback form to detail pages
Assigned Agent Type: DEV
Priority: High
Status: COMPLETED
Risk Level: Low

## Objective

Add the FeedbackForm component to all detail pages so users can submit feedback from any content page.

## Background

TASK-026 created the FeedbackForm component and TASK-027 implemented the API route. Now the form needs to be integrated into all detail pages across the site.

## Input Files

- apps/web/src/components/FeedbackForm.tsx
- apps/web/src/app/api/feedback/route.ts

## Target Files / Areas

- apps/web/src/app/skills/[slug]/page.tsx (already done in TASK-026)
- apps/web/src/app/agents/[slug]/page.tsx
- apps/web/src/app/comparisons/[slug]/page.tsx
- apps/web/src/app/workflows/[slug]/page.tsx
- apps/web/src/app/templates/[slug]/page.tsx
- apps/web/src/app/playbooks/[slug]/page.tsx
- apps/web/src/app/stacks/[slug]/page.tsx
- apps/web/src/app/tools/[slug]/page.tsx
- apps/web/src/app/categories/[slug]/page.tsx

## Expected Output

- FeedbackForm imported and rendered on all detail pages
- pagePath prop set correctly for each content type
- Form appears after RelatedLinks section

## Acceptance Criteria

- All 9 detail page types have FeedbackForm integrated
- Each page passes correct pagePath prop
- TypeScript typecheck passes
- Build completes successfully
- FeedbackForm renders correctly on each page type

## Dependencies

- TASK-026 (feedback form component) - completed
- TASK-027 (feedback API route) - completed

## Parallel Group

Batch-9

## Testing Requirement

Yes - build and typecheck

## QA Requirement

Yes - verify all pages have form

## Output File Path

command-center/agent-results/TASK-028/programming.md

## Testing File Path

command-center/agent-results/TASK-028/testing.md

## QA File Path

command-center/agent-results/TASK-028/qa.md

## User Action Required

No

## Progress Update Required

Yes

## Notes

The FeedbackForm is placed after the RelatedLinks section on each detail page, with the pagePath prop set to the correct route for each content type.
