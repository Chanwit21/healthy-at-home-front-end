import React from "react";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import MenuBarComponent from "../../Component/MenuBarComponent/MenuBarComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import UserConsultTrainerComponent from "../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent";
import { Link } from "react-router-dom";
import "./UserWorkoutSchedulePage.css";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";

function UserWorkoutSchedulePage() {
  const arrayColor = [
    {
      color: "white",
      colorCode: "#ADADAD",
      fontColor: "#000000",
      content: [
        "The gray pose focuses mainly on size.",
        "12 REPS X 3 SETS",
        "Rest 60 seconds / Set",
      ],
    },
    {
      color: "white",
      colorCode: "#ffffff",
      fontColor: "#000000",
      content: [
        "White posture emphasizes stamina and size.",
        "20 REPS X 3 SETS",
        "Rest 30 seconds / Set",
      ],
    },
  ];

  const arrWorkOutPrograms = [
    {
      day: "Day1",
      exercise: [
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "SWIMMER AND SUPERMAN",
          Link: "https://www.youtube.com/watch?v=XydDDn_Rngw",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "PUSH-UPS",
          Link: "https://www.youtube.com/watch?v=R08gYyypGto",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "SQUATS",
          Link: "https://www.youtube.com/watch?v=42bFodPahBU",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "BACKWARD LUNGE",
          Link: "https://www.youtube.com/watch?v=_LGpDtENZ5U",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: " ABDOMINAL CRUNCHES",
          Link: "https://www.youtube.com/watch?v=RUNrHkbP4Pc",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: " Plank 30 sec./set",
          Link: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "BUTT BRIDGE",
          Link: "https://www.youtube.com/watch?v=9qo48CYN06w",
        },
      ],
    },
    {
      day: "Day2",
      exercise: [
        {
          colorCode: "#DCDF52",
          color: "#FFF",
          exerciseName: "Low Impact 30 minute cardio workout",
          Link: "https://www.youtube.com/watch?v=50kH47ZztHs&t=1s",
        },
      ],
    },
    {
      day: "Day3",
      exercise: [
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "GLUTE KICK BACK",
          Link: "https://www.youtube.com/watch?v=qzqDHSDTc0U",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "DUMBBELL LUNGES",
          Link: "https://www.youtube.com/watch?v=yIc1YbVLMZ8",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "SPLIT SQUAT",
          Link: "https://www.youtube.com/watch?v=OfwqSK_Ghvk",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "WALL SIT",
          Link: "https://www.youtube.com/watch?v=zoBEgkd78Wg",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "HIP BRIDGE & LEG LIFT",
          Link: "https://www.youtube.com/watch?v=NQZfLEakvhw",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "SQUAT THRUST WITH TWIST",
          Link: "https://www.youtube.com/watch?v=OfwqSK_Ghvk",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "WALL STANDING GLUTE KICKBACKS",
          Link: "https://www.youtube.com/watch?v=qzqDHSDTc0U",
        },
      ],
    },
    {
      day: "Day4",
      exercise: [
        {
          colorCode: "#DCDF52",
          color: "#FFF",
          exerciseName: "Advanced fat burning HIIT cardio workout 30 mins.",
          Link: "https://www.youtube.com/watch?v=yplP5cLuyf4&t=1s",
        },
      ],
    },
    {
      day: "Day5",
      exercise: [
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "REVERSE CRUNCHES",
          Link: "https://www.youtube.com/watch?v=UwRfRN5fYRg",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "MOUNTAIN CLIMBER",
          Link: "https://www.youtube.com/watch?v=wQq3ybaLZeA",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "LEG RAISES",
          Link: "https://www.youtube.com/watch?v=dGKbTKLnym4",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "ABDOMINAL CRUNCHES",
          Link: "https://www.youtube.com/watch?v=RUNrHkbP4Pc",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "Plank 30 sec./set",
          Link: "https://www.youtube.com/watch?v=Fcbw82ykBvY",
        },
        {
          colorCode: "#FFFFFF",
          color: "#000",
          exerciseName: "BICYCLE CRUNCHES",
          Link: "https://www.youtube.com/watch?v=-nJkAJpQemI",
        },
        {
          colorCode: "#ADADAD",
          color: "#000",
          exerciseName: "COBRA STRETCH 30 sec./set",
          Link: "https://www.youtube.com/watch?v=z21McHHOpAg",
        },
      ],
    },
    {
      day: "Day6",
      exercise: [
        {
          colorCode: "#FF88A4",
          color: "#FFF",
          exerciseName: "Rest",
          Link: "",
        },
      ],
    },
    {
      day: "Day7",
      exercise: [
        {
          colorCode: "#FF88A4",
          color: "#FFF",
          exerciseName: "Rest",
          Link: "",
        },
      ],
    },
  ];

  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="user-workout-schedule-page">
        <section className="workout-schedule-menu-bar-left-in-User-course-page">
          <div className="container">
            <div className="menu-bar-left-in-User-course">
              <div className="menu-bar">
                <MenuBarComponent Page="UserWorkoutSchedulePage" />
              </div>
              <div className="workout-schedule">
                <h1 id="head-of-workout-schedule">Workout schedule</h1>
                <table id="workout-schedule-table">
                  <tr
                    style={{
                      backgroundColor: "#2B90C5",
                      color: "#FFF",
                      height: "3.125vw",
                    }}>
                    <th colSpan="4">Executive posture</th>
                    <th colSpan="3">Reps x Setss</th>
                    <th colSpan="2">Break period</th>
                  </tr>
                  {arrayColor.map((element) => {
                    return (
                      <tr
                        style={{
                          backgroundColor: element.colorCode,
                          color: element.fontColor,
                        }}>
                        <th colSpan="4">{element.content[0]}</th>
                        <th colSpan="3">{element.content[1]}</th>
                        <th colSpan="2">{element.content[2]}</th>
                      </tr>
                    );
                  })}

                  {arrWorkOutPrograms.map((element) => {
                    if (element.exercise.length === 1) {
                      if (element.exercise[0].exerciseName === "Rest") {
                        return (
                          <tr className="contentExercise">
                            <td
                              style={{
                                backgroundColor: "#2B90C5",
                                color: "#FFF",
                              }}>
                              {element.day}
                            </td>
                            <td
                              colSpan="8"
                              style={{
                                backgroundColor: element.exercise[0].colorCode,
                              }}>
                              <span
                                style={{
                                  color: element.exercise[0].color,
                                  fontSize: "2.5vw",
                                }}>
                                {element.exercise[0].exerciseName}
                              </span>
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr className="contentExercise">
                          <td
                            style={{
                              backgroundColor: "#2B90C5",
                              color: "#FFF",
                            }}>
                            {element.day}
                          </td>
                          <td
                            colSpan="7"
                            style={{
                              backgroundColor: element.exercise[0].colorCode,
                            }}>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={element.exercise[0].Link}
                              style={{
                                color: element.exercise[0].color,
                                fontSize: "2.5vw",
                              }}>
                              {element.exercise[0].exerciseName}
                            </a>
                          </td>
                          <td
                            colSpan="1"
                            style={{ backgroundColor: "#FFFFFF" }}
                            className="checkBox">
                            <input
                              type="checkbox"
                              name={`execise ${element.day}`}
                              id={`execise ${element.day}`}
                            />
                            <label htmlFor={`execise ${element.day}`}>
                              Success
                            </label>
                          </td>
                        </tr>
                      );
                    }
                    return (
                      <tr className="contentExercise">
                        <td
                          style={{ backgroundColor: "#2B90C5", color: "#FFF" }}>
                          {element.day}
                        </td>
                        {element.exercise.map((item) => {
                          return (
                            <td
                              style={{
                                backgroundColor: item.colorCode,
                              }}>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={item.Link}
                                style={{ color: item.color }}>
                                {item.exerciseName}
                              </a>
                            </td>
                          );
                        })}
                        <td
                          colSpan="1"
                          style={{ backgroundColor: "#FFFFFF" }}
                          className="checkBox">
                          <input
                            type="checkbox"
                            name={`execise ${element.day}`}
                            id={`execise ${element.day}`}
                          />
                          <label htmlFor={`execise ${element.day}`}>
                            Success
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <div className="switch-rest-day">
                  <h1>Want to alternate workout days with rest days?</h1>
                  <div className="switch-box-for-form">
                    <form action="#">
                      <div className="input-selector-row">
                        <div className="box-left">
                          <label htmlFor="restday">
                            Select the rest days you want to switch.
                          </label>
                          <br />
                          <select name="restday" id="restday">
                            <option value="none">none</option>
                            <option value="day6">Day6</option>
                            <option value="day7">Day7</option>
                          </select>
                        </div>
                        <div className="box-right">
                          <label htmlFor="day-to-switch">
                            Select the days you want to switch.
                          </label>
                          <br />
                          <select name="day-to-switch" id="day-to-switch">
                            <option value="none">none</option>
                            <option value="day1">Day1</option>
                            <option value="day2">Day2</option>
                            <option value="day3">Day3</option>
                            <option value="day4">Day4</option>
                            <option value="day5">Day5</option>
                          </select>
                        </div>
                      </div>
                      <div className="submit-form">
                        <input type="submit" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="consult-trainner">
                  <Link to="/chat-page">
                    <UserConsultTrainerComponent
                      pathOfImg={trainerThisIsEngineering}
                      nickName="Trainer Job"
                      Fullname="Thanapob SingHaseanee"
                    />
                  </Link>
                </div>
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

export default UserWorkoutSchedulePage;
