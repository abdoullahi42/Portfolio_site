import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
