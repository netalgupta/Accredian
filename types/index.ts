export interface Program {
  id: string;
  title: string;
  category: "Tech" | "Business" | "Leadership";
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  icon: string;
  color: string;
  fullDescription?: string;
  mentorsCount?: number;
  projects?: number;
  modules?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Lead {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  teamSize: string;
  message: string;
  createdAt: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}
