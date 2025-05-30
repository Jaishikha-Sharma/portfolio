import React from "react";
import "./Contact.css";
import { MailCheck } from "lucide-react";
import { Linkedin } from "lucide-react";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e8b2b82f-c133-48fe-9ec5-485dee1d7106");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
 alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available and excited to take on new projects!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <MailCheck />
              <p>jaishikhasharma919@gmail.com</p>
            </div>
            <div className="contact-detail">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/jaishikha-sharma-aa2211329"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/jaishikha-sharma-aa2211329
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=""> Your Name </label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor=""> Your E-mail </label>
          <input type="email" placeholder="Enter your mail" name="email" />
          <label htmlFor="">Enter your message </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
