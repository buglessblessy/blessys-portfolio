import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Mail, Download, ChevronUp, Github, Linkedin, Phone } from 'lucide-react';

const Contact = ({ onUpClick }) => {
  const email = "blessya98@gmail.com";
  const phone = "8610074014";

  return (
    <section id="contact" className="bg-mesh-dark min-h-screen flex flex-col items-center justify-center py-24 relative overflow-hidden">
      
      {/* UP ARROW - Back to Projects */}
      <motion.button 
        onClick={onUpClick} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4 z-[100] outline-none"
      >
        <div className="flex flex-col items-center gap-1">
           <ChevronUp size={40} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Projects</span>
        </div>
      </motion.button>

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[130px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <Container className="relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/5 border border-white/10 backdrop-blur-2xl p-12 md:p-20 rounded-[4rem] text-center mx-auto max-w-4xl relative overflow-hidden"
        >
          <motion.span className="text-emerald-400 font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
            Open for Opportunities
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter italic">
            BLESSY A<span className="text-emerald-500">.</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mb-10 tracking-tight">
            Let's build something <span className="text-white">legendary.</span>
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <motion.a 
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all no-underline hover:bg-emerald-400"
            >
              <Mail size={18} /> Send Mail
            </motion.a>

            <motion.a
              href="/Blessys-React-Resume.pdf" 
              download="Blessys-React-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all outline-none no-underline cursor-pointer"
            >
              <Download size={18} /> Resume
            </motion.a>
          </div>

          {/* Social & Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/blessy-a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-white transition-all transform hover:scale-125"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/blessy-a-a9411b305/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-[#0077b5] transition-all transform hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10 mx-4" />

            <div className="flex flex-col md:flex-row items-center gap-6 text-slate-400 font-mono text-sm">
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-emerald-400 no-underline transition-colors">
                <Mail size={16} /> <span>{email}</span>
              </a>
              
              <a href={`tel:+91${phone}`} className="flex items-center gap-2 hover:text-emerald-400 no-underline transition-colors group">
                <Phone size={16} className="group-hover:animate-pulse" /> 
                <span>+91 {phone}</span>
              </a>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mt-12 opacity-40">
          © 2026 Crafted with Passion by Blessy A
        </p>
      </Container>
    </section>
  );
};

export default Contact;