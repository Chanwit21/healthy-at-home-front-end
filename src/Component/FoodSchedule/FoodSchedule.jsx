import React, { useState } from 'react';
import FoodScheduleHead from '../UserFoodSchedule/FoodScheduleHead';
import UserFoodScheduleRow from '../UserFoodSchedule/UserFoodScheduleRow';
import './FoodSchedule.css';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import AlertBox from '../AlertBox/AlertBox';

function firstUpperCase(value) {
  return value[0].toUpperCase() + value.slice(1);
}

function createArrayDay(number) {
  const result = [];
  for (let i = 1; i <= +number; i++) {
    result.push(i);
  }
  return result;
}

function FoodSchedule({ relation }) {
  const [onDay, setOnDay] = useState('');
  const [foodScheDuleByDay, setFoodScheDuleByDay] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);

  const handleChangeDay = async (e) => {
    setOnDay(e.target.value);
    try {
      if (e.target.value) {
        setLoading(true);
        const res = await axios.get(`/food_schedule/${e.target.value}/${relation.id}`);
        setFoodScheDuleByDay(res.data.foodSchedule);
        setLoading(false);
      }
    } catch (err) {
      setAlertMessage('Server failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const arrayOfDay = createArrayDay(relation?.CourseService?.day || 0);

  function genTableBody(obj) {
    const timeRow = ['breakfast', 'brunch', 'lunch', 'afternoon', 'diner', 'lastnight'];
    const tableBody = [];
    for (let key of timeRow) {
      tableBody.push(<UserFoodScheduleRow key={`id-${key}`} time={firstUpperCase(key)} menuAndQuality={obj[key]} />);
    }
    return tableBody;
  }

  const tableBody = foodScheDuleByDay ? genTableBody(foodScheDuleByDay) : null;

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
  }

  return (
    <div className='food-schedule-contnt'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Food schedule</h1>
      <select name='filterDay' id='day' onChange={handleChangeDay} value={onDay}>
        <option value=''>none</option>
        {arrayOfDay.map((item, index) => {
          return (
            <option key={index} value={`Day${item}`}>
              {`Day${item}`}
            </option>
          );
        })}
      </select>
      {onDay === '' || !foodScheDuleByDay ? null : (
        <table id='food-schedule-table'>
          <thead>
            <FoodScheduleHead day={onDay} />
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      )}
    </div>
  );
}

export default FoodSchedule;
