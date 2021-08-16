import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarLeftForAdminAndTrainerComponent.css';

function NavBarLeftForAdminAndTrainerComponent(props) {
  const { profile, onPage } = props;
  const { imgPath, name, status, imgPosition } = profile;
  return (
    <div className='navbar-left-admin-trainer-component'>
      <section className='img'>
        <div className='img-profile'>
          <img
            src={imgPath}
            alt='imgProfile'
            style={{ objectPosition: imgPosition }}
          />
        </div>
      </section>
      <section className='name-and-status'>
        <span className='name'>{name}</span>
        <span
          className='status'
          style={{
            backgroundColor: status === 'Admin' ? '#ff88a4' : '#61D196',
          }}
        >
          {status}
        </span>
      </section>
      <section className='navcontent'>
        <Link
          style={{
            backgroundColor:
              onPage === 'AdminProfilePage' || onPage === 'TrainerProfilePage'
                ? 'rgba(97, 209, 150, 0.5)'
                : '',
            color:
              onPage === 'AdminProfilePage' || onPage === 'TrainerProfilePage'
                ? '#000000FF'
                : '',
          }}
          to={
            status === 'Admin' ? '/admin-profile-page' : '/trainer-profile-page'
          }
        >
          <h1>Profile</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              onPage === 'AdminCustomersPage' ||
              onPage === 'TrainerCustomersPage'
                ? 'rgba(97, 209, 150, 0.5)'
                : '',
            color:
              onPage === 'AdminCustomersPage' ||
              onPage === 'TrainerCustomersPage'
                ? '#000000FF'
                : '',
          }}
          to={
            status === 'Admin'
              ? '/admin-customers-page'
              : '/trainer-customers-page'
          }
        >
          <h1>Customers</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              onPage === 'AdminManageVediosAndFoodPage' ||
              onPage === 'TrainerManageVideosAndFoodPage'
                ? 'rgba(97, 209, 150, 0.5)'
                : '',
            color:
              onPage === 'AdminManageVediosAndFoodPage' ||
              onPage === 'TrainerManageVideosAndFoodPage'
                ? '#000000FF'
                : '',
          }}
          to={
            status === 'Admin'
              ? '/admin-manage-vedios-and-food-page'
              : '/trainer-manage-vedios-and-food-page'
          }
        >
          <h1>Manage videos and food</h1>
        </Link>
        <Link
          style={{
            backgroundColor:
              onPage === 'AdminSettingPage' || onPage === 'TrainerSettingPage'
                ? 'rgba(97, 209, 150, 0.5)'
                : '',
            color:
              onPage === 'AdminSettingPage' || onPage === 'TrainerSettingPage'
                ? '#000000FF'
                : '',
          }}
          to={
            status === 'Admin' ? '/admin-setting-page' : '/trainer-setting-page'
          }
        >
          <h1>Setting</h1>
        </Link>
        <button>
          <h1>Logout</h1>
        </button>
      </section>
    </div>
  );
}

export default NavBarLeftForAdminAndTrainerComponent;
