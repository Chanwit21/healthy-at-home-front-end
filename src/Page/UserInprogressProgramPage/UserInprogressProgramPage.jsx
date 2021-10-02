import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import NavBarLeftForUserComponent from '../../Component/NavBarLeftForUserComponent/NavBarLeftForUserComponent';
import UserInprogressProgramCardComponent from '../../Component/UserInprogressProgramCardComponent/UserInprogressProgramCardComponent';
import './UserInprogressProgramPage.css';
import { Link } from 'react-router-dom';

function UserInprogressProgramPage() {
  return (
    <div>
      <div className='inprogress-program-page'>
        <section className='content-in-inprogress-program-page'>
          <div className='container'>
            <div className='inprogress-program'>
              <div className='nav-left-user'>
                <NavBarLeftForUserComponent Name='Wuttichai Chankracang' Page='UserInprogressProgramPage' />
              </div>
              <div className='inprogress-course-enrolled-and-consult-trainer'>
                <Link
                  to='/user-workout-schedule-page'
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                  }}
                >
                  <UserInprogressProgramCardComponent
                    ProgramName='45 Days Program'
                    ContentInProgram='Suitable for people who want to change their shape in a short time.'
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

export default UserInprogressProgramPage;
