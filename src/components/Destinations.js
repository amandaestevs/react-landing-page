import React from "react";
import DestinationCard from "./DestinationCard";
import IcelandPic from '../img/iceland.jpg';
import ThailandPic from '../img/thailand.jpg';
import AustraliaPic from '../img/australia.jpg';
import { motion } from "framer-motion";

export default function Destinations() {
  const destinations = [
    { name: "Iceland", img: IcelandPic, id: 1 },
    { name: "Thailand", img: ThailandPic, id: 2 },
    { name: "Australia", img: AustraliaPic, id: 3 },
  ];

  return (
   <div className="destinations">
    <motion.h2 
     viewport={{once: false}}
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{type: "easeInOut", duration: 0.4}}
    className="destinations-title">Most Popular Destinations</motion.h2>
    <div className="destinations-card-container">
      {destinations.map((destination, i) => {
        return (
          <DestinationCard key={destination.id} i={i} destination={destination} />
        );
      })}
    </div>
    </div>
  );
}
