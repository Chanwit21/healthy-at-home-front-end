import React from "react";
import "./ContactUsComponent.css";
import twitter from "../../PIC/Icon/twitter.png";
import facebook from "../../PIC/Icon/facebook.png";
import instagram from "../../PIC/Icon/instagram.png";
import h_Logo from "../../PIC/LOGO/h.png";
import healthyAtHomeLogo from "../../PIC/LOGO/He__2_-removebg-preview.png";

function ContactUsComponent() {
  return (
    <div>
      <div className="contact-us-content">
        <div className="contact-us-text">
          <h1>Contact us</h1>
          <p>Tal : 02-xxx-xxxx</p>
          <p>Line : @Fit@Home</p>
          <p>Email : FitAtHome@gmail.com</p>
          <div className="contact-us-img">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="contact-us-form">
          <img src={h_Logo} alt="H-LOGO" />
          <img src={healthyAtHomeLogo} alt="H-LOGO" />
          <form action="#">
            <div className="label">
              <label htmlFor="firstname">Firstname : </label>
              <br />
              <label htmlFor="lastname">Lastname : </label>
              <br />
              <label htmlFor="email">Email : </label>
              <br />
              <label htmlFor="aditional">Additional Detial : </label>
            </div>
            <div className="input">
              <input type="text" id="firstname" name="firstname" />
              <br />
              <input type="text" id="lastname" name="lastname" />
              <br />
              <input type="email" id="email" name="email" />
              <br />
              <textarea
                id="aditional"
                name="aditional"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
