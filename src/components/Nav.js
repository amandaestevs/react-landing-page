import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  const checkScreenSize = () => {
    if(window.innerWidth >= 760){
      setIsNavOpen(false)
   }
  }
  
  window.addEventListener("scroll", changeNavColor);
  window.addEventListener("resize", checkScreenSize);
   
  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    if(isNavOpen){
      setIsNavOpen(false)
   }
  }

  return (
    <nav className={`${navColor ? "nav-bar active" : "nav-bar"}`}>
      <h2><Link to={"/"} className="logo">EXPLORE</Link></h2>
      <div className="icon-container" onClick={handleClick}>
        {isNavOpen ? (
          <AiOutlineClose className="icon" />
        ) : (
          <BiMenuAltRight className="icon" />
        )}
      </div>

      <ul className={`${isNavOpen ? 'mobile-nav-links' : 'nav-links'}`}>
        <li><Link className="nav-link" onClick={closeNav} to={"/"}>Home</Link></li>
        <li><Link className="nav-link" onClick={closeNav}  to={"/about"}>About</Link></li>
        <li><Link className="nav-link" onClick={closeNav} to={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
}
