import React, { useEffect, useRef, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import TrainerManageWorkoutScheduleHead from './TrainerManageWorkoutScheduleHead';
import TrainerManageWorkoutScheduleRow from './TrainerManageWorkoutScheduleRow';

function TrainerManageWorkoutSchedule({ workoutSchedule, deleteWorkoutScheDule, exercisePostureSelect }) {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    }
  }, []);

  const handleClickDelete = (e) => {
    deleteWorkoutScheDule(workoutSchedule.id);
  };

  const tableBody = workoutSchedule.ExercisePostureWorkoutSchedules.map((item) => {
    return (
      <TrainerManageWorkoutScheduleRow
        key={item.id}
        exercisePosture={item}
        setAlertMessage={setAlertMessage}
        setAlertBoxColor={setAlertBoxColor}
        workoutScheduleId={workoutSchedule.id}
        exercisePostureSelect={exercisePostureSelect}
      />
    );
  });

  return (
    <div className='food-schedule-trainer'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Workout schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <TrainerManageWorkoutScheduleHead day={workoutSchedule.day} />
        </thead>
        <tbody>
          {tableBody}
          <tr>
            <td colSpan='5'>
              <button className='btn-delete' onClick={handleClickDelete}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TrainerManageWorkoutSchedule;
