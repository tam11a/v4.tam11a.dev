export interface AboutInfo {
  label: string;
  value: string;
  html?: boolean;
  highlight?: boolean;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  country?: string;
  current?: boolean;
}

export interface Honor {
  title: string;
  award: string;
  description: string;
  badge?: string;
  badgeColor?: string; // Tailwind class for text color
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface Contact {
  label: string;
  value: string;
  href: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}
