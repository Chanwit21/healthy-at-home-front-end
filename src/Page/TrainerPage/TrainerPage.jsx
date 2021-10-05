import React, { useEffect, useState } from 'react';
import TrainerCardMiniSizeComponent from '../../Component/TrainerCardMiniSizeComponent/TrainerCardMiniSizeComponent';
import './TrainerPage.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import avatar_Image from '../../PIC/Icon/user.png';
import axios from '../../config/axios';

function TrainerPage() {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    const fetchTrainer = async () => {
      const res = await axios.get('/trainer_info');
      setTrainer(res.data.trainers);
    };
    fetchTrainer();
  }, []);

  const trainersCards = trainer.map((item) => {
    return (
      <TrainerCardMiniSizeComponent
        key={item.id}
        pathOfImg={item.image || avatar_Image}
        nickName={`Trainer ${item.nickName || item.firstName}`}
        Fullname={item.firstName + ' ' + item.lastName}
      />
    );
  });

  return (
    <>
      <div className='trainer-page'>
        <section className='head-trainer-text'>
          <div className='container'>
            <h1>Trainers</h1>
          </div>
        </section>
        <section className='trainer-profile'>
          <div className='container'>
            <div className='trainer-cardrow-trainerpage'>{trainersCards}</div>
          </div>
        </section>
        <section className='contact-us'>
          <div className='container'>
            <div className='horizental-line'></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
    </>
  );
}

export default TrainerPage;
