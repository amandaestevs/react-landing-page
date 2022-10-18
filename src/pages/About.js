import React from "react";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header page={"about"} />
      <AboutUs />
    </motion.div>
  );
}
