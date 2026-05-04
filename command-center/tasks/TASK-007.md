# TASK-007

## Basic Info

Task ID: TASK-007
Title: Add affiliate and sponsor infrastructure
Assigned Agent Type: DEV
Priority: High
Status: DONE
Risk Level: Medium

## Objective

Add early monetization infrastructure without inventing affiliate approvals.

## Target Files / Areas

- `data/affiliate-targets.json`
- `data/sponsored-placements.json`
- `apps/web/src/app/api/visit/[slug]/route.ts`
- `apps/web/src/app/affiliate-programs/page.tsx`

## Acceptance Criteria

- Affiliate target data distinguishes planned/applied/approved/active states.
- Redirect route only redirects known active non-placeholder URLs.
- No fake affiliate or sponsor claims.

## Dependencies

TASK-005.

## Parallel Group

F

## Testing Requirement

Run route checks for affiliate pages and redirect behavior.

## QA Requirement

Check disclosure and monetization accuracy.

## Output File Path

`command-center/agent-results/TASK-007/programming.md`

## Testing File Path

`command-center/agent-results/TASK-007/testing.md`

## QA File Path

`command-center/agent-results/TASK-007/qa.md`

## User Action Required

None.

## Progress Update Required

Yes.
