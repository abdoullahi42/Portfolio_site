/* eslint-disable react/no-unescaped-entities */
import setup from "../assets/images/workspace.jpg";

function About() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">  {/* Changed to items-center */}
        <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center">  {/* Added flex justify-center */}
          <img 
            src={setup} 
            alt="Workspace" 
            className="w-full h-auto lg:h-3/4 rounded-xl shadow-sm border border-gray-100 max-w-[460px]"  // Added max-w
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="space-y-5 text-gray-700">
            <p className="text-lg leading-relaxed">
              I'm a passionate front-end developer dedicated to crafting beautiful, 
              intuitive interfaces that deliver seamless user experiences. 
            </p>
            
            <p className="text-lg leading-relaxed">
              Specializing in both <span className="text-blue-600 font-medium">web development</span> and 
              <span className="text-blue-600 font-medium"> mobile development</span> (React Native, Expo), 
              I'm committed to building solutions that are as functional as they 
              are visually appealing.
            </p>
            
            <p className="text-lg leading-relaxed">
              I thrive in teams that help me grow - collaborating with helpful 
              developers who share knowledge and push me to improve while maintaining strong personal accountability for my work. 
              
            </p>
            
            <p className="text-lg leading-relaxed">
              My ultimate satisfaction comes from seeing the impact of my work 
              whether it's helping a business grow or making a client satisfied. These outcome define my  
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;