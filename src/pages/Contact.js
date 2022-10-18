import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header page={"contact"} />
      <ContactForm />
    </motion.div>
  );
}
