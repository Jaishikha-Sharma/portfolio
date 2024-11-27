import React from "react";
import "./Hero.css";

export default function () {
  return (
    <div className="hero">
      <img src="https://i.imgur.com/jkJTpKZ.jpeg" />
      <h1><span>I'm JAISHIKHA SHARMA ,</span>Frontend Developer based in India.</h1>
      <p>
        Hi, I'm Jaishikha, a passionate React developer with 9 months of
        hands-on experience in building dynamic and responsive web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me!</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
