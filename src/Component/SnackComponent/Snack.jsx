import React, { useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import Pagination from '../Pagination/Pagination';
import './Snack.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';

function Snack() {
  const [onPage, setOnPage] = useState(1);
  const [arrayImg, setArrayImg] = useState([
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
    postWorkoutImg,
    preWorkoutImg,
    postWorkoutImg,
  ]);

  const perWorkoutImages = arrayImg.map((item, index) => {
    return (
      <img key={index} src={item} alt='PRE-WORKOUT-MEAL' style={{ display: onPage === index + 1 ? '' : 'none' }} />
    );
  });

  return (
    <div className='Snack'>
      <FoodContentCardComponent
        headerTitle='SNACK'
        title='Pre-workout meal 30-90 minutes.'
        contentArray={[
          'Emphasize flour to have energy.',
          'Focus on protein to maintain muscle.',
          'Less fat for faster digestion',
        ]}
      />
      <section className='img-table'>
        <div className='imgtable-row'>{perWorkoutImages}</div>
        <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />
      </section>
    </div>
  );
}

export default Snack;
