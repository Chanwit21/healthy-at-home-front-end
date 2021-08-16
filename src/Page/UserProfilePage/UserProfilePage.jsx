import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import NavBarLeftForUserComponent from '../../Component/NavBarLeftForUserComponent/NavBarLeftForUserComponent';

import './UserProfilePage.css';

function UserProfilePage() {
  return (
    <div>
      <div className='user-profile-page'>
        <section className='content-in-user-profile-page'>
          <div className='container'>
            <div className='user-profile'>
              <div className='nav-left-user'>
                <NavBarLeftForUserComponent
                  Name='Wuttichai Chankracang'
                  Page='UserProfilePage'
                />
              </div>
              <div className='content-profile-and-consult-trainer'>
                <div className='text-in-content-profile-and-consult-trainer'>
                  <div className='text-row'>
                    <h1>Name</h1>
                    <div className='content-in-right'>
                      <p>Wuttichai Chankracang</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Phone Numbers</h1>
                    <div className='content-in-right'>
                      <p>089-698-xxxx</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Gender</h1>
                    <div className='content-in-right'>
                      <p>Male</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Weight</h1>
                    <div className='content-in-right'>
                      <p>70 kg.</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Heigth</h1>
                    <div className='content-in-right'>
                      <p>170 cm.</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Food you are allergic</h1>
                    <div className='content-in-right'>
                      <p>Shrimp</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Type of food</h1>
                    <div className='content-in-right'>
                      <p>Vegan Food</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Ever lost weight</h1>
                    <div className='content-in-right'>
                      <p>Intermitent Fasting</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Exercise ever done</h1>
                    <div className='content-in-right'>
                      <p>Cardio,Body Weight</p>
                    </div>
                  </div>
                  <div className='text-row'>
                    <h1>Congenital disease</h1>
                    <div className='content-in-right'>
                      <p>Allergy</p>
                    </div>
                  </div>
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

export default UserProfilePage;
