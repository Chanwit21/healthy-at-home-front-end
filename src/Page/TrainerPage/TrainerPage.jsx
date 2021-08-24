import React from 'react';
import TrainerCardMiniSizeComponent from '../../Component/TrainerCardMiniSizeComponent/TrainerCardMiniSizeComponent';
import './TrainerPage.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import { TRAINERS } from '../../mocks/trainers_data';

function TrainerPage() {
  const trainersCards = TRAINERS.map(item => {
    return (
      <TrainerCardMiniSizeComponent
        key={item.id}
        pathOfImg={item.image}
        nickName={item.nick_name}
        Fullname={item.fullname}
      />
    );
  });

  return (
    <>
      <div className="trainer-page">
        <section className="head-trainer-text">
          <div className="container">
            <h1>Trainers</h1>
          </div>
        </section>
        <section className="trainer-profile">
          <div className="container">
            <div className="trainer-cardrow-trainerpage">{trainersCards}</div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <ContactUsComponent />
          </div>
        </section>
      </div>
    </>
  );
}

export default TrainerPage;
