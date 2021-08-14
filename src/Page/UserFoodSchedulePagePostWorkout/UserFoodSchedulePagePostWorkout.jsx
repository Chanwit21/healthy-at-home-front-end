import React from "react";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import MenuBarComponent from "../../Component/MenuBarComponent/MenuBarComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import UserConsultTrainerComponent from "../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent";
import { Link } from "react-router-dom";
import "./UserFoodSchedulePagePostWorkout.css";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";
import postWorkoutImg from "../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg";

function UserFoodSchedulePagePostWorkout() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="user-food-schedule-page-post-workout">
        <section className="food-menu-menu-bar-left-in-User-course-page">
          <div className="container">
            <div className="row-of-food-card">
              <div className="menubar">
                <MenuBarComponent
                  Page="UserFoodSchedulePage"
                  FoodMenu="UserFoodSchedulePagePostWorkout"
                />
              </div>
              <div className="food-content-card">
                <div className="content-card">
                  <h1>POST WORKOUT MEAL</h1>
                  <p>Meal after exercise 30-60 minutes.</p>
                  <ul>
                    <li>The most important meal of the day</li>
                    <li>
                      Emphasize powder X2 to give strength to TRAIN the next
                      day.
                    </li>
                    <li>Focus on protein to repair and strengthen muscles.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="img-table">
          <div className="container">
            <div className="imgtable-row">
              <img src={postWorkoutImg} alt="POST-WORKOUT-MEAL" />
            </div>
          </div>
        </section>
        <section className="consult-trainer">
          <div className="container">
            <div className="consult-trainer-row">
              <div className="consult-trainer">
                <Link to="/chatpage">
                  <UserConsultTrainerComponent
                    pathOfImg={trainerThisIsEngineering}
                    nickName="Trainer Job"
                    Fullname="Thanapob SingHaseanee"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="horizental-line"></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default UserFoodSchedulePagePostWorkout;
