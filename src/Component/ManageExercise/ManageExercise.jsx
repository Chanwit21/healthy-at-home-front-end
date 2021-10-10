import React, { useEffect, useRef, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import './ManageExercise.css';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import ManageExerciseRow from './ManageExerciseRow';
import AddExercisePosture from './AddExercisePosture';

function ManageExercise() {
  const [colorExercises, setColorExercises] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const isFirstRender = useRef(true);

  const fetchColorExercise = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/color_exercise_posture');
      setColorExercises(res.data.colorExercisePostures);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 1000);
    }
  };

  const updateColorExercises = (id, colorExercise) => {
    const clone = [...colorExercises];
    const idx = clone.findIndex((item) => item.id === id);
    if (idx !== -1) {
      clone[idx] = { ...colorExercise };
    }
    setColorExercises(clone);
  };

  const addColorExercises = async (colorExercise) => {
    try {
      setLoading(true);
      const clone = [...colorExercises];
      const res = await axios.post('/color_exercise_posture', { ...colorExercise });
      clone.unshift(res.data.colorExercisePosture);
      setColorExercises(clone);
      setAlertMessage('Create color Successful!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setIsAdding(false);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Create color failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    }
  };

  const deleteColorExercises = async (id) => {
    try {
      setLoading(true);
      axios.delete(`/color_exercise_posture/${id}`);
      const clone = [...colorExercises].filter((item) => item.id !== id);
      setColorExercises(clone);
      setAlertMessage('Delete color Successful!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 1000);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Delete color failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 1000);
    }
  };

  useEffect(() => {
    fetchColorExercise();
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    }
  }, []);

  const handleClickPlus = () => {
    setIsAdding(true);
  };

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
    <div className='manage-exercise'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Workout schedule</h1>
      <table id='manage-exercise'>
        <thead>
          <tr
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
              height: '3.125vw',
            }}
          >
            <th colSpan='2' style={{ width: '40%' }}>
              Executive posture
            </th>
            <th colSpan='1'>Reps x Setss</th>
            <th colSpan='2'>Break period</th>
            <th colSpan='2'>Edit or Delete</th>
          </tr>

          {colorExercises.map((colorExercise) => {
            return (
              <ManageExerciseRow
                key={colorExercise.id}
                colorExercise={colorExercise}
                setAlertMessage={setAlertMessage}
                setAlertBoxColor={setAlertBoxColor}
                setLoading={setLoading}
                updateColorExercises={updateColorExercises}
                deleteColorExercises={deleteColorExercises}
              />
            );
          })}
          {isAdding ? (
            <AddExercisePosture addColorExercises={addColorExercises} />
          ) : (
            <tr>
              <th colSpan='7'>
                <button
                  className='btn-save'
                  style={{ backgroundColor: '#4CAF50', margin: '1vw auto' }}
                  onClick={handleClickPlus}
                >
                  <i className='bi bi-plus'></i>
                </button>
              </th>
            </tr>
          )}
        </thead>
      </table>
    </div>
  );
}

export default ManageExercise;
