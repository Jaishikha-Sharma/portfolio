import React from "react";
import "./Services.css";
import services_Data from "./ServiceArrya"; 
import { MoveRight } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg'

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img  src={theme_pattern}/>
      </div>
      <div className="services-container">
        {services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
                <h1>{service.id}</h1>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
