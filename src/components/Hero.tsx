import { FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiTypescript } from "react-icons/si";

import type { IconType } from "react-icons";

import mypic from "../assets/images/1673815231592.jpeg";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: Technology[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-[#e44d26]",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#00acc1]",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178c6]",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-[#61dbfb]",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="w-[90%] mx-auto px-[10px] md:px-[22px] md:pl-[16px] lg:px-[40px] lg:pl-[24px] pt-6"
    >
      <div className="flex flex-col gap-[42px] mt-9 md:mt-8 md:my-6 lg:my-[90px] lg:mb-8 lg:gap-[100px] md:flex-row-reverse md:gap-14">
        <div className="text-center md:text-left">
          <img
            src={mypic}
            className="rounded-full w-full min-w-[50%] max-w-[80%] md:min-w-0 md:max-w-none md:w-[340px] lg:w-[380px] h-auto border border-gray-500 mx-auto md:mx-0"
            alt="Abdoullahi Salihou"
          />
        </div>

        <div className="text-center md:text-left flex flex-col">
          <h1 className="text-[36px] leading-[1.2] mb-6 tracking-[-1.5px] md:text-[56.5px] lg:pt-3 font-semibold">
            Front-end <span className="text-blue-500">React</span> Developer
          </h1>

          <p className="mb-6 text-[18px] leading-[1.5] md:text-[20px]">
            Hello, I&apos;m Abdoullahi Salihou. A delighted Front-end Developer
            based in Abuja, Nigeria.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <a
              href="https://www.linkedin.com/in/abdoullahi-salihou-128329207/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="w-[30px] h-[30px] text-blue-500 md:w-[40px] md:h-[40px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col items-center gap-5 mb-8 md:flex-row md:items-start md:gap-9 md:mb-12 lg:mb-[62px] lg:py-3 lg:px-[15px]">
        <div className="text-center md:text-left">
          <h2 className="text-[30px] border-b border-[rgba(45,46,50,0.5)] pb-1 md:text-[36px] md:border-b-0 md:border-r-2 md:border-[rgba(45,46,50,0.5)] md:pr-2 font-semibold">
            Tech Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mt-1">
          {technologies.map(({ name, icon: Icon, color }) => (
            <Icon
              key={name}
              title={name}
              aria-label={name}
              className={`w-[30px] h-[30px] md:w-[40px] md:h-[40px] ${color}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
