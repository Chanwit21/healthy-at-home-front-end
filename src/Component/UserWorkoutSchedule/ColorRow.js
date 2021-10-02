import React from 'react';

function ColorRow({ element }) {
  return (
    <tr
      style={{
        backgroundColor: element.bgColor,
        color: element.fontColor,
      }}
    >
      <th colSpan={3}>{element.executive_posture}</th>
      <th colSpan={3}>{element.reps_sets}</th>
      <th colSpan={2}>{element.break_period}</th>
    </tr>
  );
}

export default ColorRow;
