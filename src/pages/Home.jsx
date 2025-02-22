import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Skill from "./Skill";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;
