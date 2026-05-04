# TASK-020

## Basic Info

Task ID: TASK-020
Title: Add 5 more agent role definitions
Assigned Agent Type: WRITE
Priority: High
Status: BACKLOG
Risk Level: Low

## Objective

Expand agent roles from 13 to 18 by adding 5 new virtual team member definitions that help solo operators understand what AI agents can do for their business.

## Background

Current agents.json has 13 roles. Need more coverage of common business functions that solo operators delegate to AI agents.

## Input Files

- data/agents.json
- command-center/03-blueprint.md

## Target Files / Areas

- data/agents.json

## Expected Output

5 new agent role records with:
- id, name, slug
- shortDescription, longDescription
- businessFunction, capabilityCategory
- skills, toolsRequired
- setupDifficulty, maintenanceEffort
- humanApprovalRequired, securityRisk, privacyRisk
- exampleUseCases, successMetrics
- opcFitScore

## Acceptance Criteria

- 5 valid agent records
- No duplicates
- Original content
- Clear value proposition
- JSON valid

## Dependencies

None

## Parallel Group

Batch-7

## Testing Requirement

Yes

## QA Requirement

Yes

## Output File Path

command-center/agent-results/TASK-020/programming.md

## Testing File Path

command-center/agent-results/TASK-020/testing.md

## QA File Path

command-center/agent-results/TASK-020/qa.md

## User Action Required

No

## Progress Update Required

Yes

## Notes

Focus on roles like: Social Media Manager, Email Marketing Specialist, Content Strategist, Customer Success Agent, etc.