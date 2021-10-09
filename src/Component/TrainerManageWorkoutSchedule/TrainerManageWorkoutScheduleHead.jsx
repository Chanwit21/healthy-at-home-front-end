import React from 'react';

function TrainerManageWorkoutScheduleHead({ day }) {
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
          colSpan='2'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
            width: '65%',
          }}
        >
          Exercise
        </th>
        <th
          colSpan='2'
          style={{
            backgroundColor: '#61D196',
            color: '#FFF',
            width: '20%',
          }}
        >
          Edit
        </th>
      </tr>
    </>
  );
}

export default TrainerManageWorkoutScheduleHead;
