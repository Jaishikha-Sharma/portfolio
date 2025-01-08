import React, { useRef, useState } from "react";
import "./Navbar.css";
import { TextCursor, Underline } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from "../../assets/theme_pattern.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import nav_underline from '../../assets/nav_underline.svg'

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      JAISHIKHA SHARMA
      <img className="pattern" src={theme_pattern} />
      <img src={menu_open} className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} className="nav-mob-close" onClick={closeMenu} />
        <li onClick={() => setMenu("home")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p>Home</p>
            {menu === "home" && (
              <img src={nav_underline} alt="underline" className="nav-underline" />
            )}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("about")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
            {menu === "about" && (
              <img src={nav_underline} alt="underline" className="nav-underline" />
            )}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("services")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Services</p>
            {menu === "services" && (
              <img src={nav_underline} alt="underline" className="nav-underline" />
            )}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")} style={{ position: "relative" }}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
            {menu === "contact" && (
              <img src={nav_underline} alt="underline" className="nav-underline" />
            )}
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
