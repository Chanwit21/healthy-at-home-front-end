import React, { useState } from 'react';
import FoodScheduleHead from '../UserFoodSchedule/FoodScheduleHead';
import UserFoodScheduleRow from '../UserFoodSchedule/UserFoodScheduleRow';
import './FoodSchedule.css';

function firstUpperCase(value) {
  return value[0].toUpperCase() + value.slice(1);
}

function FoodSchedule() {
  const [onDay, setOnDay] = useState('');
  const arrayOfFoodSchedle = [
    {
      day: 'Day1',
      breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
      brunch: 'Choose one good fat SNACK.',
      lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
      afternoon: 'Choose SNACK 1 fruit.',
      dinner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
      lastnight: 'Choose 1 protein menu.',
    },
    {
      day: 'Day2',
      breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
      brunch: 'Choose one good fat SNACK.',
      lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
      afternoon: 'Choose SNACK 1 fruit.',
      dinner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
      lastnight: 'Choose 1 protein menu.',
    },
  ];

  const arrayOfDay = [...arrayOfFoodSchedle.map((item) => item.day)];
  const filterByDay = arrayOfFoodSchedle.find((item) => item.day === onDay);

  function genTableBody(array, day) {
    const tableBody = [];
    for (let key in array) {
      // console.log(key);
      if (key !== 'day') {
        tableBody.push(
          <UserFoodScheduleRow key={`id-${key}`} time={firstUpperCase(key)} menuAndQuality={array[key]} day={day} />
        );
      }
    }
    return tableBody;
  }

  const tableBody = genTableBody(filterByDay, onDay);

  return (
    <div className='food-schedule-contnt'>
      <h1>Food schedule</h1>
      <select name='filterDay' id='day' onChange={(e) => setOnDay(e.target.value)}>
        <option value=''>none</option>
        {arrayOfDay.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {onDay === '' ? null : (
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
