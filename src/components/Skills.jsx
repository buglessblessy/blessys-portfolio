import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { 
  Code2, Terminal, Cpu, Layout, 
  Database, ChevronUp, ChevronDown, 
  Smartphone, Github, GitBranch 
} from 'lucide-react';

const Skills = ({ onUpClick, onDownClick }) => {
  const skillData = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "SASS", level: 85 },
    { name: "Redux", level: 80 },
    { name: "React Native", level: 80 },
    { name: "Framer Motion", level: 85 },
    { name: "Bootstrap", level: 85 },
    { name: "REST API", level: 85 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "SQL", level: 80 },
    { name: "Vite", level: 85 }
  ];

  const getIcon = (name) => {
    const iconProps = { size: 16, strokeWidth: 1.5 };
    switch (name) {
      case "React": case "React Native": return <Smartphone {...iconProps} />;
      case "JavaScript": case "TypeScript": return <Code2 {...iconProps} />;
      case "HTML5": case "CSS3": case "Tailwind": return <Layout {...iconProps} />;
      case "SQL": case "REST API": return <Database {...iconProps} />;
      case "Git": return <GitBranch {...iconProps} />;
      case "GitHub": return <Github {...iconProps} />;
      case "Vite": return <Terminal {...iconProps} />;
      default: return <Cpu {...iconProps} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };

  return (
    <section 
      id="skills" 
      className="bg-[#050505] h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation Up - Re-centered and adjusted for clearance */}
      <motion.button 
        onClick={onUpClick} 
        className="absolute top-20 left-1/2 -translate-x-1/2 z-50 p-2 opacity-20 hover:opacity-100 transition-opacity"
      >
        <ChevronUp size={32} className="text-white" />
      </motion.button>

      {/* Content Container with pt-20 to clear navigation */}
      <Container className="relative z-10 pt-20 pb-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-[0.3em] italic"
          >
            ARSENAL<span className="text-pink-500">.</span>
          </motion.h2>
          <p className="text-[9px] text-white/30 tracking-[0.5em] uppercase mt-2">Technical Proficiency</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto px-4 justify-items-center"
        >
          {skillData.map((skill, i) => (
            <motion.div 
              key={skill.name}
              variants={itemVariants}
              className="group w-full flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-pink-500/50 px-4 py-3 rounded-full backdrop-blur-2xl transition-all duration-300 cursor-default shadow-2xl w-full justify-center max-w-[200px]"
              >
                <div className="text-white/40 group-hover:text-pink-400 transition-colors shrink-0">
                  {getIcon(skill.name)}
                </div>

                <span className="text-white font-medium text-[10px] md:text-[11px] uppercase tracking-widest whitespace-nowrap">
                  {skill.name}
                </span>

                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "auto", opacity: 1 }}
                  className="overflow-hidden flex items-center border-l border-white/10 ml-1 pl-2 shrink-0"
                >
                  <span className="text-pink-500 font-black text-[9px] font-mono">
                    {skill.level}%
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Navigation Down */}
      <motion.button 
        onClick={onDownClick} 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 p-2 opacity-20 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.button>
    </section>
  );
};

export default Skills;