import type {
  AboutInfo,
  Contact,
  Honor,
  Job,
  Project,
  SkillSet,
} from "./types";

export const ABOUT_INFO: AboutInfo[] = [
  { label: "Role", value: "Senior Software Engineer" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Experience", value: "4+ Years" },
  {
    label: "Status",
    value:
      '<p class="reveal-text text-accent">● Open to Work &bull; <a href="/resume_ibrahimsadiktamim.pdf" target="_blank" rel="noopener noreferrer" class="cursor-hover">Resume</a></p>',
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

export const JOBS: Job[] = [
  {
    company: "Defined Solution",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    description:
      "Spearheading the development of cutting-edge web applications. Playing a pivotal role in shaping the technical roadmap and aligning technology with business objectives.",
    current: true,
  },
  {
    company: "Reserveit BD",
    role: "Senior Full-Stack Engineer",
    period: "2021 — 2023",
    description:
      "Built Bangladesh's first online restaurant reservation platform. Created a simple, user-friendly application for booking seats for dine-outs.",
  },
  {
    company: "Planet X Inc.",
    role: "Jr. Full-Stack Engineer",
    period: "2021",
    description:
      "Contributed to various web development projects, focusing on front-end development and user experience enhancements.",
  },
];

export const HONORS: Honor[] = [
  {
    title: "CSE Fest 2K24 Hackathon",
    award: "Champion",
    description: "1st Place — 2024",
    badge: "Champion",
    badgeColor: "text-accent/80",
  },
  {
    title: "NASA Space Apps Challenge",
    award: "Champion",
    description: "National Champion Bangladesh — 2020",
    badge: "Champion",
    badgeColor: "text-accent/80",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Munchies Bangladesh",
    description: "UI Case Study of a Food and Grocery Delivery Platform",
    link: "#",
  },
  {
    title: "Grade Limited",
    description: "B2B E Commerce & Digitalization",
    link: "#",
  },
  {
    title: "Rayos Bangladesh",
    description: "B2C E Commerce Platform",
    link: "#",
  },
  {
    title: "PND Service Bangladesh",
    description: "B2B & B2C E Commerce Platform",
    link: "#",
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
