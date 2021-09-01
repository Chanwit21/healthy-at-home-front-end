import React from 'react';

function RestDayRow({ day, backgroundColor, fontColor, name }) {
  return (
    <tr className='contentExercise'>
      <td
        style={{
          backgroundColor: '#2B90C5',
          color: '#FFF',
        }}
      >
        {day}
      </td>
      <td
        colSpan='8'
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <span
          style={{
            color: fontColor,
            fontSize: '2.5vw',
          }}
        >
          {name}
        </span>
      </td>
    </tr>
  );
}

export default RestDayRow;
