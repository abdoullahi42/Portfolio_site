import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import bakery from "../assets/images/bakerySite.png";

const projects = [
  {
    id: 1,
    title: "bakeWorld",
    description: "A site where clients can view and order available baked goods at their convenience",
    githubLink: "https://github.com/abdoullahi42/stunning-cakes",
    image: bakery,
    liveDemo: "https://abdoullahi42.github.io/stunning-cakes/",
    stack: "Html, CSS, JavaScript"
  },
  // Add more projects here as needed
  // {
  //   id: 2,
  //   title: "Project 2",
  //   description: "Description of project 2",
  //   githubLink: "#",
  //   image: project2Image,
  //   liveDemo: "#",
  //   stack: "React, Tailwind"
  // }
];

function Project() {
  return (
    <section id="projects" className="w-[95%] mx-auto px-3">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="flex flex-col gap-5 md:flex-row md:gap-12 md:px-8 lg:gap-24 mb-12"
        >
          <div className="flex flex-col text-center md:flex-1">
            <div className="project-img text-center">
              <img 
                src={project.image} 
                className="rounded-sm min-w-[70%] max-w-[80%] md:min-w-[85%] md:max-w-[90%] lg:w-[580px] lg:min-w-0 lg:max-w-none h-auto mb-6 md:mb-3 mx-auto" 
                alt={project.title}
              />
            </div>
          </div>
          <div className="text-center md:text-left md:flex-1">
            <h5 className="text-blue-500 text-2xl mb-3 lg:text-3xl lg:mb-6">
              {project.title}
            </h5>
            <p className="text-lg mb-3 lg:text-xl lg:mb-6">
              {project.description}
            </p>
            <p className="text-lg mb-3 lg:text-xl lg:mb-6">
              <span className="font-semibold">Tech stack: </span>
              <span className="text-blue-500">{project.stack}</span>
            </p>
            <div className="flex gap-8 justify-center mb-8 md:justify-start">
              <a 
                href={project.githubLink} 
                className="text-black hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-1.5 mt-1 text-black hover:text-blue-500"
              >
                <FiExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;