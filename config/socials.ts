import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@CharlesCCC",
    icon: Icons.gitHub,
    link: "https://github.com/CharlesCCC",
  },
  {
    name: "LinkedIn",
    username: "Congchen Cai",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/congchencai",
  },
  {
    name: "Twitter",
    username: "@CharlesC_ai",
    icon: Icons.twitter,
    link: "https://twitter.com/CharlesC_ai",
  },
  {
    name: "Gmail",
    username: "caicongchen",
    icon: Icons.gmail,
    link: "mailto:caicongchen@gmail.com",
  },
];
