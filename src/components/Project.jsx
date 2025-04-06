import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import bakery from "../assets/images/bakerySite.png";

const projects = [
  {
    id: 1,
    title: "BakeWorld",
    description: "An e-commerce platform for a bakery where customers can browse and order delicious baked goods online.",
    githubLink: "https://github.com/abdoullahi42/stunning-cakes",
    image: bakery,
    liveDemo: "https://abdoullahi42.github.io/stunning-cakes/",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  // Add more projects as needed
];

function Project() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-28 bgwhite roundedxl shadow-md lg:shadow-none overflow-hidden"
            >
              <div className="md:w-11/12 p-4 md:p-6">
                <img 
                  src={project.image} 
                  className="w-full hfull objectcover rounded-lg lg:rounded-none"
                  alt={project.title}
                />
              </div>
              <div className="p-6 md:p-4 md:w-10/12 flex flex-col justify-between ">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <FaGithub className="text-gray-700" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;