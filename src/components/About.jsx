
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import {
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Briefcase,
  Star,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const About = ({ onUpClick, onDownClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const experienceData = {
    current: {
      title: 'Junior Software Developer – Anur Cloud Technologies',
      date: 'Sep 2026 – Present',
      icon: <Briefcase size={20} className="text-indigo-400" />,
      details: [
        'Working as a Junior Software Developer, contributing to software development and application maintenance activities.',
        'Applying frontend development knowledge with React.js, JavaScript, TypeScript, HTML5, CSS3, and modern web technologies.',
        'Working with development teams to implement application enhancements, fixes, and feature updates.',
        'Using Git and GitHub for version control and collaborating within an Agile development environment.'
      ]
    },

    rr: {
      title: 'Frontend Developer – RR IT Solutions',
      date: 'Aug 2025 – Aug 2026',
      icon: <Briefcase size={20} className="text-indigo-400" />,
      details: [
        'Developed responsive and user-friendly web applications using React.js, TypeScript, HTML5, CSS3, and Tailwind CSS.',
        'Built reusable UI components and integrated REST APIs to deliver dynamic business solutions.',
        'Managed application state using Redux Toolkit and Context API with React Router for scalable architecture.'
      ]
    },

    sutherland: {
      title: 'Seller Support Associate – Sutherland',
      date: 'Jun 2024 – Aug 2025',
      icon: <Star size={20} className="text-amber-400" />,
      details: [
        'Provided email and chat-based support to Amazon sellers while meeting SLA and quality standards.',
        'Resolved account, payment, order, and policy-related issues collaboratively.'
      ]
    },

    freelance: {
      title: 'Freelance Frontend Developer',
      date: '2022 – 2024',
      icon: <BookOpen size={20} className="text-emerald-400" />,
      details: [
        'Developed responsive web applications and frontend interfaces for independent client projects.',
        'Built user interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.'
      ]
    },

    education: {
      title: 'Master of Computer Applications (MCA)',
      date: '2018 – 2020',
      icon: <BookOpen size={20} className="text-sky-400" />,
      details: [
        'Graduated from Bharathiar University with a CGPA of 8.1.',
        'Built a strong foundation in software engineering, databases, programming, and web technologies.'
      ]
    }
  };

  return (
    <section
      id="about"
      className="h-[100dvh] w-full flex items-center justify-center relative overflow-hidden px-6"
    >

      {/* UP BUTTON */}
      <motion.button
        onClick={onUpClick}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-6 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group z-50 p-2"
      >
        <div className="flex flex-col items-center gap-1">
          <ChevronUp
            size={28}
            className="text-white/20 group-hover:text-indigo-400 transition-colors"
          />

          <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-indigo-400 transition-colors uppercase">
            Home
          </span>
        </div>
      </motion.button>

      <Container className="max-w-6xl pt-10">

        <AnimatePresence mode="wait">

          {/* CLOSED STATE */}
          {!isOpen ? (
            <motion.div
              key="gate"
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                filter: 'blur(40px)'
              }}
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >

              <motion.div
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >
                <Heart
                  size={70}
                  fill="#6366f1"
                  className="opacity-70 group-hover:opacity-100 transition-all"
                />
              </motion.div>

              <p className="mt-6 text-white/30 font-black tracking-[0.5em] uppercase text-[10px]">
                Click to Explore My Story
              </p>

            </motion.div>
          ) : (

            /* OPEN STATE */
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-2 gap-8 items-center max-h-[80vh] overflow-y-auto pr-2"
            >

              {/* LEFT SIDE - EXPERIENCE LIST */}
              <div className="space-y-3">

                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">
                  My{' '}
                  <span className="text-indigo-500">
                    Journey.
                  </span>
                </h2>

                {Object.keys(experienceData).map((key) => (

                  <motion.div
                    key={key}
                    whileHover={{
                      x: 8,
                      backgroundColor: 'rgba(255,255,255,0.05)'
                    }}
                    onClick={() => setSelectedRole(key)}
                    className={`cursor-pointer p-3 rounded-xl border-l-4 transition-all flex items-center gap-3 ${
                      selectedRole === key
                        ? 'bg-white/10 border-indigo-500 shadow-lg'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >

                    {experienceData[key].icon}

                    <div>
                      <h4 className="text-white text-xs font-bold mb-0">
                        {experienceData[key].title}
                      </h4>

                      <p className="text-white/40 text-[9px] uppercase tracking-widest">
                        {experienceData[key].date}
                      </p>
                    </div>

                  </motion.div>

                ))}

              </div>

              {/* RIGHT SIDE - DETAILS */}
              <div className="relative border-l border-white/5 pl-8 min-h-[250px] flex items-center">

                <AnimatePresence mode="wait">

                  {selectedRole ? (

                    <motion.div
                      key={selectedRole}
                      initial={{
                        opacity: 0,
                        x: 20
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      exit={{
                        opacity: 0,
                        x: -20
                      }}
                      className="w-full"
                    >

                      <button
                        onClick={() => setSelectedRole(null)}
                        className="flex items-center gap-2 text-indigo-400 text-[9px] font-black uppercase tracking-widest mb-3 hover:text-white transition-colors border-none bg-transparent cursor-pointer p-0"
                      >
                        <ArrowLeft size={12} />
                        Back to list
                      </button>

                      <h3 className="text-white text-lg md:text-xl font-black mb-1 uppercase tracking-tight">
                        {experienceData[selectedRole].title}
                      </h3>

                      <p className="text-indigo-400/60 text-[9px] font-bold mb-4 uppercase tracking-widest">
                        {experienceData[selectedRole].date}
                      </p>

                      <div className="space-y-2">

                        {experienceData[selectedRole].details.map(
                          (point, i) => (
                            <div
                              key={i}
                              className="flex gap-2.5 items-start"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-emerald-500 mt-0.5 shrink-0"
                              />

                              <p className="text-slate-400 text-[11px] leading-relaxed">
                                {point}
                              </p>
                            </div>
                          )
                        )}

                      </div>

                    </motion.div>

                  ) : (

                    <div className="text-center w-full">
                      <p className="text-white/25 font-black uppercase tracking-[0.3em] text-[10px]">
                        Select a role to view details
                      </p>
                    </div>

                  )}

                </AnimatePresence>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </Container>

      {/* DOWN BUTTON */}
      <motion.button
        onClick={onDownClick}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group z-50 p-2"
      >

        <div className="flex flex-col items-center gap-1">

          <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">
            Skills
          </span>

          <ChevronDown
            size={28}
            className="text-white/20 group-hover:text-emerald-400 transition-colors"
          />

        </div>

      </motion.button>

    </section>
  );
};

export default About;
