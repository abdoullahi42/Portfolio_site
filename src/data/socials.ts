
import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const contactEmail = "abdoullahisalihou2@gmail.com";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdoullahi-salihou-128329207/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/abdoullahi42",
    icon: FaGithub,
  },
];
