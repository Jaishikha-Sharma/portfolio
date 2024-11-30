import React from "react";
import work_Data from './MyWorkArray'
import { MoveRight } from 'lucide-react';
import "./MyWorks.css" 

export default function Work() {
  return (
    <div id="work" className="services">
      <div className="services-title">
        <h1>My Works</h1>
      </div>
      <div className="services-container">
        {work_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
                <h1>{service.id}</h1>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p>{service.git}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
