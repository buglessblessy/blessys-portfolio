import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import {
  Code2,
  Terminal,
  Cpu,
  Layout,
  Database,
  ChevronUp,
  ChevronDown,
  Smartphone,
  Github,
  GitBranch
} from 'lucide-react';

const Skills = ({ onUpClick, onDownClick }) => {

  const skillData = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind", level: 90 },

    // MERN Stack
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "MongoDB", level: 75 },

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
    const iconProps = {
      size: 14,
      strokeWidth: 1.5
    };

    switch (name) {
      case "React":
      case "React Native":
        return <Smartphone {...iconProps} />;

      case "JavaScript":
      case "TypeScript":
        return <Code2 {...iconProps} />;

      case "HTML5":
      case "CSS3":
      case "Tailwind":
        return <Layout {...iconProps} />;

      case "Node.js":
      case "Express.js":
        return <Terminal {...iconProps} />;

      case "MongoDB":
      case "SQL":
      case "REST API":
        return <Database {...iconProps} />;

      case "Git":
        return <GitBranch {...iconProps} />;

      case "GitHub":
        return <Github {...iconProps} />;

      case "Vite":
        return <Terminal {...iconProps} />;

      default:
        return <Cpu {...iconProps} />;
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      id="skills"
      className="
        h-[100dvh]
        w-full
        flex
        flex-col
        items-center
        justify-center
        relative
        overflow-hidden
        px-6
      "
    >

      {/* =========================================
          UP BUTTON
      ========================================= */}
      <motion.button
        onClick={onUpClick}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="
          absolute
          top-6
          left-1/2
          -translate-x-1/2
          z-50
          p-2
          bg-transparent
          border-none
          cursor-pointer
          group
        "
      >
        <div className="flex flex-col items-center gap-1">

          <ChevronUp
            size={28}
            className="
              text-white/20
              group-hover:text-pink-400
              transition-colors
            "
          />

          <span
            className="
              text-[8px]
              font-black
              tracking-[0.4em]
              text-white/30
              group-hover:text-pink-400
              transition-colors
              uppercase
            "
          >
            About
          </span>

        </div>
      </motion.button>


      {/* =========================================
          SKILLS CONTENT
      ========================================= */}
      <Container className="relative z-10 pt-12">

        {/* TITLE */}
        <div className="text-center mb-6">

          <motion.h2
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="
              text-3xl
              md:text-5xl
              font-black
              text-white
              uppercase
              tracking-[0.3em]
              italic
            "
          >
            ARSENAL
            <span className="text-pink-500">.</span>
          </motion.h2>

          <p
            className="
              text-[8px]
              text-white/30
              tracking-[0.4em]
              uppercase
              mt-1
            "
          >
            Technical Proficiency
          </p>

        </div>


        {/* =========================================
            SKILLS GRID
        ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-2.5
            max-w-4xl
            mx-auto
            justify-items-center
          "
        >

          {skillData.map((skill) => (

            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="w-full flex justify-center"
            >

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                className="
                  flex
                  items-center
                  gap-2
                  bg-white/[0.03]
                  hover:bg-white/[0.08]
                  border
                  border-white/10
                  hover:border-pink-500/50
                  px-3
                  py-2
                  rounded-full
                  backdrop-blur-xl
                  transition-all
                  cursor-default
                  w-full
                  justify-center
                  max-w-[180px]
                "
              >

                {/* ICON */}
                <div
                  className="
                    text-white/40
                    shrink-0
                    group-hover:text-pink-400
                  "
                >
                  {getIcon(skill.name)}
                </div>


                {/* SKILL NAME */}
                <span
                  className="
                    text-white
                    font-medium
                    text-[9px]
                    md:text-[10px]
                    uppercase
                    tracking-widest
                    whitespace-nowrap
                  "
                >
                  {skill.name}
                </span>


                {/* PERCENTAGE */}
                <span
                  className="
                    text-pink-500
                    font-black
                    text-[8px]
                    font-mono
                    ml-auto
                  "
                >
                  {skill.level}%
                </span>

              </motion.div>

            </motion.div>

          ))}

        </motion.div>

      </Container>


      {/* =========================================
          DOWN BUTTON
      ========================================= */}
      <motion.button
        onClick={onDownClick}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          z-50
          p-2
          bg-transparent
          border-none
          cursor-pointer
          group
        "
      >

        <div className="flex flex-col items-center gap-1">

          <span
            className="
              text-[8px]
              font-black
              tracking-[0.4em]
              text-white/30
              group-hover:text-indigo-400
              transition-colors
              uppercase
            "
          >
            Projects
          </span>

          <ChevronDown
            size={28}
            className="
              text-white/20
              group-hover:text-indigo-400
              transition-colors
            "
          />

        </div>

      </motion.button>

    </section>
  );
};

export default Skills;
