import React, { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import { formatText } from '../../service/formatting';

function TrainerAddWorkoutScheduleRow({
  col,
  setExercisePosture,
  exercisePosture,
  error,
  setAlertMessageMain,
  setAlertBoxColor,
}) {
  const [exercisePostureSelect, setExercisePostureSelect] = useState([]);
  const [selectStyle, setSelectStyle] = useState({ color: '', backgroundColor: '' });
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchExercisePosture = async () => {
      try {
        const res = await axios.get('/exercise');
        setExercisePostureSelect(res.data.exercisePostures);
      } catch (err) {
        setAlertMessageMain('Server is denine!');
        setAlertBoxColor('alert-box-invalid');
      }
    };
    fetchExercisePosture();
  }, [setExercisePostureSelect, setAlertMessageMain, setAlertBoxColor]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const exercise = exercisePostureSelect.find((item) => item.id === exercisePosture[col]);
      if (exercise) {
        setSelectStyle({
          color: exercise.fontColor,
          backgroundColor: exercise.backgroundColor,
        });
      } else {
        setSelectStyle({
          color: '',
          backgroundColor: '',
        });
      }
    }
  }, [exercisePosture, exercisePostureSelect, col]);

  const handleChangeSelect = (e) => {
    setExercisePosture((cur) => {
      const clone = { ...cur };
      clone[col] = e.target.value;
      return clone;
    });
  };

  const optionToSelect = exercisePostureSelect.map((exercise) => (
    <option
      key={exercise.id}
      value={exercise.id}
      style={{
        color: exercise.fontColor,
        backgroundColor: exercise.backgroundColor,
      }}
    >
      {exercise.name}
    </option>
  ));

  return (
    <>
      <tr>
        <td colSpan='1' style={{ paddingLeft: '2vw', paddingRight: '2vw', width: '15%' }}>
          {formatText(col)}
        </td>
        <td
          colSpan='2'
          style={{
            width: '65%',
          }}
        >
          <>
            <select style={selectStyle} value={exercisePosture[col]} onChange={handleChangeSelect}>
              <option value='' style={{ color: '#000', backgroundColor: '#FFF' }}>
                none
              </option>
              {optionToSelect}
            </select>
            {error[col] ? <div className='invalid-text'>{error[col]}</div> : null}
          </>
        </td>
      </tr>
    </>
  );
}

export default TrainerAddWorkoutScheduleRow;
