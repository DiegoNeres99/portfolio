import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

const sectionIds = ["home", "sobre", "servicos", "skills", "projetos", "formacao", "contato"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-bg text-textPrimary">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
