export interface AboutInfo {
  label: string;
  value: string;
  html?: boolean;
  highlight?: boolean;
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
