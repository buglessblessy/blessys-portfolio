import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { ExternalLink, Rocket, ChevronUp, ChevronDown, Github } from 'lucide-react';

const Projects = ({ onUpClick, onDownClick }) => {
  const projects = [
    {
      title: "AI Chat Stream",
      desc: "High-performance chat interface with real-time streaming via Gemini API.",
      tech: ["React", "Gemini", "Framer"],
      url: "https://ai-chat-stream.netlify.app/",
      github: "https://github.com/buglessblessy" 
    },
    {
      title: "AI Resume Builder",
      desc: "AI content optimization platform with real-time PDF preview generation.",
      tech: ["React 19", "TS", "Tailwind"],
      url: "https://blessys-ai-resume-builder.netlify.app/",
      github: "https://github.com/buglessblessy"
    },
    {
      title: "Movie Search Portal",
      desc: "Media discovery hub using OMDb API with optimized search debouncing.",
      tech: ["React", "Axios", "Bootstrap"],
      url: "https://blessys-movie-search-portal.netlify.app/",
      github: "https://github.com/buglessblessy"
    },
    {
      title: "GitHub Finder",
      desc: "Tool to fetch GitHub data with error handling and skeleton loaders.",
      tech: ["React", "GitHub API", "Tailwind"],
      url: "https://blessys-github-finder.netlify.app/",
      github: "https://github.com/buglessblessy"
    },
    {
      title: "The Guessing Game",
      desc: "Interactive logic game focused on JavaScript DOM and state logic.",
      tech: ["JS (ES6+)", "HTML5", "CSS3"],
      url: "https://blessys-guess-game.netlify.app/",
      github: "https://github.com/buglessblessy"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="projects" className="bg-[#050505] h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Navigation Up - Adjusted to clear navbar space */}
      <motion.button 
        onClick={onUpClick} 
        className="absolute top-20 left-1/2 -translate-x-1/2 z-30 opacity-20 hover:opacity-100 transition-opacity"
      >
        <ChevronUp size={24} className="text-white" />
      </motion.button>

      <Container className="relative z-20 pt-16">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-[0.2em] italic"
          >
            WORKS<span className="text-indigo-500">.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto px-4"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }} 
              className={`bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-4 md:p-5 hover:border-indigo-500/50 backdrop-blur-xl transition-all group flex flex-col justify-between min-h-[160px] md:min-h-[190px] ${
                i >= 3 ? 'md:translate-x-1/2' : ''
              }`}
            >
              <div className="relative z-10">
                <Rocket size={16} className="text-indigo-500 mb-2 opacity-40 group-hover:opacity-100 transition-all" />
                <h3 className="text-md md:text-lg font-black text-white mb-1 tracking-tight leading-none uppercase">{p.title}</h3>
                <p className="text-slate-400 text-[9px] md:text-[10px] mb-3 leading-snug line-clamp-2">{p.desc}</p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-white/5 text-indigo-300 rounded-md text-[7px] font-bold uppercase border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-white font-black text-[8px] tracking-widest no-underline hover:text-indigo-400 transition uppercase"
                >
                  Launch <ExternalLink size={12} />
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Github size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Navigation Down */}
      <motion.button 
        onClick={onDownClick} 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-20 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={24} className="text-white" />
      </motion.button>
    </section>
  );
};

export default Projects;