import React, { useEffect, useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import Pagination from '../Pagination/Pagination';
import './PostWorkout.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';

function PostWorkout() {
  const [onPage, setOnPage] = useState(1);
  const [arrayImg, setArrayImg] = useState([
    { id: 1, imageLink: preWorkoutImg },
    { id: 2, imageLink: postWorkoutImg },
  ]);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchImage = async (type) => {
      try {
        const res = await axios.get(`/food_image?type=${type}`);
        setArrayImg(res.data.images);
      } catch (err) {
        setAlertMessage('Server regected.');
      }
    };
    fetchImage('food_menu_postworkout');
  }, []);

  const perWorkoutImages = arrayImg.map((item, index) => {
    return (
      <img
        key={item.id}
        src={item.imageLink}
        alt='PRE-WORKOUT-MEAL'
        style={{ display: onPage === index + 1 ? '' : 'none' }}
      />
    );
  });

  return (
    <div className='PostWorkout'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={'alert-box-invalid'} /> : null}
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
        {arrayImg.length === 0 ? null : <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />}
      </section>
    </div>
  );
}

export default PostWorkout;
