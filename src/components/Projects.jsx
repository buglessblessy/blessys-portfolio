import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { ExternalLink, Rocket, ChevronUp, ChevronDown, Github } from 'lucide-react';

const Projects = ({ onUpClick, onDownClick }) => {
  const projects = [
    { title: "AI Chat Stream", desc: "High-performance chat interface with real-time streaming via Gemini API.", tech: ["React", "Gemini", "Framer"], url: "https://ai-chat-stream.netlify.app/", github: "https://github.com/buglessblessy" },
    { title: "AI Resume Builder", desc: "AI content optimization platform with real-time PDF preview generation.", tech: ["React 19", "TS", "Tailwind"], url: "https://blessys-ai-resume-builder.netlify.app/", github: "https://github.com/buglessblessy" },
    { title: "Movie Search Portal", desc: "Media discovery hub using OMDb API with optimized search debouncing.", tech: ["React", "Axios", "Bootstrap"], url: "https://blessys-movie-search-portal.netlify.app/", github: "https://github.com/buglessblessy" },
    { title: "GitHub Finder", desc: "Tool to fetch GitHub data with error handling and skeleton loaders.", tech: ["React", "GitHub API", "Tailwind"], url: "https://blessys-github-finder.netlify.app/", github: "https://github.com/buglessblessy" },
    { title: "The Guessing Game", desc: "Interactive logic game focused on JavaScript DOM and state logic.", tech: ["JS (ES6+)", "HTML5", "CSS3"], url: "https://blessys-guess-game.netlify.app/", github: "https://github.com/buglessblessy" }
  ];

  return (
    <section id="projects" className="bg-[#050505] h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* UP BUTTON */}
      <motion.button 
        onClick={onUpClick} 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-30 p-2 bg-transparent border-none cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-1">
          <ChevronUp size={28} className="text-white/20 group-hover:text-pink-400 transition-colors" />
          <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-pink-400 transition-colors uppercase">Skills</span>
        </div>
      </motion.button>

      <Container className="relative z-20 pt-12">
        <div className="text-center mb-6">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.2em] italic">
            WORKS<span className="text-indigo-500">.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }} 
              className={`bg-white/[0.02] border border-white/10 rounded-[1.2rem] p-3 md:p-4 hover:border-indigo-500/50 backdrop-blur-xl transition-all group flex flex-col justify-between min-h-[140px] ${i >= 3 ? 'md:translate-x-1/2' : ''}`}
            >
              <div>
                <Rocket size={14} className="text-indigo-500 mb-1.5 opacity-40 group-hover:opacity-100 transition-all" />
                <h3 className="text-sm md:text-md font-black text-white mb-1 tracking-tight uppercase">{p.title}</h3>
                <p className="text-slate-400 text-[9px] mb-2 leading-snug line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-white/5 text-indigo-300 rounded-md text-[7px] font-bold uppercase border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white font-black text-[8px] tracking-widest no-underline hover:text-indigo-400 uppercase">
                  Launch <ExternalLink size={10} />
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white"><Github size={12} /></a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* DOWN BUTTON */}
      <motion.button 
        onClick={onDownClick} 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 p-2 bg-transparent border-none cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Contact</span>
          <ChevronDown size={28} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.button>
    </section>
  );
};

export default Projects;