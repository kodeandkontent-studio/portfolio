import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <>
      <motion.div className="hero-container">
        <motion.h1
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{
            x: [0, 800, 800, 0, 0],
            y: [0, 0, 300, 300, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 90, 180, 275, 360],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: 1,
            ease: "anticipate",
          }}
        >
          Dipanshu
        </motion.h1>
      </motion.div>
    </>
  );
};

export default HeroSection;
