import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-gray-200 rounded-2xl p-5 md:p-8">
      {/* Project image */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Project content */}
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Case study */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Problem</h4>

            <p className="text-sm leading-relaxed text-gray-600">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>

            <p className="text-sm leading-relaxed text-gray-600">
              {project.solution}
            </p>
          </div>

          {project.contribution && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                My contribution
              </h4>

              <p className="text-sm leading-relaxed text-gray-600">
                {project.contribution}
              </p>
            </div>
          )}
        </div>

        {/* Technology stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
            >
              <FaGithub />
              Source code
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <FiExternalLink />
              Live website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
