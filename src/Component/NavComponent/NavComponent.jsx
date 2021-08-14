import React from "react";
import { Link } from "react-router-dom";
import "./NavComponent.css";
import h_Logo from "../../PIC/LOGO/h.png";
import healthyAtHomeLogo from "../../PIC/LOGO/He__2_-removebg-preview.png";
import avataIcon from "../../PIC/Icon/user.png";

function NavComponent() {
  return (
    <>
      <nav className="navBar">
        <div className="navContainer">
          <Link to="/">
            <div className="Logo">
              <div className="H-Logo">
                <img src={h_Logo} alt="H_Logo" />
              </div>
              <div className="text-logo">
                <img src={healthyAtHomeLogo} alt="Taxt-Logo" />
              </div>
            </div>
          </Link>
          <div className="nav-content">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="servicepage">Service</Link>
              </li>
              <li>
                <Link to="/trainerpage">Trainers</Link>
              </li>
              <li>
                <Link to="/aboutpage">About</Link>
              </li>
            </ul>
            <Link
              to="/loginpage"
              style={{ textDecoration: "none", color: "black" }}>
              <div className="login-status">
                <div className="userstatus-icon">
                  <img src={avataIcon} alt="User-icon" />
                </div>
                <p>Login/Register</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
