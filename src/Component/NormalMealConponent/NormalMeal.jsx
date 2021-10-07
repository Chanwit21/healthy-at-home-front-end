import React, { useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import Pagination from '../Pagination/Pagination';
import './NormalMeal.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';

function NormalMeal() {
  const [onPage, setOnPage] = useState(1);
  const [arrayImg, setArrayImg] = useState([
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
  ]);

  const perWorkoutImages = arrayImg.map((item, index) => {
    return (
      <img key={index} src={item} alt='PRE-WORKOUT-MEAL' style={{ display: onPage === index + 1 ? '' : 'none' }} />
    );
  });

  return (
    <div className='NormalMeal'>
      <FoodContentCardComponent
        headerTitle='NORMAL MEAL'
        title='Meal during the day.'
        contentArray={[
          'There should be vegetables to keep you full for a long time.',
          "There shouldn't be too much flour.",
          'Do not add more sugar.',
        ]}
      />
      <section className='img-table'>
        <div className='imgtable-row'>{perWorkoutImages}</div>
        <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />
      </section>
    </div>
  );
}

export default NormalMeal;
