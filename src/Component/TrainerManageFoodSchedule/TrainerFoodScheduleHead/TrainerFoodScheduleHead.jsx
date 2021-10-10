import React from 'react';

function TrainerFoodScheduleHead({ day }) {
  return (
    <>
      <tr>
        <th
          colSpan='5'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          {day}
        </th>
      </tr>
      <tr>
        <th
          colSpan='1'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          Time
        </th>
        <th
          colSpan='2'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          Menu and quantity
        </th>
        <th
          colSpan='2'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          Edit or Delete
        </th>
      </tr>
    </>
  );
}

export default TrainerFoodScheduleHead;
