import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Code2, Terminal, Cpu, Globe, Layout, Database, ChevronUp, ChevronDown, Layers, Smartphone } from 'lucide-react';
import { skills } from '../data/portfolioData.js';

const Skills = ({ onUpClick, onDownClick }) => {
  const getIcon = (index) => {
    const icons = [
      <Layout size={24} />, <Code2 size={24} />, <Terminal size={24} />, 
      <Globe size={24} />, <Cpu size={24} />, <Database size={24} />,
      <Layers size={24} />, <Smartphone size={24} />
    ];
    return icons[index % icons.length];
  };

  return (
    <section id="skills" className="bg-mesh-dark min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden">
      
      {/* RESTORED UP BUTTON */}
      <motion.button 
        onClick={onUpClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-50 outline-none"
      >
        <div className="flex flex-col items-center gap-1">
           <ChevronUp size={40} className="text-white/20 group-hover:text-pink-500 transition-colors" />
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-pink-500 transition-colors uppercase">About</span>
        </div>
      </motion.button>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <Container className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-pink-500 font-black tracking-[0.5em] text-[10px] uppercase">Technical Stack</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mt-4 italic tracking-tighter uppercase">
            ARSENAL<span className="text-pink-500">.</span>
          </h2>
        </motion.div>

        {/* Centered Grid with updated responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full justify-center">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12, 
                delay: i * 0.15 
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                transition: { duration: 0.2 } 
              }}
              className="group bg-white/5 border border-white/10 p-6 rounded-[2.5rem] text-center backdrop-blur-xl relative overflow-hidden flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="text-white/30 group-hover:text-pink-400 transition-colors duration-500 mb-4">
                  {getIcon(i)}
                </div>
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{skill.name}</h4>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden max-w-[100px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 + (i * 0.1) }} 
                    className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* DOWN ARROW */}
      <motion.button 
        onClick={onDownClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ 
          opacity: { duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-50 outline-none"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Projects</span>
           <ChevronDown size={40} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.button>

    </section>
  );
};

export default Skills;