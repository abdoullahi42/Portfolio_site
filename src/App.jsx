import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import Home from "./components/home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
