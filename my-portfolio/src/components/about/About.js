import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="https://i.imgur.com/KUtUnhC.jpeg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Somya, a passionate MERN Developer with extensive
              experience in building full-stack web applications. I specialize
              in using MongoDB, Express, React, and Node.js to create dynamic,
              scalable, and interactive websites. With a keen focus on both
              front-end and back-end development, I leverage modern tools and
              best practices to deliver seamless user experiences and robust
              functionality.
            </p>
            <p>
              I'm always eager to learn new technologies and improve my craft,
              striving to build clean, maintainable code and bring user-friendly
              interfaces to the web.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Front-End</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Back-End</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Restful APIs</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>State Management</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>GIT</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Soft skills</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>2+</h1>
          <p>MERN CERTIFICATION COMPLETED</p>
        </div>
      </div>
    </div>
  );
}
