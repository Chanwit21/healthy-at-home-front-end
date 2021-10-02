import React from 'react';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import './UserFoodSchedulePagePreWorkout.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';

function UserFoodSchedulePagePreWorkout() {
  return (
    <div>
      <div className='user-food-schedule-page-pre-workout'>
        <section className='food-menu-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='row-of-food-card'>
              <div className='menubar'>
                <MenuBarComponent Page='UserFoodSchedulePage' FoodMenu='UserFoodSchedulePagePreWorkout' />
              </div>
              <div className='food-content-card'>
                <div className='content-card'>
                  <h1>PRE WORKOUT MEAL</h1>
                  <p>pre-workout meal 30-90 minutes.</p>
                  <ul>
                    <li>Emphasize the powder to have the strength to exercise.</li>
                    <li>POST is a post-workout meal.</li>
                    <li>Focus on protein to maintain muscle.</li>
                    <li>Less fat for faster digestion.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='img-table'>
          <div className='container'>
            <div className='imgtable-row'>
              <img src={preWorkoutImg} alt='PRE-WORKOUT-MEAL' />
            </div>
          </div>
        </section>
        <section className='contact-us'>
          <div className='container'>
            <div className='horizental-line'></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserFoodSchedulePagePreWorkout;
