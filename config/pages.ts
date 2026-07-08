import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Congchen Cai's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Congchen Cai's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Congchen Cai's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Congchen Cai.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Congchen Cai's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Congchen Cai's resume.",
    metadata: {
      title: "Resume",
      description: "Congchen Cai's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Congchen Cai's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Congchen Cai's professional journey and experience timeline.",
    },
  },
};
