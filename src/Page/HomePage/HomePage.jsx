import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import TrainerCardComponent from '../../Component/TrainerCardComponent/TrainerCardComponent';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import trainerAndrewDick from '../../PIC/Trainer/pexels-andrew-dick-733500.jpg';
import trainerThisIsEngineering from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';
import CorasalPromotionSlideComponent from '../../Component/CorasalPromotionSlideComponent/CorasalPromotionSlideComponent';
import CorasalResultSlideComponent from '../../Component/CorasalResultSlideComponent/CorasalResultSlideComponent';

function HomePage() {
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
              <div className='trainer-card-row'>
                <TrainerCardComponent
                  pathOfImg={trainerAndrewDick}
                  nickName='Trainer Ball'
                  Fullname='Suthep Prabkeaw'
                />
                <TrainerCardComponent
                  pathOfImg={trainerThisIsEngineering}
                  nickName='Trainer Job'
                  Fullname='Thanapob SingHaseanee'
                />
              </div>
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
