import type {
  AboutInfo,
  Contact,
  SkillSet,
} from "./types";

export const ABOUT_INFO: AboutInfo[] = [
  { label: "Role", value: "Senior Software Engineer" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Experience", value: "4+ Years" },
  {
    label: "Status",
    value:
      '<p class="reveal-text text-accent">● Open to Work <a href="/resume_ibrahimsadiktamim.pdf" target="_blank" rel="noopener noreferrer" class="cursor-hover hidden md:inline-block">&bull; Resume</a></p>',
    html: true,
    highlight: true,
  },
];

export const SKILL_SETS: SkillSet[] = [
  {
    category: "Skills",
    items: [
      "Software Architecture",
      "UI/UX Design",
      "DevOps Technologies",
      "Project Management",
    ],
  },
  {
    category: "Tools",
    items: ["Linear", "VS Code", "Figma", "GitHub"],
  },
  {
    category: "Tech Stack",
    items: [
      "Astro",
      "React / Next.js",
      "Node.js / Nest.js",
      "JavaScript / TypeScript",
      "SQL / NoSQL",
    ],
  },
  {
    category: "Languages",
    items: ["English (Professional)", "Bengali (Native)", "Hindi (Bilingual)"],
  },
];

export const CONTACTS: Contact[] = [
  {
    label: "Mail",
    value: "ibrahimsadiktamim@gmail.com",
    href: "mailto:ibrahimsadiktamim@gmail.com",
  },
  { label: "GitHub", value: "tam11a", href: "https://github.com/tam11a" },
  {
    label: "LinkedIn",
    value: "tam11a",
    href: "https://www.linkedin.com/in/tam11a",
  },
];
