import "../styles/About.css";
import setup from "../assets/images/workspace.jpg"
function About() {
  return (
    <section id="about">
      <div className="about-me-container">
        <div className="about-me-page">
          <div className="workspace-img">
            <img src={setup} alt="workspace" />
          </div>
          <div className="about-me-title">
            <h3>About me</h3>
            <p className="about-me-description">
              I'm a front-end developer who thrives on crafting user interfaces
              that are both beautiful and intuitive, ensuring a seamless user
              experience across all devices.I bring more than just code to the
              table. <br></br> <br></br>My tech stack lies in both{" "}
              <span className="web">web</span> and
              <span className="mobile"> mobile</span> technologies (Html, CSS,
              tailwind, Javascript, React and React Native). Together, we will
              overcome challenges, fuel growth, boost revenue, and create a
              lasting memories for clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
