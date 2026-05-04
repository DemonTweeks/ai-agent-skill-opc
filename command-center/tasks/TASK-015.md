# TASK-015

## Basic Info

Task ID: TASK-015
Title: Add Search Console verification metadata support
Assigned Agent Type: DEV
Priority: Medium
Status: DONE_NEEDS_USER_TOKEN
Risk Level: Low

## Objective

Prepare the app for Google Search Console verification using an environment variable without requiring a code change later.

## Target Files / Areas

- `apps/web/src/app/layout.tsx`

## Acceptance Criteria

- App can emit Google site verification metadata when `GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set.
- No verification token is hardcoded.
- Lint, typecheck, build, deploy, and production route checks pass.

## Testing Requirement

Run lint, typecheck, build, deploy, and route checks.

## QA Requirement

Confirm the project still does not claim Search Console verification is complete.

## Output File Path

`command-center/agent-results/TASK-015/programming.md`

## Testing File Path

`command-center/agent-results/TASK-015/testing.md`

## QA File Path

`command-center/agent-results/TASK-015/qa.md`

## User Action Required

User still needs to create the Google Search Console property and provide or set the verification token in Vercel.

## Progress Update Required

Yes.

## Completion Notes

- Added `GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` metadata support.
- No verification token is hardcoded.
- Production deploy and route checks passed.
- Latest production deployment ID: `dpl_NsRKWuJM6cbYtvY8Y7NVuckiGwg4`.
- Actual Google Search Console verification still requires the user to create the property and set the token in Vercel.
