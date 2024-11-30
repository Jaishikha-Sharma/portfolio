import React, { useState } from "react";
import "./Navbar.css";
import { TextCursor, Underline } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState("home");

  // Inline style for the underline effect
  const underlineStyle = {
    content: "''",
    position: "absolute",
    bottom: "-2px",
    left: "0",
    width: "100%",
    height: "2px",
    background: "#fff",
  };

  return (
    <div className="navbar">
      Somya Bhardwaj
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p>Home</p>
            {menu === "home" && <div style={underlineStyle}></div>}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("about")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
            {menu === "about" && <div style={underlineStyle}></div>}
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("services")}
          style={{ position: "relative" }}
        >
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Services</p>
            {menu === "services" && <div style={underlineStyle}></div>}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("work")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>My Works</p>
            {menu === "work" && <div style={underlineStyle}></div>}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
            {menu === "contact" && <div style={underlineStyle}></div>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me !
        </AnchorLink>
      </div>
    </div>
  );
}
