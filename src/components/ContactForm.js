import React from "react";
import { VscLocation } from "react-icons/vsc";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input id="form-name" placeholder="Your Name*" type="text" required />
        <input
          id="form-email"
          placeholder="Your Email*"
          type="email"
          required
        />

        <div className="choose-destination-container">
          <VscLocation className="form-icon" />
          <input id="form-destionation" placeholder="Destination of Interest" />
        </div>

        <div className="form-dates">
          <div>
            <label htmlFor="departure-date">Departure:</label>
            <input
              id="departure-date"
              placeholder="Departure Date"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="Return-date">Return:</label>
            <input id="return-date" placeholder="Return Date" type="date" />
          </div>
        </div>

        <div className="message">
          <textarea placeholder="Message"></textarea>
        </div>

        <div className="submit-btn-container">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
