
import React, { useRef, useEffect, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";

import NavbarComponent from "./components/NavbarComponent";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    try {
      const { initGSAP } = require("./animations/gsap");
      initGSAP();
    } catch (e) {
      console.log("GSAP initialization skipped");
    }
  }, []);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavigation = (id) => {
    switch (id) {
      case "home":
        scrollToRef(heroRef);
        break;
      case "about":
        scrollToRef(aboutRef);
        break;
      case "skills":
        scrollToRef(skillsRef);
        break;
      case "projects":
        scrollToRef(projectsRef);
        break;
      case "contact":
        scrollToRef(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Global Animated Background */}
      <AnimatedBackground />

      {/* Portfolio Content */}
      <div className="relative z-10">

        <NavbarComponent
          scrollToSection={handleNavigation}
          setShowResume={() => setShowResume(true)}
        />

        <div ref={heroRef}>
          <HeroSection
            onArrowClick={() => scrollToRef(aboutRef)}
          />
        </div>

        <div ref={aboutRef}>
          <About
            onUpClick={() => scrollToRef(heroRef)}
            onDownClick={() => scrollToRef(skillsRef)}
          />
        </div>

        <div ref={skillsRef}>
          <Skills
            onUpClick={() => scrollToRef(aboutRef)}
            onDownClick={() => scrollToRef(projectsRef)}
          />
        </div>

        <div ref={projectsRef}>
          <Projects
            onUpClick={() => scrollToRef(skillsRef)}
            onDownClick={() => scrollToRef(contactRef)}
          />
        </div>

        <div ref={contactRef}>
          <Contact
            onUpClick={() => scrollToRef(projectsRef)}
            onDownClick={() => scrollToRef(heroRef)}
            setShowResume={() => setShowResume(true)}
          />
        </div>

        <Footer />

      </div>
    </div>
  );
};

export default App;
