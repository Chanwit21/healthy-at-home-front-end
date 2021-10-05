import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import TrainerCardComponent from '../../Component/TrainerCardComponent/TrainerCardComponent';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import CorasalPromotionSlideComponent from '../../Component/CorasalPromotionSlideComponent/CorasalPromotionSlideComponent';
import CorasalResultSlideComponent from '../../Component/CorasalResultSlideComponent/CorasalResultSlideComponent';
import avatar_Image from '../../PIC/Icon/user.png';
import axios from '../../config/axios';

function HomePage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainer = async () => {
      const res = await axios.get('/trainer_info');
      setTrainers(res.data.trainers);
    };
    fetchTrainer();
  }, []);

  const trainers_component = trainers.slice(0, 2).map((item) => {
    return (
      <TrainerCardComponent
        key={item.id}
        pathOfImg={item.image || avatar_Image}
        nickName={`Trainer ${item.nickName || item.firstName}`}
        Fullname={item.firstName + ' ' + item.lastName}
      />
    );
  });
  return (
    <>
      <div className='homepage-body'>
        <CorasalPromotionSlideComponent />
        <section className='result'>
          <div className='container'>
            <div className='result-text'>
              <h1>Result</h1>
            </div>
            <CorasalResultSlideComponent />
          </div>
        </section>
        <section className='trainer'>
          <div className='container'>
            <div className='trainer-text'>
              <h1>Trainer</h1>
            </div>
            <Link to='/trainerpage' style={{ textDecoration: 'none', color: 'black' }}>
              <div className='trainer-card-row'>{trainers_component}</div>
            </Link>
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

export default HomePage;
