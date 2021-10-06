import React from 'react';
import './UserInprogressProgramCardComponent.css';

function UserInprogressProgramCardComponent(props) {
  return (
    <div className='user-inprogress-program-card-component'>
      <div className='content-box'>
        <div className='content-in-content-box'>
          <h1>{props.ProgramName}</h1>
          <p>{props.ContentInProgram}</p>
          <button>Go To Program</button>
        </div>
      </div>
      <div className='img-program' style={{ backgroundImage: `url(${props.Image})` }}></div>
    </div>
  );
}

export default UserInprogressProgramCardComponent;
