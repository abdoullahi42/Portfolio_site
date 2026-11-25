import setup from "../assets/images/workspace.jpg";

function About() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Workspace image */}
        <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center">
          <img
            src={setup}
            alt="Developer workspace"
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-sm border border-gray-100 max-w-[460px]"
          />
        </div>

        {/* About content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="space-y-5 text-gray-700">
            <p className="text-lg leading-relaxed">
              I am a front-end developer focused on building reliable,
              accessible and user-friendly digital products that solve
              real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              My experience includes developing business applications, corporate
              websites and multilingual platforms using{" "}
              <span className="text-blue-600 font-medium">
                React, Next.js and TypeScript.
              </span>
            </p>

            <p className="text-lg leading-relaxed">
              I enjoy translating business requirements into functional
              interfaces, integrating APIs and collaborating with teams to
              deliver maintainable software.
            </p>

            <p className="text-lg leading-relaxed">
              I value continuous learning, accountability and thoughtful
              engineering. My goal is to build products that create meaningful
              value for both businesses and their users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
