import { useState } from "react";
import { projects } from "../data/projects";

import type { ProjectCategory } from "../types/project.types";
import ProjectCard from "./ProjectCard";


type ProjectFilter = "All" | ProjectCategory;

interface FilterTab {
  label: string;
  value: ProjectFilter;
}

const filterTabs: FilterTab[] = [
  {
    label: "All Projects",
    value: "All",
  },
  {
    label: "Client Projects",
    value: "Client project",
  },
  {
    label: "Professional Projects",
    value: "Professional project",
  },
  {
    label: "Personal Projects",
    value: "Personal project",
  },
];

const Project = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  // Filter projects based on the selected category
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="px-5 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600">
            A selection of real-world solutions I have
            designed and developed.
          </p>
        </div>

        {/* Project filter buttons */}
        <div
          role="group"
          aria-label="Filter projects"
          className="mb-12 flex flex-wrap items-center
                     justify-center gap-3"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              aria-pressed={activeFilter === tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`cursor-pointer rounded-full
                border px-5 py-2.5 text-sm font-medium
                transition-colors duration-200
                ${
                  activeFilter === tab.value
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-900 hover:text-gray-900"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filtered project cards */}
        <div className="space-y-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            No projects available in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Project;