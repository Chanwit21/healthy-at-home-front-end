import React, { useState } from 'react';
import './TrainerManageFoodSchedule.css';
import TrainnerFoodScheduleRow from './TrainnerFoodScheduleRow/TrainnerFoodScheduleRow';
import TrainerFoodScheduleHead from './TrainerFoodScheduleHead/TrainerFoodScheduleHead';

function TrainerManageFoodSchedule({ foodSchedule, setFoodSchedule }) {
  const [isHaveEdit, setIsHaveEdit] = useState(false);
  const tableBody = Object.keys(foodSchedule).map((item, index) => {
    if (['breakfast', 'brunch', 'lunch', 'afternoon', 'diner', 'lastnight'].includes(item)) {
      return (
        <TrainnerFoodScheduleRow
          key={index}
          time={item}
          menuAndQuality={foodSchedule[item]}
          foodSchedule={foodSchedule}
          setFoodSchedule={setFoodSchedule}
          setIsHaveEdit={setIsHaveEdit}
        />
      );
    }
    return null;
  });

  return (
    <div className='food-schedule-trainer'>
      <h1>Food schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <TrainerFoodScheduleHead day={foodSchedule.day} />
        </thead>
        <tbody>
          {tableBody}
          {isHaveEdit ? (
            <tr>
              <td colSpan='5'>
                <input type='submit' value='Submit' />
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerManageFoodSchedule;
