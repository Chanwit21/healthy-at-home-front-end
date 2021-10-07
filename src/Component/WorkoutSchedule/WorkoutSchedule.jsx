import React, { useState } from 'react';
import { COLOR_OF_THE_TYPE_OF_EXERCISE, MOCK_USER } from '../../mocks/user_data';
import { genWorkoutRow } from '../../service/workoutSchedule';
// import { filterWorkoutAndRestDay } from '../../service/workoutSchedule';
import Pagination from '../Pagination/Pagination';
import ColorRow from '../UserWorkoutSchedule/ColorRow';
// import SwitchRestDay from '../UserWorkoutSchedule/SwitchResDay/SwitchRestDay';
import './WorkoutSchedule.css';

function WorkoutSchedule() {
  const [onPage, setOnPage] = useState(2);

  const rowColors = COLOR_OF_THE_TYPE_OF_EXERCISE.map((element) => {
    return <ColorRow element={element} key={element.id} />;
  });

  const { workout_schedule } = MOCK_USER.find((item) => item.id === 1);

  // const restDay = filterWorkoutAndRestDay(workout_schedule).rest;

  // const workoutDay = filterWorkoutAndRestDay(workout_schedule).workout;

  const workoutRow = genWorkoutRow(workout_schedule);
  return (
    <div className='workout-schedule'>
      <h1 id='head-of-workout-schedule'>Workout schedule</h1>
      <table id='workout-schedule-table'>
        <thead>
          <tr
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
              height: '3.125vw',
            }}
          >
            <th colSpan='3'>Executive posture</th>
            <th colSpan='3'>Reps x Setss</th>
            <th colSpan='2'>Break period</th>
          </tr>
        </thead>
        <tbody>
          {rowColors}
          {workoutRow}
        </tbody>
      </table>
      {/* <SwitchRestDay restDay={restDay} workoutDay={workoutDay} /> */}
      <Pagination length={3} onPage={onPage} setOnPage={setOnPage} />
    </div>
  );
}

export default WorkoutSchedule;
