import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data/Modal Imports
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [showResume, setShowResume] = useState(false);

  // Refs for all sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll helper
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="no-manual-scroll bg-slate-950">
      {/* 1. Navbar */}
      <NavbarComponent 
        scrollToSection={(id) => {
          switch(id) {
            case 'home': scrollToRef(heroRef); break;
            case 'about': scrollToRef(aboutRef); break;
            case 'skills': scrollToRef(skillsRef); break;
            case 'projects': scrollToRef(projectsRef); break;
            case 'contact': scrollToRef(contactRef); break;
            default: break;
          }
        }}
        setShowResume={() => setShowResume(true)}
      />

      {/* 2. Hero Section */}
      <div ref={heroRef}>
        <HeroSection 
          onArrowClick={() => scrollToRef(aboutRef)}
        />
      </div>

      {/* 3. About Section */}
      <div ref={aboutRef}>
        <About 
          onUpClick={() => scrollToRef(heroRef)}
          onDownClick={() => scrollToRef(skillsRef)}
        />
      </div>

      {/* 4. Skills Section */}
      <div ref={skillsRef}>
<Skills 
  onUpClick={() => scrollToRef(aboutRef)} 
  onDownClick={() => scrollToRef(projectsRef)}
/>
      </div>

      {/* 5. Projects Section */}
      <div ref={projectsRef}>
        <Projects 
          onUpClick={() => scrollToRef(skillsRef)}
          onDownClick={() => scrollToRef(contactRef)}
        />
      </div>

      {/* 6. Contact Section */}
      <div ref={contactRef}>
        <Contact 
          onUpClick={() => scrollToRef(projectsRef)}
          onDownClick={() => scrollToRef(heroRef)}
          setShowResume={() => setShowResume(true)}
        />
      </div>

      {/* 7. Footer */}
      <Footer />

      {/* --- RESUME MODAL --- */}
      <AnimatePresence>
        {showResume && (
          <Modal 
            show={showResume} 
            onHide={() => setShowResume(false)} 
            centered 
            contentClassName="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden"
          >
            <div className="p-12 text-center">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                Access Portfolio
              </h3>
              <p className="text-slate-400 mb-8">
                View the detailed professional credentials of Blessy A.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="link" 
                  className="flex-1 text-slate-500 font-bold no-underline"
                  onClick={() => setShowResume(false)}
                >
                  Close
                </Button>
                <Button 
                  className="flex-1 bg-indigo-600 border-none py-3 rounded-xl font-black tracking-widest text-[10px] hover:bg-emerald-500 transition-colors"
                >
                  Download PDF
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;