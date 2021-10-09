import axios from '../../config/axios';
import React, { useEffect, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import TrainerManageWorkoutScheduleHead from './TrainerManageWorkoutScheduleHead';
import TrainerManageWorkoutScheduleRow from './TrainerManageWorkoutScheduleRow';

function TrainerManageWorkoutSchedule({ workoutSchedule }) {
  const [colorExercise, setColorExercise] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('');

  useEffect(() => {
    const fetchColorExercise = async () => {
      try {
        const res = await axios.get('/color_exercise_posture');
        setColorExercise(res.data.colorExercisePostures);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchColorExercise();
  }, []);

  const tableBody = workoutSchedule.ExercisePostureWorkoutSchedules.map((item) => {
    return (
      <TrainerManageWorkoutScheduleRow
        key={item.id}
        exercisePosture={item}
        setAlertMessage={setAlertMessage}
        setAlertBoxColor={setAlertBoxColor}
        workoutScheduleId={workoutSchedule.id}
      />
    );
  });

  return (
    <div className='food-schedule-trainer'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Workout schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <tr
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
              height: '3.125vw',
            }}
          >
            <th colSpan='2'>Executive posture</th>
            <th colSpan='1.5'>Reps x Setss</th>
            <th colSpan='1.5'>Break period</th>
          </tr>

          {colorExercise.map((element) => {
            return (
              <tr
                key={element.id}
                style={{
                  backgroundColor: element.backgroundColor,
                  color: element.fontColor,
                  fontSize: '1.5vw',
                }}
              >
                <th colSpan='2' style={{ color: 'inherit', backgroundColor: 'inherit', fontSize: 'inherit' }}>
                  {element.title}
                </th>
                <th colSpan='1.5' style={{ color: 'inherit', backgroundColor: 'inherit', fontSize: 'inherit' }}>
                  {element.repSet}
                </th>
                <th colSpan='1.5' style={{ color: 'inherit', backgroundColor: 'inherit', fontSize: 'inherit' }}>
                  {element.breakPeriod}
                </th>
              </tr>
            );
          })}
          <TrainerManageWorkoutScheduleHead day={workoutSchedule.day} />
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}

export default TrainerManageWorkoutSchedule;
