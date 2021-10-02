import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import './UserFoodSchedulePagePostWorkout.css';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';

function UserFoodSchedulePagePostWorkout() {
  return (
    <div>
      <div className='user-food-schedule-page-post-workout'>
        <section className='food-menu-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='row-of-food-card'>
              <div className='menubar'>
                <MenuBarComponent Page='UserFoodSchedulePage' FoodMenu='UserFoodSchedulePagePostWorkout' />
              </div>
              <div className='food-content-card'>
                <div className='content-card'>
                  <h1>POST WORKOUT MEAL</h1>
                  <p>Meal after exercise 30-60 minutes.</p>
                  <ul>
                    <li>The most important meal of the day</li>
                    <li>Emphasize powder X2 to give strength to TRAIN the next day.</li>
                    <li>Focus on protein to repair and strengthen muscles.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='img-table'>
          <div className='container'>
            <div className='imgtable-row'>
              <img src={postWorkoutImg} alt='POST-WORKOUT-MEAL' />
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

export default UserFoodSchedulePagePostWorkout;
