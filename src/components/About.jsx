import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Heart, ChevronDown, ChevronUp, ArrowLeft, Briefcase, Star, BookOpen, CheckCircle2 } from 'lucide-react';

// Added onUpClick and onDownClick to match your Hero's pattern
const About = ({ onUpClick, onDownClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const experienceData = {
    current: {
      title: "Freelance React Developer",
      date: "Sep 2025 – Present",
      icon: <Briefcase size={20} className="text-indigo-400" />,
      details: [
        "Designing and developing high-performance React applications with a focus on scalable code.",
        "Building interactive SPAs with dynamic components and smooth Framer Motion animations.",
        "Translating complex UI/UX requirements into functional, pixel-perfect web interfaces.",
        "Implementing best practices in Redux state management and performance optimization."
      ]
    },
    sutherland: {
      title: "Sutherland (Amazon Service)",
      date: "July 2024 – Aug 2025",
      icon: <Star size={20} className="text-emerald-400" />,
      details: [
        "Delivered professional communication and technical support for Amazon global services.",
        "Mastered rapid problem-solving and conflict resolution in a high-pressure environment.",
        "Gained deep insights into customer-centric digital experiences and workflows.",
        "Collaborated with global teams to maintain strict quality and performance KPIs."
      ]
    },
    early: {
      title: "Freelance React Developer",
      date: "2020 – 2024",
      icon: <Briefcase size={20} className="text-pink-400" />,
      details: [
        "Four years of foundational experience building custom web solutions for diverse clients.",
        "Developed responsive layouts using HTML5, CSS3, and React Hooks architecture.",
        "Managed asynchronous data fetching and API integrations for complex dashboards.",
        "Created reusable component libraries to optimize development speed and consistency."
      ]
    },
    mca: {
      title: "MCA Graduate",
      date: "Class of 2020",
      icon: <BookOpen size={20} className="text-slate-400" />,
      details: [
        "Master of Computer Applications from Bharathiar University.",
        "Graduated with a strong academic standing of 8.1 CGPA.",
        "Specialized in Software Engineering and Modern Web Architectures.",
        "Focus on building robust, logic-driven applications during core project phases."
      ]
    }
  };

  return (
    <section id="about" className="bg-mesh-violet h-screen flex items-center justify-center relative overflow-hidden px-6">
      
      {/* UP BUTTON - Styled exactly like your Hero's logic but pointing UP */}
      <motion.button 
        onClick={onUpClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-50"
      >
        <div className="flex flex-col items-center gap-2">
           <ChevronUp size={40} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-indigo-400 transition-colors uppercase">Home</span>
        </div>
      </motion.button>

      <Container className="max-w-6xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div 
              key="gate"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, filter: "blur(40px)" }}
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Heart size={100} fill="#6366f1" className="opacity-70 group-hover:opacity-100 transition-all" />
              </motion.div>
              <p className="mt-6 text-white/20 font-black tracking-[0.5em] uppercase text-[10px]">Click to Explore My Story</p>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* LEFT SIDE: LIST */}
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">My <span className="text-indigo-500">Journey</span></h2>
                {Object.keys(experienceData).map((key) => (
                  <motion.div
                    key={key}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                    onClick={() => setSelectedRole(key)}
                    className={`cursor-pointer p-4 rounded-2xl border-l-4 transition-all flex items-center gap-4 ${
                      selectedRole === key ? 'bg-white/10 border-indigo-500' : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {experienceData[key].icon}
                    <div>
                      <h4 className="text-white text-sm font-bold mb-0">{experienceData[key].title}</h4>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">{experienceData[key].date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDE: DETAILS */}
              <div className="relative border-l border-white/5 pl-12 min-h-[350px] flex items-center">
                <AnimatePresence mode="wait">
                  {selectedRole ? (
                    <motion.div
                      key={selectedRole}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="w-full"
                    >
                      <button 
                        onClick={() => setSelectedRole(null)}
                        className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6 hover:text-white transition-colors border-none bg-transparent cursor-pointer p-0"
                      >
                        <ArrowLeft size={14} /> Back to list
                      </button>
                      <h3 className="text-white text-2xl font-black mb-1">{experienceData[selectedRole].title}</h3>
                      <p className="text-indigo-400/60 text-xs font-bold mb-8 uppercase tracking-widest">{experienceData[selectedRole].date}</p>
                      <div className="space-y-4">
                        {experienceData[selectedRole].details.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="flex gap-3 items-start"
                          >
                            <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
                            <p className="text-slate-400 text-sm leading-relaxed">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full">
                      <p className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">Select a role to view details</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* DOWN BUTTON - Synced with your HeroSection animation style */}
      <AnimatePresence>
        {isOpen && (
          <motion.button 
            onClick={onDownClick} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-50"
          >
            <div className="flex flex-col items-center gap-2">
               <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Skills</span>
               <ChevronDown size={40} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;