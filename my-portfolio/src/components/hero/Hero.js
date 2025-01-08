import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function () {
  return (
    <div id="home" className="hero">
      <img src="https://i.imgur.com/ex5pcvT.jpeg" />
      <h1><span>I'm JAISHIKHA SHARMA ,</span> Full Stack Developer based in India.</h1>
      <p>
        Hi, I'm Jaishikha, a passionate React developer with hands-on experience in building dynamic and responsive web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me! </AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
