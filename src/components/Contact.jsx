import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Mail, Download, ChevronUp, Github, Linkedin, Phone } from 'lucide-react';

const Contact = ({ onUpClick }) => {
  const email = "blessya98@gmail.com";
  const phone = "8610074014";

  return (
    <section id="contact" className="bg-[#050505] h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* UP BUTTON */}
      <motion.button 
        onClick={onUpClick} 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-2 z-[100]"
      >
        <div className="flex flex-col items-center gap-1">
           <ChevronUp size={28} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
           <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Projects</span>
        </div>
      </motion.button>

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="relative z-20 max-w-4xl pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] text-center mx-auto relative overflow-hidden shadow-2xl"
        >
          <span className="text-emerald-400 font-black tracking-[0.5em] text-[9px] uppercase mb-3 block">
            Open for Opportunities
          </span>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-2 tracking-tighter italic">
            BLESSY A<span className="text-emerald-500">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8 tracking-tight">
            Let's build something <span className="text-white">legendary.</span>
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <motion.a 
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] no-underline hover:bg-emerald-400 transition-all"
            >
              <Mail size={16} /> Send Mail
            </motion.a>

            <motion.a
              href="/Blessys-React-Resume.pdf" 
              download="Blessys-React-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all no-underline"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>

          {/* Social & Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-5">
              <a href="https://github.com/buglessblessy" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:scale-125">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/blessy-a-a9411b305/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-all transform hover:scale-125">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

            <div className="flex flex-col md:flex-row items-center gap-5 text-slate-400 font-mono text-xs">
              <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-emerald-400 no-underline transition-colors">
                <Mail size={14} /> <span>{email}</span>
              </a>
              <a href={`tel:+91${phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 no-underline transition-colors">
                <Phone size={14} /> <span>+91 {phone}</span>
              </a>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-slate-600 text-[9px] font-black tracking-[0.4em] mt-6 opacity-40 uppercase">
          © 2026 Crafted with Passion by Blessy A
        </p>
      </Container>
    </section>
  );
};

export default Contact;