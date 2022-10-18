import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import AboutUs from "../components/AboutUs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ width: "0vw" }}
      animate={{ width: "100%" }}
      exit={{ width: "0vw" }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutUs />
      <Destinations />
    </motion.div>
  );
}
