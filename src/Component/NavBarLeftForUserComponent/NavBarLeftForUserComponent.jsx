import React from 'react';
import './NavBarLeftForUserComponent.css';
import avatar_image from '../../PIC/Icon/user.png';

function NavBarLeftForUserComponent(props) {
  const pagNavLeft = {
    TRAINER: [
      { page: 'TrainerCustomerPage', title: 'Customer' },
      { page: 'TrainerFoodMenuPage', title: 'Food menu' },
      { page: 'TrainerExerciseVedioPage', title: 'Exercise vedio' },
    ],
    ADMIN: [{ page: '', title: '' }],
  };

  const addOnNav = ['TRAINER', 'ADMIN'].includes(props.role)
    ? pagNavLeft[props.role].map((item, index) => {
        return (
          <button
            key={index}
            className={`btn-nav${props.Page === item.page ? ' onPage' : ''}`}
            style={{
              color: props.Page === item.page ? '#000000FF' : '',
              fontWeight: props.Page === item.page ? '600' : '',
            }}
            onClick={(e) => props.setOnPage(item.page)}
          >
            {item.title}
          </button>
        );
      })
    : null;

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

          {addOnNav}

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
