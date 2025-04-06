/* eslint-disable react/no-unescaped-entities */
import setup from "../assets/images/workspace.jpg";

function About() {
  return (
    <section id="about" className="w-[90%] mx-auto px-[10px] md:px-[22px] md:pl-[16px]">
      <div className="flex flex-col gap-8 mb-12 md:flex-row md:gap-12 md:mb-14 lg:gap-20 lg:mb-40 lg:py-3">
        <div className="text-center lg:flex lg:flex-1">
          <img 
            src={setup} 
            alt="workspace" 
            className="rounded-lg min-w-[80%] max-w-full h-auto md:w-[400px] lg:w-[460px] lg:min-w-0 lg:max-w-none"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-blue-500 text-2xl mb-4">About me</h3>
          <p className="leading-relaxed lg:text-lg lg:leading-loose">
            I'm a front-end developer who thrives on crafting user interfaces
            that are both beautiful and intuitive, ensuring a seamless user
            experience across all devices.I bring more than just code to the
            table. <br /><br />My tech stack lies in both{" "}
            <span className="text-blue-500">web</span> and
            <span className="text-blue-500"> mobile</span> technologies (Html, CSS,
            tailwind, Javascript, React and React Native). Together, we will
            overcome challenges, fuel growth, boost revenue, and create a
            lasting memories for clients
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;