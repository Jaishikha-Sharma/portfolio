import React from "react";
import work_Data from "./MyWork";
import { MoveRight } from "lucide-react";
import "./MyWorks.css";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function Work() {
  return (
    <div id="work" className="myWork">
      <div className="myWork-title">
        <h1>My Works</h1>
        <img src={theme_pattern} />
      </div>
      <div className="myWork-container">
        {work_Data.map((work) => (
          <div key={work.id} className="myWork-format">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            {work.git && (
              <div className="myWork-readmore">
                <a
                  href={work.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="myWork-link"
                >
                  Visit Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
