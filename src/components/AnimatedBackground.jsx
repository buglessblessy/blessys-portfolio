
import React from "react";
import { motion } from "framer-motion";

/* =========================================
   WATER BUBBLE
   No click / no pop effect
========================================= */
const WaterBubble = ({ bubble }) => {
  return (
    <motion.div
      className="
        absolute
        rounded-full
        pointer-events-none
      "
      style={{
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        left: bubble.left,
        top: bubble.top,

        background: `
          radial-gradient(
            circle at 30% 25%,
            rgba(255,255,255,0.50) 0%,
            rgba(255,255,255,0.14) 9%,
            transparent 25%
          ),
          radial-gradient(
            circle at 65% 70%,
            rgba(255,255,255,0.08),
            transparent 55%
          )
        `,

        border: "1px solid rgba(255,255,255,0.30)",

        boxShadow: `
          inset 8px 8px 18px rgba(255,255,255,0.10),
          inset -8px -8px 18px rgba(0,0,0,0.12),
          0 0 18px rgba(255,255,255,0.08)
        `,

        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",

        zIndex: 5,
      }}

      /* Bubble appears */
      initial={{
        opacity: 0,
        scale: 0.7,
      }}

      /* Slow natural floating */
      animate={{
        opacity: [0.30, 0.55, 0.38, 0.58, 0.30],
        y: [0, -35, -10, 25, 0],
        x: [0, 18, -15, 12, 0],
        scale: [1, 1.06, 0.98, 1.04, 1],
      }}

      transition={{
        duration: bubble.duration,
        delay: bubble.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* =====================================
          MAIN REFLECTION
      ====================================== */}
      <div
        className="
          absolute
          top-[14%]
          left-[18%]
          w-[22%]
          h-[13%]
          rounded-full
          bg-white/30
          blur-[2px]
          rotate-[-25deg]
        "
      />

      {/* =====================================
          SMALL REFLECTION
      ====================================== */}
      <div
        className="
          absolute
          top-[28%]
          left-[14%]
          w-[8%]
          h-[8%]
          rounded-full
          bg-white/40
          blur-[1px]
        "
      />

      {/* =====================================
          SOFT BOTTOM REFLECTION
      ====================================== */}
      <div
        className="
          absolute
          bottom-[15%]
          right-[18%]
          w-[18%]
          h-[7%]
          rounded-full
          bg-white/10
          blur-[3px]
          rotate-[-20deg]
        "
      />
    </motion.div>
  );
};

/* =========================================
   MAIN ANIMATED BACKGROUND
========================================= */
const AnimatedBackground = () => {
  const bubbles = [
    {
      id: 1,
      size: 65,
      left: "7%",
      top: "20%",
      duration: 20,
      delay: 0,
    },
    {
      id: 2,
      size: 90,
      left: "20%",
      top: "65%",
      duration: 24,
      delay: 2,
    },
    {
      id: 3,
      size: 55,
      left: "34%",
      top: "28%",
      duration: 18,
      delay: 4,
    },
    {
      id: 4,
      size: 100,
      left: "48%",
      top: "72%",
      duration: 27,
      delay: 1,
    },
    {
      id: 5,
      size: 72,
      left: "65%",
      top: "22%",
      duration: 22,
      delay: 5,
    },
    {
      id: 6,
      size: 105,
      left: "80%",
      top: "55%",
      duration: 29,
      delay: 3,
    },
    {
      id: 7,
      size: 55,
      left: "91%",
      top: "18%",
      duration: 19,
      delay: 6,
    },
    {
      id: 8,
      size: 78,
      left: "42%",
      top: "12%",
      duration: 23,
      delay: 2,
    },
    {
      id: 9,
      size: 62,
      left: "13%",
      top: "45%",
      duration: 21,
      delay: 7,
    },
    {
      id: 10,
      size: 92,
      left: "73%",
      top: "78%",
      duration: 26,
      delay: 4,
    },
  ];

  return (
    <div
      className="
        fixed
        inset-0
        w-full
        h-full
        overflow-hidden
        pointer-events-none
        z-0
      "
    >
      {/* =========================================
          BASE BACKGROUND
      ========================================== */}
      <div className="absolute inset-0 bg-[#030308]" />

      {/* =========================================
          BLUE → PURPLE → PINK
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[-250px]
          right-[-200px]
          w-[900px]
          h-[900px]
          rounded-full
          blur-[180px]
        "
        animate={{
          backgroundColor: [
            "rgba(37, 99, 235, 0.28)",
            "rgba(124, 58, 237, 0.28)",
            "rgba(219, 39, 119, 0.25)",
            "rgba(6, 182, 212, 0.24)",
            "rgba(37, 99, 235, 0.28)",
          ],
          scale: [1, 1.08, 1.12, 1.06, 1],
          x: [0, -40, -80, -30, 0],
          y: [0, 30, 60, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          LEFT PINK → PURPLE → BLUE
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[10%]
          left-[-300px]
          w-[850px]
          h-[850px]
          rounded-full
          blur-[180px]
        "
        animate={{
          backgroundColor: [
            "rgba(236, 72, 153, 0.22)",
            "rgba(168, 85, 247, 0.24)",
            "rgba(59, 130, 246, 0.25)",
            "rgba(14, 165, 233, 0.22)",
            "rgba(236, 72, 153, 0.22)",
          ],
          scale: [1, 1.1, 1.15, 1.08, 1],
          x: [0, 40, 70, 30, 0],
          y: [0, -20, -40, -10, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          BOTTOM EMERALD → CYAN → PURPLE
      ========================================== */}
      <motion.div
        className="
          absolute
          bottom-[-350px]
          left-[20%]
          w-[1000px]
          h-[700px]
          rounded-full
          blur-[190px]
        "
        animate={{
          backgroundColor: [
            "rgba(16, 185, 129, 0.20)",
            "rgba(6, 182, 212, 0.22)",
            "rgba(99, 102, 241, 0.22)",
            "rgba(217, 70, 239, 0.20)",
            "rgba(16, 185, 129, 0.20)",
          ],
          scale: [1, 1.12, 1.18, 1.1, 1],
          x: [0, 40, -30, 30, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          CENTER SOFT GLOW
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[35%]
          left-[35%]
          w-[650px]
          h-[650px]
          rounded-full
          blur-[200px]
        "
        animate={{
          backgroundColor: [
            "rgba(59, 130, 246, 0.08)",
            "rgba(139, 92, 246, 0.10)",
            "rgba(236, 72, 153, 0.08)",
            "rgba(34, 211, 238, 0.08)",
            "rgba(59, 130, 246, 0.08)",
          ],
          scale: [1, 1.15, 1, 1.12, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          FLOATING WATER BUBBLES
          No clicking / no popping
      ========================================== */}
      {bubbles.map((bubble) => (
        <WaterBubble
          key={bubble.id}
          bubble={bubble}
        />
      ))}

      {/* =========================================
          EXTRA TINY BUBBLES
      ========================================== */}
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <motion.div
          key={`tiny-${item}`}
          className="
            absolute
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
          "
          style={{
            width: `${10 + item * 3}px`,
            height: `${10 + item * 3}px`,
            left: `${5 + item * 12}%`,
            top: `${15 + ((item * 17) % 70)}%`,
          }}
          animate={{
            y: [0, -35, 0, 25, 0],
            x: [0, 12, -10, 8, 0],
            opacity: [0.1, 0.35, 0.15, 0.3, 0.1],
          }}
          transition={{
            duration: 16 + item * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item,
          }}
        />
      ))}

      {/* =========================================
          SLOW BLUE ORB
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[25%]
          left-[15%]
          w-[180px]
          h-[180px]
          rounded-full
          bg-blue-500/10
          blur-[70px]
        "
        animate={{
          x: [0, 120, 60, -50, 0],
          y: [0, 80, -40, 50, 0],
          scale: [1, 1.3, 0.9, 1.2, 1],
          opacity: [0.2, 0.4, 0.25, 0.35, 0.2],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          SLOW PINK ORB
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[55%]
          right-[15%]
          w-[160px]
          h-[160px]
          rounded-full
          bg-pink-500/10
          blur-[65px]
        "
        animate={{
          x: [0, -100, -40, 80, 0],
          y: [0, -60, 70, 30, 0],
          scale: [1, 1.25, 0.85, 1.15, 1],
          opacity: [0.2, 0.4, 0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================
          MOVING LIGHT LINE
      ========================================== */}
      <motion.div
        className="
          absolute
          top-0
          left-[-20%]
          w-[40%]
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          blur-sm
        "
        animate={{
          x: ["0vw", "140vw"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =========================================
          SECOND LIGHT LINE
      ========================================== */}
      <motion.div
        className="
          absolute
          top-[70%]
          left-[-20%]
          w-[30%]
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/10
          to-transparent
          blur-sm
        "
        animate={{
          x: ["0vw", "150vw"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* =========================================
          SOFT VIGNETTE
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]
        "
      />
    </div>
  );
};

export default AnimatedBackground;
// ```

// Now the bubbles will **only float** 🫧 — no click handling, no `useState`, no `AnimatePresence`, no replacement bubbles, and no pop animation.
