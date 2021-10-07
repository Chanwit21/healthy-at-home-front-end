import React from 'react';
import './FoodContentCardComponent.css';

function FoodContentCardComponent(props) {
  const { headerTitle, title, contentArray } = props;
  const contents = contentArray.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className='food-content-card'>
      <div className='content-card'>
        <h1>{headerTitle}</h1>
        {title ? <p>{title}</p> : null}
        <ul>{contents}</ul>
      </div>
    </div>
  );
}

export default FoodContentCardComponent;
