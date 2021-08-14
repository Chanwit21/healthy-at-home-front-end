import React from "react";
import NavComponent from "../../Component/NavComponent/NavComponent";
import { Link } from "react-router-dom";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import "./HomePage.css";
import TrainerCardComponent from "../../Component/TrainerCardComponent/TrainerCardComponent";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import trainerAndrewDick from "../../PIC/Trainer/pexels-andrew-dick-733500.jpg";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";
import rightArrow from "../../PIC/Icon/right-arrow.png";
import leftArrow from "../../PIC/Icon/left-arrow.png";
import result1 from "../../PIC/Picxel/PIC_Result/pexels-karolina-grabowska-4498516.jpg";
import promotionImg1 from "../../PIC/Picxel/PIC_Promo/pexels-william-choquette-1954524.jpg";

function HomePage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="homepage-body">
        <section className="promotion">
          <div className="container">
            <img
              src={leftArrow}
              alt="left-arrow"
              className="arrow arrow-left"
            />
            <img src={promotionImg1} alt="run-promo" className="img-promo" />
            <img
              src={rightArrow}
              alt="right-arrow"
              className="arrow arrow-right"
            />
          </div>
        </section>
        <section className="result">
          <div className="container">
            <div className="result-text">
              <h1>Result</h1>
            </div>
            <div className="result-img">
              <img src={leftArrow} alt="left-arrow" className="arrowResult" />
              <img src={result1} alt="result1" className="resultImage" />
              <img src={rightArrow} alt="right-arrow" className="arrowResult" />
            </div>
          </div>
        </section>
        <section className="trainer">
          <div className="container">
            <div className="trainer-text">
              <h1>Trainer</h1>
            </div>
            <Link
              to="/trainerpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="trainer-card-row">
                <TrainerCardComponent
                  pathOfImg={trainerAndrewDick}
                  nickName="Trainer Ball"
                  Fullname="Suthep Prabkeaw"
                />
                <TrainerCardComponent
                  pathOfImg={trainerThisIsEngineering}
                  nickName="Trainer Job"
                  Fullname="Thanapob SingHaseanee"
                />
              </div>
            </Link>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="horizental-line"></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
      {/* Space Bottom */}
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
