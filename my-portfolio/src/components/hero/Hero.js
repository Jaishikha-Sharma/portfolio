import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function () {
  return (
    <div id="home" className="hero">
      <img src="https://i.imgur.com/KUtUnhC.jpeg" />
      <h1>
        <span>I'm SOMYA BHARDWAJ , </span>Mern Stack Developer based in India.
      </h1>
      <p>
        Hi, I'm Somya, MERN stack developer with 1 year of hands-on
        experience. I specialize in MongoDB, Express.js, React, and Node.js.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me!
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
