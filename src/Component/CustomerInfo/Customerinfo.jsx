import React from 'react';
import './Customerinfo.css';
import { formatText } from '../../service/formatting';

function Customerinfo({ profile }) {
  const showProfile = Object.keys(profile).map((item, index) => {
    if (profile[item] && item !== 'userId') {
      return (
        <div className='text-row' key={index}>
          <h1>{formatText(item)}</h1>
          <div className='content-in-right'>
            <p>{profile[item]}</p>
          </div>
        </div>
      );
    }
    return null;
  });
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

        {showProfile}
      </div>
    </div>
  );
}

export default Customerinfo;
