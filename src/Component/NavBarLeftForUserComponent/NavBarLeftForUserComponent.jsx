import React from "react";
import "./NavBarLeftForUserComponent.css";
import { Link } from "react-router-dom";

function NavBarLeftForUserComponent(props) {
  return (
    <div className="nav-bar-left-for-user-component">
      <div className="nav-body-box">
        <div className="img-user"></div>
        <h1>{props.Name}</h1>
        <div className="link-to-anatherpage-function">
          <Link
            to="/user-profile-page"
            className={props.Page === "UserProfilePage" ? "onPage" : ""}
            style={{
              color: props.Page === "UserProfilePage" ? "#000000FF" : "",
            }}
          >
            Profile
          </Link>
          <Link
            to="/inprogressprogrampage"
            className={
              props.Page === "UserInprogressProgramPage" ? "onPage" : ""
            }
            style={{
              color:
                props.Page === "UserInprogressProgramPage" ? "#000000FF" : "",
            }}
          >
            Inprogress program
          </Link>
          <Link
            to="#"
            className={props.Page === "UserSettingPage" ? "onPage" : ""}
            style={{
              color: props.Page === "UserSettingPage" ? "#000000FF" : "",
            }}
          >
            Setting
          </Link>
          <button className="btn btn-log-out">Log out</button>
        </div>
      </div>
    </div>
  );
}

export default NavBarLeftForUserComponent;
