import React from 'react';
import './NavBarLeftForUserComponent.css';
import avatar_image from '../../PIC/Icon/user.png';

function NavBarLeftForUserComponent(props) {
  return (
    <div className='nav-bar-left-for-user-component'>
      <div className='nav-body-box'>
        <div className='img-user' style={{ backgroundImage: `url(${props.profileImage || avatar_image})` }}></div>
        <h1>{props.Name}</h1>
        <span
          className='status'
          style={{
            backgroundColor: props.role === 'ADMIN' ? '#ff88a4' : props.role === 'TRAINER' ? '#61D196' : '#FFF6DD',
          }}
        >
          {props.role}
        </span>
        <div className='link-to-anatherpage-function'>
          <button
            className={`btn-nav${props.Page === 'UserProfilePage' ? ' onPage' : ''}`}
            style={{
              color: props.Page === 'UserProfilePage' ? '#000000FF' : '',
              fontWeight: props.Page === 'UserProfilePage' ? '600' : '',
            }}
            onClick={(e) => props.setOnPage('UserProfilePage')}
          >
            Profile
          </button>
          {props.haveCourseService ? (
            <button
              className={`btn-nav${props.Page === 'UserInprogressProgramPage' ? ' onPage' : ''}`}
              style={{
                color: props.Page === 'UserInprogressProgramPage' ? '#000000FF' : '',
                fontWeight: props.Page === 'UserInprogressProgramPage' ? '600' : '',
              }}
              onClick={(e) => props.setOnPage('UserInprogressProgramPage')}
            >
              Inprogress program
            </button>
          ) : null}

          <button
            className={`btn-nav${props.Page === 'EditProfilePage' ? ' onPage' : ''}`}
            style={{
              color: props.Page === 'EditProfilePage' ? '#000000FF' : '',
              fontWeight: props.Page === 'EditProfilePage' ? '600' : '',
            }}
            onClick={(e) => props.setOnPage('EditProfilePage')}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBarLeftForUserComponent;
