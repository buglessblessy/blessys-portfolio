import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Heart, ChevronDown, ChevronUp, ArrowLeft, Briefcase, Star, BookOpen, CheckCircle2 } from 'lucide-react';

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
      title: "React Trainee – Sutherland",
      date: "July 2024 – Aug 2025",
      icon: <Star size={20} className="text-emerald-400" />,
      details: [
        "Trained in modern frontend development using React.js and component-based architecture.",
        "Worked on building responsive UI components using HTML, CSS, and JavaScript.",
        "Learned best practices in state management, reusable components, and clean code structure.",
        "Collaborated with mentors and teams to understand real-world product development workflows."
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
    <section id="about" className="bg-[#050505] h-screen flex items-center justify-center relative overflow-hidden px-6">
      
      {/* UP BUTTON - Leads back to Home */}
      <motion.button 
        onClick={onUpClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group z-50 p-2"
      >
        <div className="flex flex-col items-center gap-1">
           <ChevronUp size={32} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
           <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-indigo-400 transition-colors uppercase">Home</span>
        </div>
      </motion.button>

      <Container className="max-w-6xl pt-10">
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
                <Heart size={80} fill="#6366f1" className="opacity-70 group-hover:opacity-100 transition-all" />
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
                <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase italic">My <span className="text-indigo-500">Journey.</span></h2>
                {Object.keys(experienceData).map((key) => (
                  <motion.div
                    key={key}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                    onClick={() => setSelectedRole(key)}
                    className={`cursor-pointer p-4 rounded-2xl border-l-4 transition-all flex items-center gap-4 ${
                      selectedRole === key ? 'bg-white/10 border-indigo-500 shadow-lg' : 'bg-white/5 border-white/10'
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
              <div className="relative border-l border-white/5 pl-12 min-h-[300px] flex items-center">
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
                        className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 hover:text-white transition-colors border-none bg-transparent cursor-pointer p-0"
                      >
                        <ArrowLeft size={14} /> Back to list
                      </button>
                      <h3 className="text-white text-2xl font-black mb-1 uppercase tracking-tight">{experienceData[selectedRole].title}</h3>
                      <p className="text-indigo-400/60 text-[10px] font-bold mb-6 uppercase tracking-widest">{experienceData[selectedRole].date}</p>
                      <div className="space-y-3">
                        {experienceData[selectedRole].details.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-3 items-start"
                          >
                            <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                            <p className="text-slate-400 text-[13px] leading-relaxed">{point}</p>
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

      {/* DOWN BUTTON - Leads to Skills */}
      <motion.button 
        onClick={onDownClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group z-50 p-2"
      >
        <div className="flex flex-col items-center gap-1">
           <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Skills</span>
           <ChevronDown size={32} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.button>

    </section>
  );
};

export default About;