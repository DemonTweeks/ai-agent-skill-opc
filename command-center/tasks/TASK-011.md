# TASK-011

## Basic Info

Task ID: TASK-011
Title: Resolve affiliate tool related labels into clickable links
Assigned Agent Type: DEV
Priority: Medium
Status: DONE
Risk Level: Low

## Objective

Make related-link modules resolve affiliate tool labels such as Make, n8n, Railway, Airtable, and Semrush to the public affiliate-target status page.

## Target Files / Areas

- `apps/web/src/lib/data.ts`
- `apps/web/src/app/affiliate-programs/page.tsx`

## Acceptance Criteria

- Affiliate target tool names resolve through `resolveRelatedLinks`.
- Affiliate program cards expose stable section anchors.
- Lint, typecheck, build, deployment, and production smoke checks pass.

## Testing Requirement

Run lint, typecheck, build, deploy, and route checks.

## QA Requirement

Confirm planned affiliate targets still do not pretend to be active affiliate links.

## Output File Path

`command-center/agent-results/TASK-011/programming.md`

## Testing File Path

`command-center/agent-results/TASK-011/testing.md`

## QA File Path

`command-center/agent-results/TASK-011/qa.md`

## User Action Required

None.

## Progress Update Required

Yes.

## Completion Notes

- Added affiliate target resolution to `resolveRelatedLinks`.
- Added stable affiliate-program card anchors.
- Verified production playbook links to Make, n8n, and Railway anchors.
- Latest production deployment ID: `dpl_2cUG42QGi4pfrKP9CWcnCWCXvHH8`.
