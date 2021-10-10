import axios from '../../config/axios';
import React, { useEffect, useRef, useState } from 'react';
import TrainerAddWorkoutScheduleHead from './TrainerAddWorkoutScheduleHead';
import TrainerAddWorkoutScheduleRow from './TrainerAddWorkoutScheduleRow';

function TrainerAddWorkoutSchedule({
  exercisePostureSelect,
  onDay,
  setAlertMessageMain,
  setAlertBoxColor,
  relationId,
  fetchWorkoutSchedule,
}) {
  const [exercisePosture, setExercisePosture] = useState({
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
    col7: '',
  });
  const [error, setError] = useState({
    col1: '',
    col2: '',
    col3: '',
    col4: '',
    col5: '',
    col6: '',
    col7: '',
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    }
  }, []);

  const handleSubmitAddFoodSachdule = async (e) => {
    e.preventDefault();
    if (!exercisePosture.col1) {
      setError((cur) => ({ ...cur, col1: 'Col 1 is require.' }));
    } else {
      try {
        await axios.post('/workout_schedule', {
          day: onDay,
          relationId,
          ...exercisePosture,
        });
        fetchWorkoutSchedule(relationId, onDay);
        setAlertMessageMain('Create successful.');
        setAlertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessageMain(''), 3000);
      } catch (err) {
        setAlertMessageMain('Can not create workout schedule.');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessageMain(''), 3000);
      }
    }
  };

  const tableBody = Object.keys(exercisePosture).map((col, index) => {
    return (
      <TrainerAddWorkoutScheduleRow
        key={index}
        col={col}
        exercisePosture={exercisePosture}
        setExercisePosture={setExercisePosture}
        error={error}
        exercisePostureSelect={exercisePostureSelect}
      />
    );
  });

  return (
    <div className='food-schedule-trainer'>
      <h1>Workout schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <TrainerAddWorkoutScheduleHead day={onDay} />
        </thead>
        <tbody>
          {tableBody}
          <td colSpan='5'>
            <form onSubmit={handleSubmitAddFoodSachdule}>
              <input type='submit' value='Submit' />
            </form>
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default TrainerAddWorkoutSchedule;
