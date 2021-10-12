import React from 'react';

function ColorRow({ colorExercisePosture }) {
  return (
    <tr
      style={{
        backgroundColor: colorExercisePosture.backgroundColor,
        color: colorExercisePosture.fontColor,
      }}
    >
      <th colSpan={4} style={{ width: '50%' }}>
        {colorExercisePosture.title}
      </th>
      <th colSpan={2} style={{ width: '25%' }}>
        {colorExercisePosture.repSet}
      </th>
      <th colSpan={2} style={{ width: '25%' }}>
        {colorExercisePosture.breakPeriod}
      </th>
    </tr>
  );
}

export default ColorRow;
