import React, { useEffect, useRef, useState } from 'react';
import { formatText } from '../../service/formatting';
import axios from '../../config/axios';

function TrainerManageWorkoutScheduleRow({
  exercisePostureSelect,
  exercisePosture,
  setAlertMessage,
  setAlertBoxColor,
  workoutScheduleId,
}) {
  const [exercisepostureToEdit, setExercisepostureToEdit] = useState(exercisePosture.ExercisePosture);

  const [selectEditExercisePosture, setSelectEditExercisePosture] = useState(exercisepostureToEdit?.id || '');
  const [selectStyle, setSelectStyle] = useState({ color: '', backgroundColor: '' });
  const [isEdit, setIsEdit] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const exerciseSelect = exercisePostureSelect.find((item) => item.id === selectEditExercisePosture);
      if (exerciseSelect) {
        setSelectStyle({
          color: exerciseSelect.fontColor,
          backgroundColor: exerciseSelect.backgroundColor,
        });
      } else {
        setSelectStyle({
          color: '',
          backgroundColor: '',
        });
      }
    }
  }, [selectEditExercisePosture, exercisePostureSelect]);

  const handleClickSave = async (e) => {
    if (exercisePosture.col === 'col1' && !selectEditExercisePosture) {
      setAlertMessage('Col 1 is require!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    } else {
      try {
        await axios.put('/workout_schedule', {
          col: exercisePosture.col,
          workoutScheduleId: workoutScheduleId,
          exercisePostureId: selectEditExercisePosture,
        });
        const exerciseSelect = exercisePostureSelect.find((item) => item.id === selectEditExercisePosture);
        setExercisepostureToEdit(exerciseSelect);
        setAlertMessage('Update Success !!');
        setAlertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessage(''), 2000);
        setIsEdit(false);
      } catch (err) {
        setAlertMessage('Update failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
      }
    }
  };

  const handleClickEdit = (e) => {
    setIsEdit(true);
  };
  const handleClickCancle = (e) => {
    setSelectEditExercisePosture(exercisepostureToEdit?.id || '');
    setIsEdit(false);
  };

  const handleChangeSelect = (e) => {
    setSelectEditExercisePosture(e.target.value);
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
          {formatText(exercisePosture.col)}
        </td>
        <td
          colSpan='2'
          style={{
            width: '65%',
            backgroundColor:
              exercisepostureToEdit && !isEdit ? exercisepostureToEdit.backgroundColor : selectStyle.backgroundColor,
          }}
        >
          {isEdit ? (
            <>
              <select style={selectStyle} value={selectEditExercisePosture} onChange={handleChangeSelect}>
                <option
                  value=''
                  style={{
                    color: '#000',
                    backgroundColor: '#FFF',
                  }}
                >
                  none
                </option>
                {optionToSelect}
              </select>
            </>
          ) : (
            <>
              {exercisepostureToEdit ? (
                <a
                  href={exercisepostureToEdit.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'none', color: exercisepostureToEdit.fontColor }}
                >
                  {exercisepostureToEdit.name}
                </a>
              ) : (
                ''
              )}
            </>
          )}
        </td>
        {isEdit ? (
          <>
            <td colSpan='1' style={{ width: '10%' }}>
              <button className='btn-save' onClick={handleClickSave}>
                Save
              </button>
            </td>
            <td colSpan='1' style={{ width: '10%' }}>
              <button className='btn-clear' onClick={handleClickCancle}>
                Cancle
              </button>
            </td>
          </>
        ) : (
          <td colSpan='2' style={{ width: '20%' }}>
            <button className='btn-edit' onClick={handleClickEdit}>
              Edit
            </button>
          </td>
        )}
      </tr>
    </>
  );
}

export default TrainerManageWorkoutScheduleRow;
