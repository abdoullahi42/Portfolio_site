import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Portfolio
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Selected Projects
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of personal and professional projects demonstrating my
            approach to solving real-world problems through software.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
