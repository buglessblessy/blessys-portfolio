import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { ChevronDown } from "lucide-react";
import profileImg from "../assets/profile.png";

const HeroSection = ({ onArrowClick }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building Scalable SPAs with React.js";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 120); 
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="bg-mesh-dark h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 blur-[130px] rounded-full" 
      />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -80, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-50 transition duration-[2000ms]" />
              
              <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <motion.img
                  src={profileImg}
                  alt="Blessy A"
                  className="w-[300px] h-[400px] md:w-[420px] md:h-[580px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-7/12 text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest uppercase">
              Immediate Joiner
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              READY TO <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                CONTRIBUTE.
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-mono text-slate-400 h-8">
              {typedText}<span className="animate-blink text-indigo-500">|</span>
            </p>

            <div className="space-y-4 pt-4">
               <p className="text-slate-300 text-lg leading-relaxed">
                I’m <span className="text-white font-bold">Blessy A</span>, a dedicated React developer. 
                I specialize in building interactive web applications and am ready to join your team.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* CLICKABLE DOWN ARROW (SLOW BOUNCE) */}
      <motion.button 
        onClick={onArrowClick} // Triggers the move down
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ 
          opacity: { delay: 3, duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-4"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[9px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">Discover</span>
           <ChevronDown size={40} className="text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;