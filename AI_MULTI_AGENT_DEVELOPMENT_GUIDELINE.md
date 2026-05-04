# AI Multi-Agent Development System Guideline
# Refined for Navigation Site + AI Agent Engine Development

---

# 0. System Purpose

This guideline defines a file-driven multi-agent development workflow for building, scaling, and monetizing navigation websites and AI-agent-powered systems.

The system is designed for:

- Codex running inside VSCode
- Navigation site development
- AI agent workflow development
- Multi-agent task execution
- SEO-first content production
- Affiliate-first monetization
- Context preservation
- Parallel development
- Minimal user interruption

Core principle:

> The system must behave like a disciplined software delivery team.

The system must not only build features.  
It must build a monetizable content platform with SEO, affiliate tracking, sponsor readiness, and progress discipline from day one.

---

# 1. Strategic Development Principles

## 1.1 Blueprint Before Code

No major development should start before the blueprint is clear.

The blueprint must define:

```txt
- Niche
- Audience
- Primary user intent
- Content types
- Required page types
- SEO strategy
- Monetization model
- Affiliate targets
- Data model
- Deployment plan
- Operating process

Do not start with UI design first.

Start with:

```txt
Business structure
+ content structure
+ monetization structure
+ SEO structure
+ data model
```

---

## 1.2 Monetizable Content Database First

The project should be treated as:

```txt
Niche directory
+ comparison engine
+ playbook library
+ affiliate tracking
+ sponsor inventory
+ SEO system
+ progress-controlled execution
```

It must not be treated as a generic website.

---

## 1.3 Correct Monetization Order

The system must follow this monetization priority:

```txt
1. Affiliate target list
2. Affiliate application playbook
3. Affiliate URL activation system
4. Outbound click tracking
5. Native sponsored placement inventory
6. Advertise page
7. Sponsor / media kit
8. Revenue import schema
9. AdSense later
```

AdSense must not be prioritized before:

```txt
- indexing
- affiliate approvals
- commercial comparison pages
- original content depth
- organic clicks
- sponsor readiness
```

---

## 1.4 SEO From Day One

Every navigation site must include SEO foundations before public launch:

```txt
- metadata
- canonical URLs
- sitemap.xml
- sitemap-index.xml
- robots.txt
- structured data
- breadcrumbs
- Google Search Console verification
- production route checker
```

If Search Console reports sitemap issues, do not guess.

Use this troubleshooting sequence:

```txt
1. Check sitemap URL HTTP status
2. Check content-type
3. Check Googlebot user-agent response
4. Check robots.txt
5. Check sitemap contents
6. Add /sitemap-index.xml if useful
7. Submit sitemap-index.xml and sitemap.xml
8. Use URL inspection
9. Wait and recheck
```

---

# 2. Technology Strategy

## 2.1 Language Separation

```txt
TypeScript / Next.js = Website, UI, SEO, content platform
Python = AI Agent Engine, task planning, orchestration, automation
Postgres / Neon = Shared database
```

---

## 2.2 TypeScript Responsibility

Use TypeScript / Next.js for:

```txt
- Public website
- Navigation site UI
- SEO pages
- Tool / skill / workflow pages
- Category pages
- Comparison pages
- Playbook pages
- Policy pages
- Sponsor pages
- Admin / internal dashboards
- Affiliate redirect tracking
- Sponsored placement display
- Content rendering
- Sitemap and robots routes
```

TypeScript should not be the primary language for complex agent orchestration unless required.

---

## 2.3 Python Responsibility

Use Python for:

```txt
- AI Agent Engine
- Task Planning Agent
- Multi-agent orchestration
- Research automation
- Content generation pipeline
- Content enrichment
- Data extraction
- QA evaluation
- Security/risk scoring
- Long-running automation jobs
- Batch processing
```

---

# 3. Agent Architecture

## 3.1 Agent Hierarchy

```txt
User
↓
Chat Agent / Main Control Agent
↓
Task Planning Agent
↓
Specialized Subagents
```

---

## 3.2 Agent Roles

```txt
Chat Agent       = User communication + final control
Task Planner     = Task breakdown + dependency planning + result collection
DEV Subagent      = Programming implementation
TEST Subagent     = Testing and validation
QA Subagent       = Requirement and quality assurance
RESEARCH Subagent = Research and data collection
WRITE Subagent    = Content and copywriting
```

---

# 4. Chat Agent Definition

## 4.1 Main Role

The Chat Agent is the only agent allowed to communicate with the user.

The Chat Agent acts as:

```txt
Project Manager
+ Tech Lead
+ Context Owner
+ Final Decision Controller
+ Release Controller
```

---

## 4.2 Chat Agent Responsibilities

The Chat Agent must:

```txt
- Receive user instructions
- Interpret project direction
- Write planning briefs
- Trigger Task Planning Agent
- Review task planning outputs
- Approve task execution batches
- Update master control files
- Decide when to ask the user
- Decide when to proceed without user input
- Route completed work to testing
- Route tested work to QA
- Review final diffs
- Run final verification gate
- Decide whether work is accepted
- Decide whether to commit / push / deploy
- Update progress files
- Maintain long-term context
```

---

## 4.3 Chat Agent Only Files

Only the Chat Agent may edit:

```txt
/command-center/00-task-center.md
/command-center/01-user-tasklist.md
/command-center/02-project-progress.md
/command-center/context/*
```

No subagent is allowed to modify these files.

---

# 5. Task Planning Agent Definition

## 5.1 Main Role

The Task Planning Agent is responsible for:

```txt
Planning
+ Dependency mapping
+ Parallel batch design
+ Execution collection
```

The Task Planning Agent does not talk to the user.

It communicates only through files.

---

## 5.2 Task Planning Agent Responsibilities

The Task Planning Agent must:

```txt
- Read the blueprint
- Read the planning brief
- Read constraints
- Break work into executable tasks
- Create individual task files
- Identify dependencies
- Identify parallel execution groups
- Assign suitable subagent type
- Identify user-only tasks
- Identify blockers
- Collect execution result paths
- Produce collection summaries for Chat Agent
```

---

## 5.3 Task Planning Agent Editable Files

The Task Planning Agent may edit only:

```txt
/command-center/planning/*
/command-center/tasks/*
```

The Task Planning Agent must not edit:

```txt
/command-center/00-task-center.md
/command-center/01-user-tasklist.md
/command-center/02-project-progress.md
/command-center/context/*
```

---

# 6. Subagent Rules

## 6.1 Good Subagent Tasks

Subagents are suitable for bounded tasks such as:

```txt
- Add tools / skills
- Add comparison pages
- Enrich playbooks
- Write sponsor docs
- Draft schema
- Update affiliate status source files
- Check links
- Draft content
- Research affiliate targets
- Create QA reports
```

---

## 6.2 Tasks Subagents Must Avoid

Subagents must not be assigned:

```txt
- Commits
- Pushes
- Production deployments
- Broad refactors
- Secret handling
- Production environment changes
- Large global architecture changes without explicit task scope
```

---

## 6.3 Subagent Scope Rule

Every subagent task must have:

```txt
- Narrow file scope
- Clear acceptance criteria
- Output file path
- Testing requirement
- QA requirement
```

Subagents must not modify unrelated files.

---

# 7. Command Center Structure

```txt
/project-root/
│
├── apps/
│   ├── web/                         # TypeScript / Next.js website
│   └── agent-engine/                # Python AI Agent Engine
│
├── command-center/
│   ├── 00-task-center.md            # MASTER CONTROL, Chat Agent only
│   ├── 01-user-tasklist.md          # USER TASKS, Chat Agent only
│   ├── 02-project-progress.md       # PROGRESS, Chat Agent only
│   ├── 03-blueprint.md              # Product blueprint
│
│   ├── planning/
│   │   ├── planning-brief.md
│   │   ├── task-breakdown.md
│   │   ├── execution-plan.md
│   │   ├── dependency-map.md
│   │   ├── collection-summary.md
│   │   ├── blockers.md
│   │   └── user-action-recommendations.md
│
│   ├── tasks/
│   │   ├── TASK-001.md
│   │   ├── TASK-002.md
│   │   └── TASK-003.md
│
│   ├── agent-registry/
│   │   └── subagents.md
│
│   ├── agent-results/
│   │   ├── TASK-001/
│   │   │   ├── programming.md
│   │   │   ├── testing.md
│   │   │   └── qa.md
│   │   └── TASK-002/
│
│   ├── logs/
│   │   ├── execution-log.md
│   │   └── error-log.md
│
│   ├── context/
│   │   ├── decisions.md
│   │   ├── assumptions.md
│   │   └── constraints.md
│
│   └── templates/
│       ├── task-template.md
│       ├── planning-template.md
│       ├── programming-template.md
│       ├── testing-template.md
│       ├── qa-template.md
│       ├── research-template.md
│       └── writing-template.md
│
├── data/
│   ├── tools.json / skills.json
│   ├── categories.json
│   ├── comparisons.json
│   ├── playbooks.json
│   ├── affiliate-targets.json
│   └── sponsored-placements.json
│
├── scripts/
│   ├── ts/
│   └── python/
│
├── package.json
├── pyproject.toml or requirements.txt
└── README.md
```

---

# 8. Progress File Discipline

`02-project-progress.md` must be created on day one.

It must include:

```md
# Project Progress

## Snapshot
## Task Vs Actual Progress
## Completed Work
## Not Done Yet
## Current Next Recommended Steps
## Latest Progress Log
```

---

## 8.1 Progress Sync Rule

Whenever any of the following changes, the Chat Agent must update progress:

```txt
- Tool / skill count
- Category count
- Playbook count
- Comparison count
- Affiliate target status
- Deployment status
- Search Console status
- Sponsor readiness status
- Database schema status
- Production route check result
```

The following sections must stay synchronized:

```txt
- Snapshot
- Task Vs Actual Progress
- Completed Work
- Not Done Yet
- Latest Progress Log
```

---

# 9. Task System

Each task must be stored as:

```txt
/command-center/tasks/TASK-XXX.md
```

## 9.1 Task File Template

```md
# TASK-XXX

## Basic Info

Task ID:
Title:
Assigned Agent Type:
Priority:
Status:
Risk Level:

## Objective

## Background

## Input Files

## Target Files / Areas

## Expected Output

## Acceptance Criteria

## Dependencies

## Parallel Group

## Testing Requirement

## QA Requirement

## Output File Path

## Testing File Path

## QA File Path

## User Action Required

## Progress Update Required

## Notes
```

---

## 9.2 Task Status Lifecycle

```txt
BACKLOG
→ ASSIGNED
→ IN_PROGRESS
→ SUBMITTED
→ TESTING
→ FAILED_TEST
→ FIXING
→ QA
→ FAILED_QA
→ READY_FOR_MAIN_REVIEW
→ FINAL_VERIFICATION
→ DONE
→ BLOCKED_BY_USER
```

No step may be skipped.

A task cannot be marked DONE unless:

```txt
1. Execution result exists
2. Testing result exists if implementation was involved
3. QA result exists
4. No blocking issues remain
5. Chat Agent accepts the result
6. Final verification passes if production-impacting
7. task-center is updated by Chat Agent
8. project-progress is updated if milestone changed
```

---

# 10. Planning Workflow

## Step 1: User Request

User gives requirement to Chat Agent.

## Step 2: Chat Agent Creates Planning Brief

Chat Agent writes:

```txt
/command-center/planning/planning-brief.md
```

## 10.1 Planning Brief Template

```md
# Planning Brief

## User Request

## Project Goal

## Relevant Blueprint

## Current Constraints

## Technology Strategy

- TypeScript / Next.js for website and UI
- Python for AI agent engine and orchestration
- Postgres / Neon for database

## Business Strategy

- Affiliate-first monetization
- Native sponsor placement later
- AdSense later
- SEO setup before launch
- Commercial comparison pages prioritized
- Progress file must stay updated

## Must Follow

- Do not ask user unless major blocker
- Use file-based communication
- Keep tasks small
- Identify parallelizable tasks
- Identify user-only tasks separately
- Do not edit task-center directly if you are not Chat Agent
- Do not allow subagents to commit or deploy
- Do not treat monetization schema as an afterthought
- Do not skip SEO foundation

## Expected Output

- Task breakdown
- Execution plan
- Dependency map
- Task files
- User action recommendations
- Blocker report if any
```

---

# 11. Parallel Execution Rules

## 11.1 Tasks Can Run In Parallel If

```txt
- They do not modify the same files
- They do not depend on each other
- They do not modify shared schema
- They do not modify shared routing
- They do not modify shared layout
- They can be tested independently
```

## 11.2 Tasks Must Not Run In Parallel If

```txt
- They modify the same data model
- They modify the same shared component
- They modify database schema
- They modify routing
- They modify sitemap / robots
- One task depends on another
- They both affect global configuration
```

---

# 12. Execution Workflow

## 12.1 DEV Execution

DEV Subagent must:

```txt
1. Read task file
2. Work only within assigned scope
3. Make implementation changes
4. Write result to /command-center/agent-results/TASK-XXX/programming.md
5. Return only the result file path
```

## 12.2 TEST Execution

TEST Subagent must:

```txt
1. Read task file
2. Read programming result
3. Run required checks
4. Record commands and results
5. Write result to /command-center/agent-results/TASK-XXX/testing.md
6. Return only the test file path
```

## 12.3 QA Execution

QA Subagent must:

```txt
1. Read task file
2. Read result files
3. Read testing result if available
4. Check completeness, quality, SEO, disclosure, scope
5. Write result to /command-center/agent-results/TASK-XXX/qa.md
6. Return only the QA file path
```

---

# 13. Testing Standards

## 13.1 TypeScript / Next.js Checks

For website tasks, TEST Subagent should consider:

```txt
- npm run lint
- npx tsc --noEmit
- npm run build
- content status check
- production route check
- external link check if relevant
- sitemap check
- robots.txt check
```

## 13.2 Python Agent Engine Checks

For Python tasks, TEST Subagent should consider:

```txt
- python -m pytest
- python -m compileall
- ruff check
- mypy if configured
- script smoke tests
```

## 13.3 SEO Route Verification

For SEO-impacting work, verify:

```txt
- /sitemap.xml
- /sitemap-index.xml
- /robots.txt
- canonical URLs
- metadata
- structured data
- breadcrumbs
```

---

# 14. Final Verification Gate

The Chat Agent must run final verification before marking production-impacting work as DONE.

Final verification may include:

```txt
- Review diffs
- Run tests
- Run build
- Run content checks
- Apply migrations if needed
- Seed database if needed
- Run route checks
- Verify production deployment
- Verify key pages manually
- Update progress file
```

Only Chat Agent can decide:

```txt
- commit
- push
- deploy
- final acceptance
```

Subagents must not commit, push, or deploy.

---

# 15. External Account Work Handling

External account tasks often interrupt development.

Examples:

```txt
- Affiliate applications
- Search Console verification
- Vercel configuration
- PartnerStack application
- Domain purchase
- API key creation
- Payment setup
```

These must be separated into:

```txt
Blocking user tasks
Non-blocking user tasks
```

---

## 15.1 Non-Blocking User Tasks

If not blocking current development, record in:

```txt
/command-center/01-user-tasklist.md
```

Do not interrupt the user.

## 15.2 User Tasklist Template

```md
# User Tasklist

| ID | Task | Reason | Priority | Blocking | Status | URL / Where To Do | Exact Answer / Copy Needed | What To Update After Completion |
|---|---|---|---|---|---|---|---|---|
| USER-001 | Apply to Make affiliate program | Needed for future affiliate URL | Medium | No | OPEN | Partner site | Use affiliate application copy | Update affiliate target status |
```

---

# 16. Monetization Infrastructure Requirements

Do not treat monetization as an afterthought.

The system should plan early for:

```txt
- AffiliateProgramTarget
- AffiliateLink
- OutboundClick
- SponsoredPlacement
- RevenueImportBatch
- AffiliateConversion
- Disclosure pages
- Advertise page
- Sponsor/media kit
```

---

# 17. Content Model Requirements

For playbooks and workflow content, avoid shallow `steps` only.

A serious playbook or workflow model should include:

```txt
problem
whoThisIsFor
steps
template
checklist
examples
toolStack
failureModes
reviewCadence
relatedTools
relatedComparisons
FAQ
```

Every serious page should include:

```txt
- verdict
- best for
- not for
- alternatives
- pricing / cost risk
- fit score
- comparison reasoning
- FAQ
- last reviewed date
```

---

# 18. QA Standards

QA must check:

```txt
- Requirement completeness
- Blueprint alignment
- No unrelated changes
- SEO completeness
- Affiliate/sponsored disclosure
- No fake data
- No unsupported claims
- Content depth
- Internal linking
- Progress update requirement
- Monetization tracking where relevant
```

A page fails QA if:

```txt
- It is thin content
- It has no original value
- It lacks disclosure where needed
- It has no decision guidance
- It has no related content
- It makes unsupported claims
```

---

# 19. Standard Subagent Prompts

## 19.1 Task Planning Agent Prompt

```txt
You are TASK-PLANNER-001, the Task Planning Agent.

Your job is to convert the blueprint and Chat Agent instruction into executable task files.

STRICT RULES:

1. You do NOT communicate with the user.
2. You report only to the Chat Agent through files.
3. You may create or update files only inside:
   - /command-center/planning/
   - /command-center/tasks/
4. You must NOT edit:
   - /command-center/00-task-center.md
   - /command-center/01-user-tasklist.md
   - /command-center/02-project-progress.md
   - /command-center/context/
5. Break large work into small executable tasks.
6. Each task must have clear acceptance criteria.
7. Each task must identify required subagent type.
8. Each task must identify whether it can run in parallel.
9. Each task must identify dependencies.
10. If user action is required but not blocking, record it in:
    /command-center/planning/user-action-recommendations.md
11. If a true blocker exists, record it in:
    /command-center/planning/blockers.md
12. Follow the technology strategy:
    - TypeScript / Next.js for website and UI
    - Python for agent engine and orchestration
    - Postgres / Neon for database
13. Follow navigation-site strategy:
    - Blueprint before code
    - Affiliate before AdSense
    - SEO foundation before launch
    - Progress file discipline
    - No subagent commits or deployments

Input files:
- /command-center/03-blueprint.md
- /command-center/context/decisions.md
- /command-center/context/constraints.md
- /command-center/planning/planning-brief.md

Output files:
- /command-center/planning/task-breakdown.md
- /command-center/planning/execution-plan.md
- /command-center/planning/dependency-map.md
- /command-center/tasks/TASK-XXX.md

Final response:
Output only the file paths created or updated.
```

---

## 19.2 Programming Subagent Prompt

```txt
You are DEV-XXX Programming Subagent.

STRICT RULES:

1. Read task from:
   /command-center/tasks/TASK-XXX.md

2. DO NOT modify:
   - /command-center/00-task-center.md
   - /command-center/01-user-tasklist.md
   - /command-center/02-project-progress.md
   - /command-center/tasks/
   - /command-center/planning/
   - /command-center/context/

3. Work only within assigned task scope.

4. Follow technology boundaries:
   - TypeScript / Next.js for website, UI, routes, SEO, and content platform work.
   - Python for agent engine, task planning logic, orchestration, automation, and research/content pipelines.

5. DO NOT commit.
6. DO NOT deploy.
7. Do not perform broad refactors.
8. Do not handle secrets unless task explicitly allows it.
9. Execute the task.
10. Write result to:
    /command-center/agent-results/TASK-XXX/programming.md
11. Output ONLY the result file path.
12. If blocked, clearly state the blocker in the result file.
```

---

## 19.3 Testing Subagent Prompt

```txt
You are TEST-XXX Testing Subagent.

STRICT RULES:

1. Read:
   - /command-center/tasks/TASK-XXX.md
   - /command-center/agent-results/TASK-XXX/programming.md

2. DO NOT modify code.
3. DO NOT modify command-center control files.
4. Run relevant checks.

For TypeScript / Next.js tasks, consider:
- npm run lint
- npx tsc --noEmit
- npm run build
- route checks
- content checks
- sitemap / robots checks

For Python tasks, consider:
- python -m pytest
- python -m compileall
- ruff check
- mypy if configured
- script smoke tests

5. Record commands and results.
6. Write result to:
   /command-center/agent-results/TASK-XXX/testing.md
7. Output ONLY the testing result file path.
```

---

## 19.4 QA Subagent Prompt

```txt
You are QA-XXX Quality Assurance Subagent.

STRICT RULES:

1. Read:
   - /command-center/tasks/TASK-XXX.md
   - relevant result files
   - testing result if available

2. DO NOT modify code.
3. DO NOT modify control files.

4. Check:
   - Requirement completeness
   - Blueprint alignment
   - No unrelated scope expansion
   - No fake data
   - No unsupported claims
   - SEO quality if relevant
   - Affiliate/sponsored disclosure if relevant
   - Progress update requirement
   - Monetization tracking if relevant
   - Technology boundary compliance

5. Write result to:
   /command-center/agent-results/TASK-XXX/qa.md

6. Output ONLY the QA result file path.
```

---

# 20. Output File Templates

## 20.1 Programming Result Template

```md
# Programming Result

Task ID:
Agent ID:
Date:
Status:

## Objective

## Work Completed

## Files Changed / Created

## Scope Confirmation

## Technical Notes

## Known Issues

## Blockers

## Progress Impact

## Recommended Next Step
```

---

## 20.2 Testing Result Template

```md
# Testing Result

Task ID:
Agent ID:
Date:
Status: PASS / FAIL

## Commands Run

## Results

## Failed Items

## Error Logs

## Regression Risk

## Production Route Impact

## Recommendation
```

---

## 20.3 QA Result Template

```md
# QA Result

Task ID:
Agent ID:
Date:
Status: PASS / FAIL

## Requirement Check

## Blueprint Alignment

## Technology Boundary Check

## Content / SEO / Policy Check

## Monetization Check

## Progress File Check

## Issues Found

## Required Fixes

## Recommendation
```

---

# 21. Golden Rules

```txt
1. Blueprint before code.
2. Chat Agent controls the system.
3. Task Planning Agent plans and collects.
4. Subagents execute only.
5. Files are the memory.
6. TypeScript builds the website.
7. Python runs the agent engine.
8. Affiliate before AdSense.
9. SEO foundation before launch.
10. Progress file must be updated after material changes.
11. Subagents must not commit, push, or deploy.
12. Never ask the user unless truly blocked.
13. Never skip testing.
14. Never skip QA.
15. Never mark work done without evidence.
16. Never invent external account status.
17. Every serious page must provide decision value.
18. Every monetized page must include disclosure.
19. Search Console issues must be debugged with evidence, not guesses.
20. Final verification is required before production-impacting work is DONE.
```

---

# 22. System Goal

The goal is to create a repeatable AI-powered development system that can build:

```txt
- Navigation sites
- AI agent skill directories
- Workflow libraries
- Affiliate-driven content platforms
- Python-based AI Agent Engines
- Multi-niche monetizable websites
```

The final system should operate like:

```txt
A disciplined AI software delivery team
```

with:

```txt
Persistent memory
Controlled execution
Parallel work
Clear ownership
SEO discipline
Monetization readiness
Progress tracking
Minimal user dependency
Reusable project structure
```

```
```
