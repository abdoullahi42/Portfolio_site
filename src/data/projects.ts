import type { Project } from "../types/project.types";

import Renewed from "../assets/images/Renewed-You.png";
import Letsellify from "../assets/images/letsellify.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Renewed-You",
    category: "Personal project",

    description:
      "A digital platform connecting therapists with individuals seeking mental health support.",

    problem:
      "Finding and booking convenient therapy sessions can be difficult for individuals seeking professional support.",

    solution:
      "A centralized platform designed to help users discover therapists and book sessions more conveniently.",

    image: Renewed,

    stack: ["React", "JavaScript", "Tailwind CSS", "Supabase"],

    githubLink: "https://github.com/abdoullahi42/Renewed-You",

    liveDemo: "https://renewed-you.vercel.app/",
  },

  {
    id: 2,
    title: "Letsellify Logistics",
    category: "Professional project",

    description:
      "A digital logistics platform supporting small and medium-sized businesses.",

    problem:
      "Small businesses need more accessible digital tools to support their logistics operations.",

    solution:
      "A web-based logistics platform designed to simplify access to logistics services.",

    image: Letsellify,

    stack: ["React", "JavaScript", "Tailwind CSS", "Zustand"],

    liveDemo: "https://logistics.letsellify.com/",
  },
];
