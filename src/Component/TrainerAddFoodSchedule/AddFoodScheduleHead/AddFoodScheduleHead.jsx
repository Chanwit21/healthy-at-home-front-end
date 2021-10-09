import React from 'react';

function AddFoodScheduleHead({ day }) {
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
          Clear
        </th>
      </tr>
    </>
  );
}

export default AddFoodScheduleHead;
