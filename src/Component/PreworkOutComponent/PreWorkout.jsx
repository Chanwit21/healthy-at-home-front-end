import React, { useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import './PreWorkout.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';

import Pagination from '../Pagination/Pagination';

function PreWorkout() {
  const [onPage, setOnPage] = useState(1);
  const [arrayImg, setArrayImg] = useState([preWorkoutImg, postWorkoutImg, preWorkoutImg, postWorkoutImg]);

  const perWorkoutImages = arrayImg.map((item, index) => {
    return (
      <img key={index} src={item} alt='PRE-WORKOUT-MEAL' style={{ display: onPage === index + 1 ? '' : 'none' }} />
    );
  });

  return (
    <div className='PreWorkout'>
      <FoodContentCardComponent
        headerTitle='PRE WORKOUT MEAL'
        title='pre-workout meal 30-90 minutes.'
        contentArray={[
          'Emphasize the powder to have the strength to exercise.',
          'POST is a post-workout meal.',
          'Focus on protein to maintain muscle.',
          'Less fat for faster digestion.',
        ]}
      />
      <section className='img-table'>
        <div className='imgtable-row'>{perWorkoutImages}</div>
        <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />
      </section>
    </div>
  );
}

export default PreWorkout;
