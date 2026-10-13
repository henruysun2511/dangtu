export type ProjectCategory =
  | 'Power BI & Data Analytics'
  | 'Product & Growth Analytics'
  | 'Financial Analysis'
  | 'Scientific Research'
  | 'SQL & Data Warehousing'
  | 'Business Case Studies'
  | 'Academic Projects';

export interface ProjectDeliverable {
  type: 'dashboard' | 'report' | 'repository' | 'dataset' | 'paper';
  label: string;
  url?: string;
  note?: string;
  isAvailable: boolean;
}

export interface MetricHighlight {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  description?: string;
}

export interface DaxMeasure {
  name: string;
  formula: string;
  explanation: string;
}

export interface PowerBiWorkflow {
  businessRequirements: string[];
  powerQueryCleaning: string[];
  dataModeling: string;
  daxMeasures: DaxMeasure[];
  dashboardDesign: string[];
  businessInsights: string[];
}

export interface ResearchDetails {
  hypothesis: string;
  teamComposition: string;
  dataCollection: string;
  analyticalModel: string;
  publicationStatus: string;
}

export interface ProjectScreenshot {
  title: string;
  caption: string;
  type: 'kpi' | 'chart' | 'table' | 'model';
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string;
  ticketId?: string; // e.g. DA-101 (Jira style key)
  isHypotheticalOrAcademic: boolean;
  academicDisclaimer?: string;
  summary: string;
  problemStatement: string;
  myRole: string;
  coverImage?: string;
  dashboardImage?: string;
  dataSources: {
    name: string;
    description: string;
    scope: string;
    limitations?: string;
  }[];
  methodology: string[];
  toolsAndTechniques: string[];
  keyFindings: string[];
  deliverables: ProjectDeliverable[];
  metrics: MetricHighlight[];
  limitationsAndLessons: string[];
  screenshots: ProjectScreenshot[];
  startDate: string;
  endDate: string;
  status: 'Completed' | 'Ongoing' | 'Under Review' | 'Academic Coursework';
  featured: boolean;
  powerBiWorkflow?: PowerBiWorkflow;
  researchDetails?: ResearchDetails;
}

export interface ProfileInfo {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  bio: string;
  avatarUrl?: string;
  bannerUrl?: string;
  academicBackground: {
    degree: string;
    major: string;
    institution: string;
    expectedGraduation: string;
    relevantCoursework: string[];
    isPlaceholder: boolean;
  };
  careerInterests: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
    resumeFileName: string;
  };
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Research' | 'Academic Project' | 'Certification' | 'Competition';
  period: string;
  isVerified: boolean;
  verificationBadgeText: string;
  ticketKey?: string;
  highlights: string[];
  toolsUsed: string[];
}
