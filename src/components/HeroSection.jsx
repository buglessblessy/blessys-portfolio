
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { ChevronDown, Terminal, Cpu } from "lucide-react";
import profileImg from "../assets/profile.png";

const HeroSection = ({ onArrowClick }) => {
  const texts = [
    "Software Developer",
    "Frontend Engineer",
    "MERN Stack Developer",
    "React.js & TypeScript Specialist",
    "Building Scalable Web Applications",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(currentText.slice(0, index + 1));
      index++;

      if (index === currentText.length) {
        clearInterval(typing);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setTypedText("");
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="h-[100dvh] w-full flex items-center justify-center relative overflow-hidden px-6"
    >
      <Container className="relative z-10 max-w-6xl pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          >
            <div className="relative group">

              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-[3rem] blur opacity-30 group-hover:opacity-70 transition duration-700 animate-pulse" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={profileImg}
                  alt="Blessy A"
                  className="w-[240px] h-[320px] md:w-[340px] md:h-[450px] object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-7/12 text-center lg:text-left space-y-4"
          >

            {/* STATUS */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest uppercase"
            >
              Immediate Joiner
            </motion.div>

            {/* TITLE */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
            >
              READY TO <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                CONTRIBUTE.
              </span>
            </motion.h1>

            {/* TYPING TEXT */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-mono text-slate-400 h-6"
            >
              {typedText}
              <span className="animate-blink text-indigo-500">|</span>
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl"
            >
              I'm{" "}
              <span className="text-white font-bold">Blessy A</span>, a
              Software Developer with{" "}
              <span className="text-white font-semibold">
                3+ years of experience
              </span>{" "}
              specializing in frontend engineering, responsive UI development,
              and scalable web architectures using React.js, TypeScript, and
              modern web tech.
            </motion.p>

            {/* FRONTEND CARD */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 pt-1 max-w-lg"
            >
              <div className="group flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-white/[0.02] to-transparent border border-indigo-500/20 backdrop-blur-md">

                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Terminal size={14} />
                  </div>

                  <div className="text-left">
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider block">
                      Frontend Architecture
                    </span>

                    <span className="text-slate-400 text-[9px]">
                      React.js • TypeScript • Tailwind CSS
                    </span>
                  </div>
                </div>

                <span className="text-[9px] font-mono text-indigo-400 opacity-60">
                  01
                </span>

              </div>

              {/* FULL STACK CARD */}
              <div className="group flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-white/[0.02] to-transparent border border-emerald-500/20 backdrop-blur-md">

                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Cpu size={14} />
                  </div>

                  <div className="text-left">
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider block">
                      Full-Stack Capability
                    </span>

                    <span className="text-slate-400 text-[9px]">
                      MERN Stack • REST APIs • MongoDB
                    </span>
                  </div>
                </div>

                <span className="text-[9px] font-mono text-emerald-400 opacity-60">
                  02
                </span>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </Container>

      {/* DOWN ARROW */}
      <motion.button
        onClick={onArrowClick}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-transparent border-none cursor-pointer group p-3 z-30"
      >
        <div className="flex flex-col items-center gap-1">

          <span className="text-[8px] font-black tracking-[0.4em] text-white/30 group-hover:text-emerald-400 transition-colors uppercase">
            Discover
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

export default HeroSection;
