import React, { useEffect, useState } from 'react';
import { genWorkoutCols } from '../../service/workoutSchedule';
import Pagination from '../Pagination/Pagination';
import ColorRow from '../UserWorkoutSchedule/ColorRow';
import './WorkoutSchedule.css';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

function WorkoutSchedule({ relation }) {
  const [workoutSchedule, setWorkoutSchedule] = useState([]);
  const [onPage, setOnPage] = useState(2);
  const [colorExercisePostures, setColorExercisePostures] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(7);

  useEffect(() => {
    const fetchColorExercisePosture = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/color_exercise_posture');
        setColorExercisePostures(res.data.colorExercisePostures);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Server failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 3000);
        setLoading(false);
      }
    };
    const fetchWorkoutSchedule = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/workout_schedule/all/${relation.id}`);
        setWorkoutSchedule(res.data.workOutSchedules);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Server failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 3000);
        setLoading(false);
      }
    };
    fetchWorkoutSchedule();
    fetchColorExercisePosture();
  }, [relation]);

  const rowColors = colorExercisePostures.map((colorExercisePosture) => {
    return <ColorRow colorExercisePosture={colorExercisePosture} key={colorExercisePosture.id} />;
  });

  const handleChangeLimit = (e) => {
    setLimit(+e.target.value);
  };

  const workoutRow = workoutSchedule.slice(limit * (onPage - 1), limit * onPage).map((workoutRow) => {
    const { scheduleId, day, exercises } = workoutRow;

    const countExercise = exercises.reduce((acc, cur) => {
      if (cur.haveExercise) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const cols = genWorkoutCols(countExercise, exercises);

    return (
      <tr key={scheduleId}>
        <td
          colSpan='1'
          style={{
            fontWeight: '600',
            fontSize: ' 1.0416666666vw',
            backgroundColor: '#2B90C5',
            color: '#FFF',
            height: '3.125vw',
            width: '14%',
          }}
        >
          {day}
        </td>
        {cols}
      </tr>
    );
  });

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
  }

  return (
    <div className='workout-schedule'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1 id='head-of-workout-schedule'>Workout schedule</h1>
      <label htmlFor='limit'>limit :</label>
      <select id='limit' value={limit} onChange={handleChangeLimit}>
        <option value='7'>7</option>
        <option value='14'>14</option>
        <option value='21'>21</option>
      </select>
      <table id='workout-schedule-table'>
        <col width='100' />
        <col width='100' />
        <col width='100' />
        <thead>
          <tr
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
              height: '3.125vw',
            }}
          >
            <th colSpan='4' style={{ width: '50%' }}>
              Executive posture
            </th>
            <th colSpan='2' style={{ width: '25%' }}>
              Reps x Sets
            </th>
            <th colSpan='2' style={{ width: '25%' }}>
              Break period
            </th>
          </tr>
        </thead>
        <tbody>
          {rowColors}
          {workoutRow}
        </tbody>
      </table>
      <Pagination length={Math.ceil(workoutSchedule.length / limit)} onPage={onPage} setOnPage={setOnPage} />
    </div>
  );
}

export default WorkoutSchedule;
