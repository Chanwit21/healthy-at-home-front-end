import React, { useState } from 'react';
import { formatText } from '../../service/formatting';
import axios from '../../config/axios';

function ManageExerciseRow({
  deleteColorExercises,
  colorExercise,
  setAlertMessage,
  setAlertBoxColor,
  setLoading,
  updateColorExercises,
}) {
  const [colorExerciseEdit, setColorExerciseEdit] = useState(colorExercise);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState({ title: '', repSet: '', breakPeriod: '' });

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickClear = () => {
    setColorExerciseEdit({ title: '', repSet: '', breakPeriod: '' });
  };

  const handleClickSave = async () => {
    let allPass = true;

    for (let key of Object.keys(colorExerciseEdit)) {
      if (!colorExerciseEdit[key]) {
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${formatText(key)} is require!!`;
          return clone;
        });
        allPass = false;
      }
    }

    if (allPass) {
      try {
        setLoading(true);
        updateColorExercises(colorExercise.id, colorExerciseEdit);
        await axios.put(`/color_exercise_posture/${colorExercise.id}`, { ...colorExerciseEdit });
        setAlertMessage('Update Success!!');
        setAlertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessage(''), 1000);
        setIsEdit(false);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Update failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 1000);
      }
    }
  };

  const handleChangeTextArea = (field, e) => {
    setColorExerciseEdit((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
    setError((cur) => {
      const clone = { ...cur };
      clone[field] = '';
      return clone;
    });
  };

  const handleClickDelete = () => {
    deleteColorExercises(colorExercise.id);
  };

  return (
    <tr
      key={colorExercise.id}
      style={{
        backgroundColor: colorExercise.backgroundColor,
        color: colorExercise.fontColor,
        fontSize: '1.5vw',
      }}
    >
      <th colSpan='2' style={{ color: 'inherit', backgroundColor: 'inherit' }}>
        {isEdit ? (
          <>
            <textarea
              type='text'
              style={{ color: 'inherit', backgroundColor: 'inherit' }}
              value={colorExerciseEdit.title}
              onChange={(e) => handleChangeTextArea('title', e)}
              className={error.title ? 'input-invalid' : ''}
            />
            {error.title ? <div className='invalid-text'>{error.title}</div> : null}
          </>
        ) : (
          <>{colorExerciseEdit.title}</>
        )}
      </th>
      <th colSpan='1' style={{ color: 'inherit', backgroundColor: 'inherit' }}>
        {isEdit ? (
          <>
            <textarea
              type='text'
              style={{ color: 'inherit', backgroundColor: 'inherit' }}
              value={colorExerciseEdit.repSet}
              onChange={(e) => handleChangeTextArea('repSet', e)}
              className={error.repSet ? 'input-invalid' : ''}
            />
            {error.repSet ? <div className='invalid-text'>{error.repSet}</div> : null}
          </>
        ) : (
          <>{colorExerciseEdit.repSet}</>
        )}
      </th>
      <th colSpan='2' style={{ color: 'inherit', backgroundColor: 'inherit' }}>
        {isEdit ? (
          <>
            <textarea
              type='text'
              style={{ color: 'inherit', backgroundColor: 'inherit' }}
              value={colorExerciseEdit.breakPeriod}
              onChange={(e) => handleChangeTextArea('breakPeriod', e)}
              className={error.breakPeriod ? 'input-invalid' : ''}
            />
            {error.breakPeriod ? <div className='invalid-text'>{error.breakPeriod}</div> : null}
          </>
        ) : (
          <>{colorExerciseEdit.breakPeriod}</>
        )}
      </th>
      {isEdit ? (
        <>
          <th colSpan='1' style={{ color: 'inherit', backgroundColor: 'inherit', width: '13%' }}>
            <button className='btn-save' onClick={handleClickSave}>
              Save
            </button>
          </th>
          <th colSpan='1' style={{ color: 'inherit', backgroundColor: 'inherit', width: '13%' }}>
            <button className='btn-clear' onClick={handleClickClear}>
              Clear
            </button>
          </th>
        </>
      ) : (
        <>
          <th colSpan='1' style={{ color: 'inherit', backgroundColor: 'inherit', width: '13%' }}>
            <button className='btn-edit' onClick={handleClickEdit}>
              Edit
            </button>
          </th>
          <th colSpan='1' style={{ color: 'inherit', backgroundColor: 'inherit', width: '13%' }}>
            <button className='btn-clear' onClick={handleClickDelete}>
              Delete
            </button>
          </th>
        </>
      )}
    </tr>
  );
}

export default ManageExerciseRow;
