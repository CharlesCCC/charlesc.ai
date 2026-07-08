import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-template",
    companyName: "Portfolio Website (130+ GitHub stars)",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Open-source Next.js portfolio template recognized and forked by developers worldwide, optimized for SEO/AEO and performance.",
    websiteLink: "https://nbarkiya.xyz",
    githubLink: "https://github.com/charlesCCC/charlesc.ai",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio/logo.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I created an open-source Next.js portfolio template to help developers ship a modern, responsive portfolio quickly.",
        "The project focuses heavily on performance, clean typography, and strong SEO/AEO foundations, and it has been adopted and forked by developers globally.",
      ],
      bullets: [
        "Created an open-source Next.js portfolio template recognized and forked by developers worldwide.",
        "Ranked #1 on ChatGPT search for “best Next.js portfolio template GitHub” through AEO/GEO optimization.",
        "Maintained a fast, responsive UI with a minimal, themeable design system.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
