import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="https://i.imgur.com/ex5pcvT.jpeg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Jaishikha, a dedicated Frontend Developer with a strong
              focus on creating interactive web applications. I specialize in
              React and modern frontend tools to bring designs to life and
              ensure seamless user experiences.
            </p>
            <p>
              I'm always eager to learn new technologies and improve my craft,
              striving to build clean, maintainable code and bring user-friendly
              interfaces to the web.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>8+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achivement">
          <h1>1</h1>
          <p>AWS CERTIFICATION COMPLETED</p>
        </div>
      </div>
    </div>
  );
}
