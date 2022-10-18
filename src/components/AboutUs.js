import React from "react";
import { ImEarth } from "react-icons/im";
import { MdOutlineTimer } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import Image1 from "../img/img1.jpg";
import Image2 from "../img/img2.jpg";
import { motion } from "framer-motion";

export default function AboutUs() {
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="about-section-container">
      <motion.div
        variants={animation}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "easeInOut", duration: 0.5 }}
        className="about-text"
      >
        <h2>Lorem Ipsum</h2>
        <p>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </motion.div>

      <motion.div
        variants={animation}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "easeInOut", duration: 0.5 }}
        className="about-images"
      >
        <img className="about-image1" src={Image1} alt="Hot air balloons in Turkey" />
        <img className="about-image2" src={Image2} alt="Woman looking at flower field" />
      </motion.div>

      <motion.div
        variants={animation}
        viewport={{ once: false }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "easeInOut", duration: 0.5 }}
        className="why-choose-us"
      >
        <h2>Why Choose Us?</h2>
        <div className="why-choose-us-flex">
          <div className="about-us-card">
            <ImEarth className="about-icon earth" />
            <h3>More than 80 destinations</h3>
          </div>
          <div className="about-us-card">
            <MdOutlineTimer className="about-icon timer" />
            <h3>24-hours support</h3>
          </div>
          <div className="about-us-card">
            <GiMoneyStack className="about-icon money" />
            <h3>Best Price</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
