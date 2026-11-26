export type ProjectStatus = "live" | "in_development" | "prototype" | "research";

export type ProjectCategory =
  | "Multimodal AI"
  | "Applied NLP & GenAI"
  | "3D & Interactive Web"
  | "Computer Vision"
  | "Intelligent Systems"
  | "Full-Stack Systems"
  | "Operating Systems / Distributed Systems"
  | "Machine Learning / Predictive Analytics / Explainable AI";

export interface ProjectTechCategory {
  category: string;
  items: string[];
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureLayerItem {
  layer: string;
  component: string;
  details: string;
  status: "implemented" | "planned";
}

export interface ProblemStatementDetail {
  context: string;
  coreChallenge: string;
  engineeringGoal: string;
}

export interface ImplementationSection {
  title: string;
  description: string;
  items: string[];
}

export interface CaseStudyScreenshot {
  id: string;
  title: string;
  caption: string;
  tag: string;
  placeholderType?: "pipeline" | "dashboard" | "telemetry" | "model" | "geospatial";
}

export interface ResultsAndLimitations {
  results: string[];
  limitations: string[];
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export interface SystemFlowStep {
  stage: string;
  title: string;
  component: string;
  description: string;
  status: "implemented" | "planned";
  badgeText?: string;
}

export interface SystemFlowDiagramData {
  title: string;
  caption: string;
  explanation: string;
  steps: SystemFlowStep[];
}

export interface MLServingArchitecture {
  pipelineTitle: string;
  pipelineDescription: string;
  dataInput: {
    title: string;
    description: string;
  };
  featureAndInference: {
    title: string;
    description: string;
  };
  backendIntegration: {
    title: string;
    description: string;
  };
  frontendCommunication: {
    title: string;
    description: string;
  };
  outputVisualization: {
    title: string;
    description: string;
  };
  operationalCaveat?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  tags: string[];
  liveUrl: string | null;
  apiUrl?: string | null;
  repoUrl: string | null;
  timeline: string;
  featured: boolean;
  order: number;
  objectives?: string[];
  problemStatement?: ProblemStatementDetail;
  architectureSummary?: string;
  architectureLayers?: ArchitectureLayerItem[];
  systemFlowDiagram?: SystemFlowDiagramData;
  mlServing?: MLServingArchitecture;
  mermaidDiagram?: string;
  implementationSections?: ImplementationSection[];
  screenshots?: CaseStudyScreenshot[];
  implementedFeatures: string[];
  plannedFeatures: string[];
  techStack: ProjectTechCategory[];
  challenges?: ProjectChallenge[];
  metrics?: ProjectMetric[];
  resultsAndLimitations?: ResultsAndLimitations;
  roadmap?: RoadmapPhase[];
}

export type SkillProficiencyTier = "proficient" | "working_knowledge" | "familiar";

export interface SkillProjectRef {
  slug: string;
  title: string;
}

export interface Skill {
  name: string;
  tier: SkillProficiencyTier;
  tierLabel: string;
  evidence?: string;
  keywords?: string[];
  projects?: SkillProjectRef[];
}

export interface SkillCluster {
  id: string;
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface ExperienceResponsibilityGroup {
  area: string;
  points: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  summary: string;
  bullets: string[];
  responsibilityGroups?: ExperienceResponsibilityGroup[];
  technologies: string[];
  certificateUrl?: string;
  confidentialityNote?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  platform: string;
  subtitle: string;
  description: string;
  badges?: string[];
  link?: string;
  linkText?: string;
  date?: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  competencies: string[];
  date?: string;
  verifyUrl?: string;
  verificationStatus?: string;
  strategicValue?: string;
  credentialNote?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  specialization?: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: string;
  coursework?: string[];
  highlights?: string[];
  academicStanding?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  subHeadline: string;
  tagline: string;
  availability: string;
  bioShort: string;
  bioMedium: string;
  bioStory: string;
  careerObjective: string;
  email: string | null;
  emailVerified: boolean;
  education: EducationItem;
  metrics: { label: string; value: string; context: string }[];
  socials: SocialLink[];
}
