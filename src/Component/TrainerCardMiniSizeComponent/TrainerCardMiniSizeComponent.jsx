import React from 'react';
import './TrainerCardMiniSizeComponent.css';

function TrainerCardMiniSizeComponent(props) {
  const { pathOfImg, nickName, Fullname } = props;
  return (
    <div>
      <div className="trainer-cardmini">
        <div
          className="trainer-picmini"
          style={{
            backgroundImage: `url(${pathOfImg})`,
          }}
        ></div>
        <div className="text-in-trainer-cardmini">
          <h1>{nickName}</h1>
          <p>{Fullname}</p>
        </div>
      </div>
    </div>
  );
}

export default TrainerCardMiniSizeComponent;
