import type { Project } from "../types/project.types";

// Client projects
import HSGroup from "../assets/images/hs.jpg";
import SahelClimateAction from "../assets/images/sahelclimate.jpg";
import NSGDF from "../assets/images/nigerSouth.jpg";

// Professional and personal projects
import Renewed from "../assets/images/Renewed-You.png";
import Letsellify from "../assets/images/letsellify.png";

export const projects: Project[] = [
  {
    id: 3,
    title: "HS Group Management System",
    category: "Client project",

    description:
      "An internal enterprise management system designed to centralize financial operations and support informed business decisions.",

    problem:
      "The company needed better visibility into project-level financial performance, including revenue, expenses, payments, and profit margins.",

    solution:
      "A centralized management platform that tracks project cash inflows and outflows, expenses, client payment orders, and profit margins to support timely financial decisions.",

    contribution:
      "Led a team of two engineers to deliver the management system, coordinating development and bringing the solution into operation.",

    image: HSGroup,

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
    ],
  },

  {
    id: 4,
    title: "Sahel Climate Action",
    category: "Client project",

    description:
      "A multilingual website for a nonprofit organization addressing climate change, poverty, and community development in the Sahel region.",

    problem:
      "The organization needed greater digital visibility to showcase its impact, attract funding, and establish relationships with potential donors and partners.",

    solution:
      "A responsive, multilingual website showcasing the organization's programmes, past projects, and impact, while providing accessible donation and partnership contact channels.",

    contribution:
      "Designed, developed, and deployed the website end-to-end, including support for seven languages and contact form integration.",

    image: SahelClimateAction,

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Formspree",
    ],

    liveDemo: "https://www.sahelclimateaction.org/",
  },

  {
    id: 5,
    title: "Niger South Graduate Development Forum",
    category: "Client project",

    description:
      "A professional website supporting an organization dedicated to graduate employment, enterprise development, and career progression.",

    problem:
      "Graduates need better access to structured programmes and institutional support to transition from academic achievement to meaningful professional opportunities.",

    solution:
      "A responsive digital platform that communicates the organization's mission, presents its programmes, and provides an accessible channel for graduates and potential stakeholders to connect.",

    image: NSGDF,

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Formspree",
    ],

    liveDemo: "https://www.nsgdf.org.ng/",
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

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
    ],

    liveDemo: "https://logistics.letsellify.com/",
  },

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

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
    ],

    githubLink:
      "https://github.com/abdoullahi42/Renewed-You",

    liveDemo: "https://renewed-you.vercel.app/",
  },
];