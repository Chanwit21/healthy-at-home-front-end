import React, { useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import Pagination from '../Pagination/Pagination';
import './PostWorkout.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';

function PostWorkout() {
  const [onPage, setOnPage] = useState(1);
  const [arrayImg, setArrayImg] = useState([preWorkoutImg, postWorkoutImg]);

  const perWorkoutImages = arrayImg.map((item, index) => {
    return (
      <img key={index} src={item} alt='PRE-WORKOUT-MEAL' style={{ display: onPage === index + 1 ? '' : 'none' }} />
    );
  });

  return (
    <div className='PostWorkout'>
      <FoodContentCardComponent
        headerTitle='POST WORKOUT MEAL'
        title='Meal after exercise 30-60 minutes.'
        contentArray={[
          'The most important meal of the day.',
          'Emphasize powder X2 to give strength to TRAIN the next day.',
          'Focus on protein to repair and strengthen muscles.',
        ]}
      />
      <section className='img-table'>
        <div className='imgtable-row'>{perWorkoutImages}</div>
        <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />
      </section>
    </div>
  );
}

export default PostWorkout;
