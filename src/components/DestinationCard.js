import React from "react";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DestinationCard({ destination, i }) {
  return (
    <motion.div 
    viewport={{once: false}}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{type: "easeInOut", duration: 0.8, delay: i * 0.8}}
    className="destination-card">
      <img
        className="destination-img"
        src={destination.img}
        alt={destination.name}
      />
      <div className="card-content">
        <h3 className="destination-name">
          <VscLocation className="location-icon" />
          {destination.name}
        </h3>
        <button className="card-btn">
          <Link className="card-btn-text" to={"/contact"}>Book</Link>
        </button>
      </div>
    </motion.div>
  );
}
