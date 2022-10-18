import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="main-footer-text">
        <h3><Link className="logo" to={"/"}>EXPLORE</Link></h3>
        <p>Our goal is to create the best experiences for our customers.</p>
      </div>

      <div className="footer-contact-info">
        <h3>Contact</h3>
        <p>Street: 123 Main Street</p>
        <p>Telephone: 5555-5555</p>
        <p>Email: explore@fakeemail.com</p>
      </div>

      <div className="footer-social-media">
        <h3>Social Media</h3>
        <div className="footer-icon-container">
          <FaFacebookF className="footer-icon" />
          <AiOutlineTwitter className="footer-icon" />
          <AiFillInstagram className="footer-icon" />
          <AiFillYoutube className="footer-icon" />
          <BsPinterest className="footer-icon" />
        </div>
      </div>
    </footer>
  );
}
