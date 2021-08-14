import React from "react";
import { Link } from "react-router-dom";
import "./NavBarLeftForAdminAndTrainerComponent.css";

function NavBarLeftForAdminAndTrainerComponent(props) {
  return (
    <div className="navbar-left-admin-trainer-component">
      <section className="img">
        <div className="img-profile">
          <img src={props.imgPath} alt="imgProfile" 
          style={{objectPosition:props.imgPosition}}
          />
        </div>
      </section>
      <section className="name-and-status">
        <span className="name">{props.name}</span>
        <span
          className="status"
          style={{
            backgroundColor: props.status === "Admin" ? "#ff88a4" : "#61D196",
          }}
        >
          {props.status}
        </span>
      </section>
      <section className="navcontent">
        <Link
          style={{
            backgroundColor:
              props.onPage === "AdminProfilePage" ||
              props.onPage === "TrainerProfilePage"
                ? "rgba(97, 209, 150, 0.5)"
                : "",
            color:
              props.onPage === "AdminProfilePage" ||
              props.onPage === "TrainerProfilePage"
                ? "#000000FF"
                : "",
          }}
          to={
            props.status === "Admin"
              ? "/admin-profile-page"
              : "/trainer-profile-page"
          }
        >
          <h1>Profile</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              props.onPage === "AdminCustomersPage" ||
              props.onPage === "TrainerCustomersPage"
                ? "rgba(97, 209, 150, 0.5)"
                : "",
            color:
              props.onPage === "AdminCustomersPage" ||
              props.onPage === "TrainerCustomersPage"
                ? "#000000FF"
                : "",
          }}
          to={
            props.status === "Admin"
              ? "/admin-customers-page"
              : "/trainer-customers-page"
          }
        >
          <h1>Customers</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              props.onPage === "AdminManageVediosAndFoodPage" ||
              props.onPage === "TrainerManageVideosAndFoodPage"
                ? "rgba(97, 209, 150, 0.5)"
                : "",
            color:
              props.onPage === "AdminManageVediosAndFoodPage" ||
              props.onPage === "TrainerManageVideosAndFoodPage"
                ? "#000000FF"
                : "",
          }}
          to={
            props.status === "Admin"
              ? "/admin-manage-vedios-and-food-page"
              : "/trainer-manage-vedios-and-food-page"
          }
        >
          <h1>Manage videos and food</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              props.onPage === "AdminSettingPage" ||
              props.onPage === "TrainerSettingPage"
                ? "rgba(97, 209, 150, 0.5)"
                : "",
            color:
              props.onPage === "AdminSettingPage" ||
              props.onPage === "TrainerSettingPage"
                ? "#000000FF"
                : "",
          }}
          to={
            props.status === "Admin"
              ? "/admin-setting-page"
              : "/trainer-setting-page"
          }
        >
          <h1>Setting</h1>
        </Link>
        <button>
          <h1>Logout</h1>
        </button>
      </section>
    </div>
  );
}

export default NavBarLeftForAdminAndTrainerComponent;
