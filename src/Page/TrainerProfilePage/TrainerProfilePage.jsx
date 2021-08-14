import React from "react";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavBarLeftForAdminAndTrainerComponent from "../../Component/NavBarLeftForAdminAndTrainerComponent/NavBarLeftForAdminAndTrainerComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import "./TrainerProfilePage.css";
import avatarImg from "../../PIC/Icon/user.png";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";

function TrainerProfilePage() {
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
  const arrayFilter = arrayProfileContents.filter(
    item => item.name === "Thanapob SingHaseanee"
  );

  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="trainer-profile-page">
        <section className="profile">
          <div className="container">
            <div className="row-of-navbar-left-and-profile-content">
              <div className="navbar-left-trainer-trainer-component-in-page">
                <NavBarLeftForAdminAndTrainerComponent
                  imgPath={arrayFilter[0].imgPath}
                  name={arrayFilter[0].name}
                  status={arrayFilter[0].status}
                  onPage="TrainerProfilePage"
                  imgPosition={arrayFilter[0].imgPosition}
                />
              </div>
              <div className="profile-content">
                <div className="row-of-profile-content">
                  <div className="content-profile-content-left">
                    <h1>Name</h1>
                  </div>
                  <div className="content-profile-content-right">
                    <p>{arrayFilter[0].name}</p>
                  </div>
                </div>
                {arrayFilter[0].contents.map(item => {
                  return (
                    <div className="row-of-profile-content">
                      <div className="content-profile-content-left">
                        <h1>{item["col-left"]}</h1>
                      </div>
                      <div className="content-profile-content-right">
                        <p>{item["col-right"]}</p>
                      </div>
                    </div>
                  );
                })}
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

export default TrainerProfilePage;
