import React from "react";
import "./FooterComponent.css";
import copy_right from "../../PIC/Icon/copyright.png";

function FooterComponent() {
  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="footer-copyright">
            <span>Fit At Home</span>
            <img src={copy_right} alt="copyRight" />
            <span>2021</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
