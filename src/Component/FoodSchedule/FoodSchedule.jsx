import React, { useEffect, useState } from 'react';
import FoodScheduleHead from '../UserFoodSchedule/FoodScheduleHead';
import UserFoodScheduleRow from '../UserFoodSchedule/UserFoodScheduleRow';
import './FoodSchedule.css';
import axios from '../../config/axios';

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

function FoodSchedule() {
  const [onDay, setOnDay] = useState('');
  const [relation, setRelation] = useState({});
  const [foodScheDuleByDay, setFoodScheDuleByDay] = useState({});

  useEffect(() => {
    const fetchInprogressProgram = async () => {
      try {
        const res = await axios.get('/inprogress_program/current_program');
        setRelation(res.data.relation);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchInprogressProgram();
  }, []);

  const handleChangeDay = async (e) => {
    setOnDay(e.target.value);
    try {
      if (e.target.value) {
        const res = await axios.get(`/food_schedule/${e.target.value}/${relation.id}`);
        setFoodScheDuleByDay(res.data.foodSchedule);
      }
    } catch (err) {
      console.dir(err);
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

  return (
    <div className='food-schedule-contnt'>
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
