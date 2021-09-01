import React from 'react';

function CardioDayRow({ day, backgroundColor, fontColor, link, name }) {
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
        colSpan='7'
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <a
          target='_blank'
          rel='noreferrer'
          href={link}
          style={{
            color: fontColor,
            fontSize: '2.5vw',
          }}
        >
          {name}
        </a>
      </td>
      <td colSpan='1' style={{ backgroundColor: '#FFFFFF' }} className='checkBox'>
        <input type='checkbox' name={`execise-${day}`} id={`execise ${day}`} />
        <label htmlFor={`execise ${day}`}>Success</label>
      </td>
    </tr>
  );
}

export default CardioDayRow;
