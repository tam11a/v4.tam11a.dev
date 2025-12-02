import type {
  AboutInfo,
  Contact,
  Honor,
  Job,
  Project,
  SkillSet,
} from "./types";

export const ABOUT_INFO: AboutInfo[] = [
  { label: "Role", value: "Creative Lead & Software Engineer" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Experience", value: "4+ Years" },
  { label: "Status", value: "● Open to Work", highlight: true },
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
      "TypeScript / JavaScript",
      "C# / Python",
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
    role: "Head of Creative Design & Dev",
    period: "2024 — Present",
    description:
      "Spearheading the development of cutting-edge web applications. Playing a pivotal role in shaping the technical roadmap and aligning technology with business objectives.",
    current: true,
  },
  {
    company: "Reserveit BD",
    role: "Software Engineer",
    period: "2021 — 2023",
    description:
      "Built Bangladesh's first online restaurant reservation platform. Created a simple, user-friendly application for booking seats for dine-outs.",
  },
  {
    company: "Planet X Inc.",
    role: "Jr. Software Engineer",
    period: "2021",
    description:
      "Led development for a multi-vendor marketplace offering 20+ categories. Ensured superior customer support and fulfillment systems.",
  },
];

export const HONORS: Honor[] = [
  {
    title: "CSE Fest 2K24 Hackathon",
    award: "Winner",
    description: "1st Place | 2024",
    badge: "Winner",
    badgeColor: "text-primary/80",
  },
  {
    title: "National Hackathon",
    award: "Champion",
    description: "National Champion Bangladesh",
    badge: "Champion",
    badgeColor: "text-textMuted",
  },
  {
    title: "Development Competition",
    award: "Runner-up",
    description: "First Runner-up",
    badge: "Runner-up",
    badgeColor: "text-textMuted",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Defined Solution",
    description: "Enterprise Software Architecture",
    link: "#",
  },
  {
    title: "Grade Limited",
    description: "B2B E-commerce & Digitalization",
    link: "#",
  },
  {
    title: "Reserveit BD",
    description: "Restaurant Reservation Platform",
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
