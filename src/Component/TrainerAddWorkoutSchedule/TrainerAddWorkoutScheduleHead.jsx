import React from 'react';

function TrainerAddWorkoutScheduleHead({ day }) {
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
            width: '15%',
          }}
        >
          Col.
        </th>
        <th
          colSpan='4'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
            width: '85%',
          }}
        >
          Exercise
        </th>
      </tr>
    </>
  );
}

export default TrainerAddWorkoutScheduleHead;
