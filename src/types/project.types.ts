export type ProjectCategory =
  | "Personal project"
  | "Client project"
  | "Professional project"
  | "Open-source project";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  contribution?: string;
  image: string;
  stack: string[];
  githubLink?: string;
  liveDemo?: string;
}
