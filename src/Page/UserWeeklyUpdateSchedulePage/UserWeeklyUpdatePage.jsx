import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import UserConsultTrainerComponent from '../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent';
import { Link } from 'react-router-dom';
import './UserWeeklyUpdatePage.css';
import trainerThisIsEngineering from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';

function UserWeeklyUpdatePage() {
  return (
    <div>
      <div className='user-weekly-update-page'>
        <section className='weekly-update-menu-bar-left-in-user-weekly-update-page'>
          <div className='container'>
            <div className='row-of-weekly-update'>
              <div className='menubar'>
                <MenuBarComponent Page='UserWeeklyUpdatePage' />
              </div>
              <div className='form-weekly-update'>
                <form action='#'>
                  <div className='row-of-content-in-form' id='first-of-row'>
                    <div className='content-left-or-top'>
                      <label htmlFor='weight'>Weight (kg.)</label>
                      <br />
                      <input type='text' name='weight' id='weight' />
                    </div>
                    <div className='content-right-or-bottom' id='first-row'>
                      <label htmlFor='count-day-per-week'>
                        Number of days exercising in the last 7 days.
                      </label>
                      <br />
                      <input
                        type='text'
                        name='exercise-day-per-week'
                        id='count-day-per-week'
                      />
                    </div>
                  </div>
                  <div className='row-of-content-in-form'>
                    <div className='content-left-or-top'>
                      <label htmlFor='fat-percentage'>Fat percentage(%)</label>
                      <br />
                      <input
                        type='text'
                        name='fat-percentage'
                        id='fat-percentage'
                      />
                    </div>
                    <div className='content-right-or-bottom'>
                      <label htmlFor='muscle-percentage(%)'>
                        Muscle percentage(%)
                      </label>
                      <br />
                      <input
                        type='text'
                        name='muscle-percentage(%)'
                        id='muscle-percentage(%)'
                      />
                    </div>
                  </div>
                  <div className='row-of-content-in-form'>
                    <div className='content-left-or-top'>
                      <label htmlFor='circumference-thigh'>
                        Circumference, Thigh
                      </label>
                      <br />
                      <input
                        type='text'
                        name='circumference-thigh'
                        id='circumference-thigh'
                      />
                    </div>
                    <div className='content-right-or-bottom'>
                      <label htmlFor='circumference-mid-upper-arm'>
                        Circumference, Mid-Upper Arm
                      </label>
                      <br />
                      <input
                        type='text'
                        name='circumference-mid-upper-arm'
                        id='circumference-mid-upper-arm'
                      />
                    </div>
                  </div>
                  <div className='row-of-content-in-form'>
                    <div className='content-left-or-top'>
                      <label htmlFor='girth'>Girth</label>
                      <br />
                      <input type='text' name='girth' id='girth' />
                    </div>
                  </div>
                  <div className='row-of-content-in-form'>
                    <div className='content-left-or-top'>
                      <h1>Front photo</h1>
                      <div className='drag-and-drop-front-photo'>
                        <h2>Drag and Drop</h2>
                        <h2>or</h2>
                        <h2>
                          <span>Browse</span>
                        </h2>
                      </div>
                    </div>
                    <div className='content-right-or-bottom'>
                      <h1>Front photo</h1>
                      <div className='drag-and-drop-front-photo'>
                        <h2>Drag and Drop</h2>
                        <h2>or</h2>
                        <h2>
                          <span>Browse</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <input type='submit' value='Submit' />
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='consult-trainer'>
          <div className='container'>
            <div className='consult-trainer-row'>
              <div className='consult-trainer'>
                <Link to='/chatpage'>
                  <UserConsultTrainerComponent
                    pathOfImg={trainerThisIsEngineering}
                    nickName='Trainer Job'
                    Fullname='Thanapob SingHaseanee'
                  />
                </Link>
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

export default UserWeeklyUpdatePage;
