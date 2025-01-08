import React from "react";
import "./Contact.css";
import { MailCheck } from "lucide-react";
import { Linkedin } from "lucide-react";
import theme_pattern from '../../assets/theme_pattern.svg'

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img  src={theme_pattern}/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available and excited to take on new projects!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <MailCheck />
              <p>Somyabhardwaj004@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/somya-bhardwaj8960/"
                target="_blank"
                rel="noopener noreferrer"
              >
              https://www.linkedin.com/in/somya-bhardwaj8960/
              </a>
            </div>
            <div className="contact-detail">
            <Github />
              <a
                href="https://github.com/somyabhardwaj"
                target="_blank"
                rel="noopener noreferrer"
              >
               https://github.com/somyabhardwaj
              </a>
            </div>
          </div>
        </div>
        <form className="contact-right">
            <label htmlFor=""> Your Name </label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor=""> Your E-mail </label>
            <input type="email" placeholder="Enter your mail" name="email"/>
            <label htmlFor="">Enter your message </label>
            <textarea name="message" rows='5' placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
          </form>
      </div>
    </div>
  );
}
