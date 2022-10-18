import React from "react";
import { motion,  } from "framer-motion";

export default function Hero() {
  

  return (
    <>
    <header className="hero">
      <div className="glass-wrapper"></div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{delay: 0.1, duration: 0.4 }}
        className="hero-title"
      >
        Adventure Awaits
      </motion.h1>
    </header>
    </>
  );
}
