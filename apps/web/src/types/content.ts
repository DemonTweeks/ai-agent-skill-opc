export type Difficulty = "easy" | "medium" | "hard";
export type Effort = "low" | "medium" | "high";
export type RiskLevel = "low" | "medium" | "high";
export type ContentStatus = "draft" | "ready" | "published" | "needs_review";
export type SearchIntent =
  | "commercial"
  | "informational"
  | "comparison"
  | "implementation";
export type MonetizationPriority = "high" | "medium" | "low";

export type ScoreBreakdown = {
  businessImpact: number;
  setupSimplicity: number;
  maintenanceBurden: number;
  supervisionNeed: number;
  costFriendliness: number;
  securityRisk: number;
  repeatability: number;
  soloUsefulness: number;
};

export type Skill = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  businessFunction: string;
  capabilityCategory: string[];
  runtimeCategory: string[];
  problemSolved: string;
  bestFor: string[];
  notFor: string[];
  inputs: string[];
  outputs: string[];
  toolsRequired: string[];
  compatiblePlatforms: string[];
  setupDifficulty: Difficulty;
  maintenanceEffort: Effort;
  humanApprovalRequired: boolean;
  securityRisk: RiskLevel;
  privacyRisk: RiskLevel;
  externalToolAccess: boolean;
  fileSystemAccess: boolean;
  networkAccess: boolean;
  credentialRequirement: string;
  humanApprovalBoundary: string;
  safeTestModeRecommendation: string;
  opcFitScore: number;
  scoreBreakdown: ScoreBreakdown;
  implementationSteps: string[];
  examplePrompt?: string;
  exampleOutput?: string;
  failureModes: string[];
  whyUseThis: string[];
  whenNotToUse: string[];
  cheaperAlternative?: string;
  saferAlternative?: string;
  alternatives: string[];
  relatedAgents: string[];
  relatedWorkflows: string[];
  relatedTemplates: string[];
  affiliateToolSlugs: string[];
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
  skillDefinition?: string;
  _source?: string;
  _sourceUrl?: string;
};

export type Comparison = {
  id: string;
  title: string;
  slug: string;
  targetKeyword: string;
  searchIntent: "commercial" | "comparison";
  comparedItems: string[];
  winner: string;
  bestForBeginners: string;
  bestForAdvancedUsers: string;
  bestForNoCode: string;
  bestForDevelopers: string;
  cheapestOption: string;
  safestOption: string;
  comparisonTable: Array<Record<string, string>>;
  finalVerdict: string;
  whenToChooseEach: string[];
  researchNotes: string[];
  sources: Array<{
    title: string;
    url: string;
  }>;
  affiliateToolSlugs: string[];
  relatedSkills: string[];
  relatedWorkflows: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type Workflow = {
  id: string;
  name: string;
  slug: string;
  businessOutcome: string;
  description: string;
  whoThisIsFor: string[];
  notFor: string[];
  requiredAgents: string[];
  requiredSkills: string[];
  requiredTools: string[];
  steps: string[];
  humanCheckpoints: string[];
  automationCoverage: number;
  setupTimeEstimate: string;
  maintenanceCadence: string;
  failureHandling: string[];
  exampleRun: string;
  recommendedStack: string[];
  cheaperAlternative: string[];
  saferAlternative: string[];
  relatedTemplates: string[];
  relatedComparisons: string[];
  affiliateToolSlugs: string[];
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type AgentRole = {
  id: string;
  name: string;
  slug: string;
  businessMission: string;
  description: string;
  responsibilities: string[];
  mustNotDo: string[];
  requiredSkills: string[];
  requiredTools: string[];
  operatingStyle: string;
  decisionAuthority: string[];
  humanApprovalBoundaries: string[];
  deliverables: string[];
  successMetrics: string[];
  exampleTasks: string[];
  soulTemplate: string;
  relatedWorkflows: string[];
  relatedStacks: string[];
  riskLevel: RiskLevel;
  opcFitScore: number;
  targetKeyword: string;
  searchIntent: SearchIntent;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type AgentTemplate = {
  id: string;
  name: string;
  slug: string;
  templateType:
    | "soul_md"
    | "prompt"
    | "workflow_json"
    | "python_script"
    | "checklist"
    | "config";
  compatiblePlatform: string[];
  useCase: string;
  templateContent: string;
  requiredVariables: string[];
  setupNotes: string[];
  safetyNotes: string[];
  exampleUsage: string;
  relatedSkill: string;
  relatedAgent: string;
  relatedWorkflow: string;
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type AgentStack = {
  id: string;
  name: string;
  slug: string;
  businessFunction: string;
  includedAgents: string[];
  includedSkills: string[];
  recommendedTools: string[];
  runtimeRecommendation: string;
  costEstimate: string;
  setupDifficulty: Difficulty;
  automationLevel: string;
  bestFor: string[];
  notFor: string[];
  implementationSequence: string[];
  upgradePath: string[];
  risks: string[];
  alternatives: string[];
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type Playbook = {
  id: string;
  title: string;
  slug: string;
  problem: string;
  whoThisIsFor: string[];
  verdict: string;
  steps: string[];
  template: string;
  checklist: string[];
  examples: string[];
  toolStack: string[];
  failureModes: string[];
  reviewCadence: string;
  relatedTools: string[];
  relatedComparisons: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type AffiliateTarget = {
  id: string;
  toolName: string;
  slug: string;
  category: string;
  status: "planned" | "not_applied" | "applied" | "approved" | "active" | "rejected";
  publicUrl: string;
  affiliateUrl?: string;
  targetPages: string[];
  disclosureRequired: boolean;
  nextAction: string;
  notes: string;
  lastCheckedAt: string;
};

export type SponsoredPlacement = {
  id: string;
  name: string;
  slug: string;
  placementType: "featured_stack" | "recommended_runtime" | "sponsor_banner";
  status: "planned" | "available" | "reserved" | "active";
  targetPages: string[];
  disclosureLabel: string;
  notes: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  categoryType: "business_function" | "capability" | "runtime";
  description: string;
  decisionQuestion: string;
  relatedSkills: string[];
  relatedAgents: string[];
  relatedWorkflows: string[];
  relatedComparisons: string[];
  targetKeyword: string;
  searchIntent: SearchIntent;
  status: ContentStatus;
  lastReviewedAt: string;
};

export type ToolProfile = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  bestFor: string[];
  notFor: string[];
  setupNotes: string[];
  safetyNotes: string[];
  relatedSkills: string[];
  relatedWorkflows: string[];
  relatedTemplates: string[];
  targetKeyword: string;
  searchIntent: SearchIntent;
  monetizationPriority: MonetizationPriority;
  status: ContentStatus;
  lastReviewedAt: string;
};
