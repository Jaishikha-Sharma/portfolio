import React from "react";
import "./Fotter.css";
import { Mail } from "lucide-react";

export default function Fotter() {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* <div className="footer-top-left">
          <p>
            I am a frontend developer from , India with 6+ months of hands on
            experience in ReactJs.
          </p>
        </div> */}
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <Mail />
            <input type="email" placeholder="Enter your e-mail" />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">2024@ somya bhardwaj</p>
        <div className="footer-bottom-right">
          <p>Connect With Me!</p>
        </div>
      </div>
    </div>
  );
}
