import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import './UserFoodSchedulePage.css';

function UserFoodSchedulePage() {
  return (
    <div>
      <div className='user-food-schedule-page'>
        <section className='food-menu-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='row-of-food-schedule'>
              <div className='menubar'>
                <MenuBarComponent Page='UserFoodSchedulePage' />
              </div>
              <div className='food-content'>
                <h1 id='head-of-bax-in-main-food-page'>WHAT IS NORMAL PRE PERI POST SNACK ?</h1>
                <div className='content-card'>
                  <ul>
                    <li>PRE is a pre-workout meal.</li>
                    <li>POST is a post-workout meal.</li>
                    <li>SNACK is a snack during the day.</li>
                    <li>NORMAL is any meal during the day. such as morning, noon, evening.</li>
                  </ul>
                </div>
              </div>
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

export default UserFoodSchedulePage;
