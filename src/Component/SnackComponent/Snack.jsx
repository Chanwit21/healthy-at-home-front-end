import React, { useEffect, useState } from 'react';
import FoodContentCardComponent from '../FoodContentCardComponent/FoodContentCardComponent';
import Pagination from '../Pagination/Pagination';
import './Snack.css';
import preWorkoutImg from '../../PIC/FoodTable/PRE-WORKOUT-MEAL.jpg';
import postWorkoutImg from '../../PIC/FoodTable/POST-WORKOUT-MEAL.jpg';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';

function Snack() {
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
    fetchImage('food_menu_snack');
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
    <div className='Snack'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={'alert-box-invalid'} /> : null}
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
        {arrayImg.length === 0 ? null : <Pagination length={arrayImg.length} onPage={onPage} setOnPage={setOnPage} />}
      </section>
    </div>
  );
}

export default Snack;
