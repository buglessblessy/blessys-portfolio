import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { ExternalLink, Rocket, ChevronUp, ChevronDown } from 'lucide-react';
import { projects } from '../data/portfolioData.js';

const Projects = ({ onUpClick, onDownClick }) => {
  return (
    <section id="projects" className="bg-mesh-dark min-h-screen flex flex-col items-center justify-center py-24 relative overflow-hidden">

      {/* UP ARROW */}
      <motion.button 
        onClick={onUpClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ opacity: { delay: 1, duration: 1 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }}}
        className="absolute top-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-[100] outline-none"
      >
        <div className="flex flex-col items-center gap-1">
           <ChevronUp size={40} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-indigo-400 transition-colors uppercase">Skills</span>
        </div>
      </motion.button>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-black tracking-[0.5em] text-[10px] uppercase">Case Studies</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mt-4 italic tracking-tighter">
            WORKS<span className="text-indigo-500">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.2 }}
              whileHover={{ y: -15 }} 
              className="bg-white/5 border border-white/5 rounded-[3rem] p-10 hover:border-indigo-500/50 backdrop-blur-xl transition-all group relative overflow-visible select-text"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col">
                <Rocket className="text-indigo-500 mb-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" />

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight select-text">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed h-20 overflow-hidden select-text">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-indigo-300 rounded-lg text-[10px] font-black uppercase tracking-wider border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-white font-black text-[10px] tracking-[0.2em] no-underline hover:text-indigo-400 transition uppercase cursor-pointer"
                >
                  Launch Project <ExternalLink size={14} />
                </a>
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
        transition={{ opacity: { delay: 2 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-[100] outline-none"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Contact</span>
           <ChevronDown size={40} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.button>

    </section>
  );
};

export default Projects;