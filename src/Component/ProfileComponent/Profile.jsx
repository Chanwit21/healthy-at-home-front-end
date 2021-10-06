import React from 'react';
import './Profile.css';

function Profile({ profile }) {
  return (
    <div className='content-profile-and-consult-trainer'>
      <div className='text-in-content-profile-and-consult-trainer'>
        <div className='text-row'>
          <h1>Name</h1>
          <div className='content-in-right'>
            <p>
              {profile.firstName} {profile.lastName}
            </p>
          </div>
        </div>

        {profile.email ? (
          <div className='text-row'>
            <h1>Email</h1>
            <div className='content-in-right'>
              <p>{profile.email}</p>
            </div>
          </div>
        ) : null}

        {profile.phoneNumber ? (
          <div className='text-row'>
            <h1>Phone Numbers</h1>
            <div className='content-in-right'>
              <p>{profile.phoneNumber}</p>
            </div>
          </div>
        ) : null}

        {profile.gender ? (
          <div className='text-row'>
            <h1>Gender</h1>
            <div className='content-in-right'>
              <p>{profile.gender}</p>
            </div>
          </div>
        ) : null}

        {profile.weight ? (
          <div className='text-row'>
            <h1>Weight</h1>
            <div className='content-in-right'>
              <p>{profile.weight} kg.</p>
            </div>
          </div>
        ) : null}

        {profile.height ? (
          <div className='text-row'>
            <h1>Heigth</h1>
            <div className='content-in-right'>
              <p>{profile.height} cm.</p>
            </div>
          </div>
        ) : null}

        {profile.education ? (
          <div className='text-row'>
            <h1>Education</h1>
            <div className='content-in-right'>
              <p>{profile.education}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Profile;
