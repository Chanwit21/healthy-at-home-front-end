import React, { useState } from "react";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavBarLeftForAdminAndTrainerComponent from "../../Component/NavBarLeftForAdminAndTrainerComponent/NavBarLeftForAdminAndTrainerComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import "./TrainerManageVideosAndFoodPage.css";
import avatarImg from "../../PIC/Icon/user.png";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";
import preWorkoutTable1 from "../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg";
import postWorkoutTable1 from "../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg";
import lope from "../../PIC/Icon/loupe.png";

function TrainerManageVideosAndFoodPage() {
  const [scheduleType, setScheduleType] = useState("none");
  const [valueOfContentInScheduleSelect, setValueOfContentInScheduleSelect] =
    useState("none");
  const arrayProfileContents = [
    {
      name: "Chanwit Pansila",
      status: "Admin",
      imgPath: avatarImg,
      imgPosition: "0 0",
      contents: [
        { "col-left": "Phone Number", "col-right": "089-697-xxx" },
        {
          "col-left": "Gender",
          "col-right": "Male",
        },
        {
          "col-left": "Weight",
          "col-right": "63 kg.",
        },
        {
          "col-left": "Heigth",
          "col-right": "171 cm.",
        },
      ],
    },
    {
      name: "Thanapob SingHaseanee",
      status: "Trainer",
      imgPath: trainerThisIsEngineering,
      imgPosition: "0 0",
      contents: [
        { "col-left": "Phone Number", "col-right": "089-697-xxx" },
        {
          "col-left": "Gender",
          "col-right": "Male",
        },
        {
          "col-left": "Weight",
          "col-right": "63 kg.",
        },
        {
          "col-left": "Heigth",
          "col-right": "171 cm.",
        },
        {
          "col-left": "Education",
          "col-right":
            "Faculty of Physical Education Srinakharinwirot university.",
        },
      ],
    },
  ];
  const arrayProfileFilter = arrayProfileContents.filter(
    item => item.name === "Thanapob SingHaseanee"
  );
  // console.log(arrayProfileFilter)
  const dataVedioAndFood = [
    {
      typeOfSchedule: "Vedio",
      typeOfContentInSchedule: [
        "Full Body",
        "Core & Abs",
        "Chest",
        "Arm",
        "Butt",
      ],
      none: [],
      "Core & Abs": [],
      Chest: [],
      Arm: [],
      Butt: [],
      "Full Body": [
        {
          name: "DYNAMIC CHEST",
          link: "https://www.youtube.com/embed/kLmWN3Qsj0A",
        },
        {
          name: "JUMPING JACKS",
          link: "https://www.youtube.com/embed/2W4ZNSwoW_4?list=PLoVy-85EFtK899UosmFY3vviTqy4s47-q",
        },
        {
          name: "STAR CRAWL",
          link: "https://www.youtube.com/embed/M_uNXxdI018",
        },
        {
          name: "JUMPING JACKS",
          link: "https://www.youtube.com/embed/w0OWFjfI3zM",
        },
      ],
    },
    {
      typeOfSchedule: "Food",
      typeOfContentInSchedule: [
        "Pre Work Out",
        "Post Work Out",
        "Normal Meal",
        "Snack",
      ],
      none: [],
      "Pre Work Out": [preWorkoutTable1],
      "Post Work Out": [postWorkoutTable1],
      "Normal Meal": [],
      Snack: [],
    },
  ];
  const valueInSelect = scheduleType;
  const valueOfContentInscheduleSelect = valueOfContentInScheduleSelect;
  const arrFillterOfValueSelect =
    scheduleType === "none"
      ? [{ typeOfContentInSchedule: [], none: [] }]
      : dataVedioAndFood.filter(item => item.typeOfSchedule === valueInSelect);
  // console.log(arrFillterOfValueSelect)

  // set Type of Schedule
  function changeTypeOfSchedule(e) {
    setScheduleType(e.target.value);
    setValueOfContentInScheduleSelect("none");
    // console.log(e.target.value);
  }
  // console.log(scheduleType);
  function changeValueOfContentInScheduleSelect(e) {
    setValueOfContentInScheduleSelect(e.target.value);
    // console.log(e.target.value);
  }
  //  console.log(arrFillterOfValueSelect[0]);

  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="trainer-manage-videos-and-food-page">
        <section className="manage-videos-and-food">
          <div className="container">
            <div className="row-of-navbar-left-and-manage-videos-and-food">
              <div className="navbar-left-admin-trainer-component-in-page">
                <NavBarLeftForAdminAndTrainerComponent
                  imgPath={arrayProfileFilter[0].imgPath}
                  name={arrayProfileFilter[0].name}
                  status={arrayProfileFilter[0].status}
                  onPage="TrainerManageVideosAndFoodPage"
                  imgPosition={arrayProfileFilter[0].imgPosition}
                />
              </div>
              <div className="vedio-and-food-schedule">
                <div className="row-of-select-and-search-box">
                  <div className="select">
                    <select
                      name="typeOfSchedule"
                      id="type-of-schedule"
                      onChange={e => changeTypeOfSchedule(e)}
                    >
                      <option value="none">none</option>
                      <option value="Vedio">Vedio</option>
                      <option value="Food">Food</option>
                    </select>
                    <select
                      name="typeOfSchedule"
                      id="type-of-content-in-schedule"
                      onChange={e => changeValueOfContentInScheduleSelect(e)}
                      value={valueOfContentInScheduleSelect}
                    >
                      <option value="none">none</option>
                      {arrFillterOfValueSelect[0].typeOfContentInSchedule.map(
                        item => (
                          <option value={item}>{item}</option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="search-box">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                      />
                      <button type="submit">
                        <img src={lope} alt="loupe" />
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="vedios-schedule"
                  style={{
                    display:
                      scheduleType === "Vedio" &&
                      valueOfContentInscheduleSelect !== "none" &&
                      arrFillterOfValueSelect[0][valueOfContentInscheduleSelect]
                        .length !== 0
                        ? ""
                        : "none",
                  }}
                >
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Link Youtube</th>
                    </tr>
                    {scheduleType === "Vedio"
                      ? arrFillterOfValueSelect[0][
                          valueOfContentInscheduleSelect
                        ].map(item => {
                          return (
                            <tr>
                              <td>{item.name}</td>
                              <td>{item.link}</td>
                            </tr>
                          );
                        })
                      : []}
                  </table>
                </div>
                <div
                  className="food-schedule"
                  style={{ display: scheduleType === "Food" ? "" : "none" }}
                >
                  {arrFillterOfValueSelect[0][
                    valueOfContentInScheduleSelect
                  ].map((item, index) => {
                    return (
                      <div className="row-img">
                        <img
                          src={item}
                          alt={`path-${index}`}
                          style={{
                            display: item.length === 0 ? "none" : "",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default TrainerManageVideosAndFoodPage;
