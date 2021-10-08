import React from 'react';

function ColorRow({ colorExercisePosture }) {
  return (
    <tr
      style={{
        backgroundColor: colorExercisePosture.backgroundColor,
        color: colorExercisePosture.fontColor,
      }}
    >
      <th colSpan={3}>{colorExercisePosture.title}</th>
      <th colSpan={3}>{colorExercisePosture.repSet}</th>
      <th colSpan={2}>{colorExercisePosture.breakPeriod}</th>
    </tr>
  );
}

export default ColorRow;
