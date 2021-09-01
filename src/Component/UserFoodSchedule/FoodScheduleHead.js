import React from 'react';

function FoodScheduleHead({ day }) {
  return (
    <>
      <tr>
        <th
          colSpan='3'
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
          colSpan='1'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          Menu and quantity
        </th>
        <th
          colSpan='1'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
          }}
        >
          Upload Picture
        </th>
      </tr>
    </>
  );
}

export default FoodScheduleHead;
