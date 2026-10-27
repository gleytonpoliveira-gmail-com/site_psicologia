export type ProjectCategory = 'todos' | 'ecommerce' | 'saas' | 'institucional' | 'landing';

export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  techStack: string[];
  deliverables: string[];
  duration: string;
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  typicalTimeline: string;
  idealFor: string;
}

export interface ScopeAddon {
  id: string;
  name: string;
  description: string;
  priceBRL: number;
  durationDays: number;
  recommendedFor: string[];
}

export interface ProjectTypeOption {
  id: string;
  name: string;
  basePriceBRL: number;
  baseDays: number;
  pagesRange: string;
  description: string;
  bestFor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  resultMetric: string;
  metricContext: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  currentSite: string;
  projectType: string;
  addons: string[];
  budgetEstimated: number;
  message: string;
  createdAt: string;
}
