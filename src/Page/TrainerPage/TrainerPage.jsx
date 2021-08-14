import React from "react";
import NavComponent from "../../Component/NavComponent/NavComponent";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import TrainerCardMiniSizeComponent from "../../Component/TrainerCardMiniSizeComponent/TrainerCardMiniSizeComponent";
import "./TrainerPage.css";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import trainerAndrewDick from "../../PIC/Trainer/pexels-andrew-dick-733500.jpg";
import trainerDimitryZub from "../../PIC/Trainer/pexels-dimitry-zub-6743966.jpg";
import trainerScottWebb from "../../PIC/Trainer/pexels-scott-webb-136405.jpg";
import trainerLazyArtistGrallery from "../../PIC/Trainer/pexels-the-lazy-artist-gallery-1451283.jpg";
import trainerThisIsEngineering from "../../PIC/Trainer/pexels-thisisengineering-3912944.jpg";

function TrainerPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="trainer-page">
        <section className="head-trainer-text">
          <div className="container">
            <h1>Trainers</h1>
          </div>
        </section>
        <section className="trainer-profile">
          <div className="container">
            <div className="trainer-cardrow-trainerpage">
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerAndrewDick}
                nickName="Trainer Ball"
                Fullname="Suthep Prabkeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerDimitryZub}
                nickName="Trainer Man"
                Fullname="Chartchai Eiamsaart"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerScottWebb}
                nickName="Trainer Mind"
                Fullname="Preawwa Buakeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerLazyArtistGrallery}
                nickName="Trainer Top"
                Fullname="Chanathip Chaimun"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerThisIsEngineering}
                nickName="Trainer Job"
                Fullname="Thanapob SingHaseanee"
              />
            </div>
            <div className="trainer-cardrow-trainerpage">
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerAndrewDick}
                nickName="Trainer Ball"
                Fullname="Suthep Prabkeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerDimitryZub}
                nickName="Trainer Man"
                Fullname="Chartchai Eiamsaart"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerScottWebb}
                nickName="Trainer Mind"
                Fullname="Preawwa Buakeaw"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerLazyArtistGrallery}
                nickName="Trainer Top"
                Fullname="Chanathip Chaimun"
              />
              <TrainerCardMiniSizeComponent
                pathOfImg={trainerThisIsEngineering}
                nickName="Trainer Job"
                Fullname="Thanapob SingHaseanee"
              />
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <ContactUsComponent />
          </div>
        </section>
      </div>
      {/* Space Bottom */}
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default TrainerPage;
