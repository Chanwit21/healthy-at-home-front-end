import React, { useState } from 'react';
import { formatText } from '../../service/formatting';

function AddExercisePosture({ addColorExercises }) {
  const [addColorExercise, setAddColorExercise] = useState({
    backgroundColor: '',
    fontColor: '',
    repSet: '',
    title: '',
    breakPeriod: '',
  });
  const [error, setError] = useState({
    backgroundColor: '',
    fontColor: '',
    repSet: '',
    title: '',
    breakPeriod: '',
  });

  const handleChangeTextArea = (field, e) => {
    setAddColorExercise((cur) => {
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

  const handleClickAdd = (e) => {
    let allPass = true;

    for (let key of Object.keys(addColorExercise)) {
      if (!addColorExercise[key]) {
        allPass = false;
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${key !== 'title' ? formatText(key) : 'Executive posture'} is require!!`;
          return clone;
        });
      }
    }

    if (allPass) {
      addColorExercises({ ...addColorExercise });
    }
  };

  return (
    <>
      <tr>
        <th colSpan='2' style={{ width: '40%' }}>
          <textarea
            className={error.title ? 'input-invalid' : ''}
            type='text'
            placeholder='Executive posture'
            value={addColorExercise.title}
            onChange={(e) => handleChangeTextArea('title', e)}
          />
          {error.title ? (
            <div className='invalid-text' style={{ fontSize: '1vw' }}>
              {error.title}
            </div>
          ) : null}
        </th>

        <th colSpan='1'>
          <textarea
            className={error.repSet ? 'input-invalid' : ''}
            type='text'
            placeholder='Rep x Set'
            value={addColorExercise.repSet}
            onChange={(e) => handleChangeTextArea('repSet', e)}
          />
          {error.repSet ? (
            <div className='invalid-text' style={{ fontSize: '1vw' }}>
              {error.repSet}
            </div>
          ) : null}
        </th>
        <th colSpan='2'>
          <textarea
            className={error.breakPeriod ? 'input-invalid' : ''}
            type='text'
            placeholder='Break period'
            value={addColorExercise.breakPeriod}
            onChange={(e) => handleChangeTextArea('breakPeriod', e)}
          />
          {error.breakPeriod ? (
            <div className='invalid-text' style={{ fontSize: '1vw' }}>
              {error.breakPeriod}
            </div>
          ) : null}
        </th>
        <th colSpan='1'>
          <textarea
            className={error.backgroundColor ? 'input-invalid' : ''}
            type='text'
            placeholder='Background color'
            value={addColorExercise.backgroundColor}
            onChange={(e) => handleChangeTextArea('backgroundColor', e)}
          />
          {error.backgroundColor ? (
            <div className='invalid-text' style={{ fontSize: '1vw' }}>
              {error.backgroundColor}
            </div>
          ) : null}
        </th>
        <th colSpan='1'>
          <textarea
            className={error.fontColor ? 'input-invalid' : ''}
            type='text'
            placeholder='Font color'
            value={addColorExercise.fontColor}
            onChange={(e) => handleChangeTextArea('fontColor', e)}
          />
          {error.fontColor ? (
            <div className='invalid-text' style={{ fontSize: '1vw' }}>
              {error.fontColor}
            </div>
          ) : null}
        </th>
      </tr>
      <tr>
        <th colSpan='7'>
          <button
            className='btn-edit'
            style={{ backgroundColor: '#4CAF50', margin: '1vw auto', width: '70%' }}
            onClick={handleClickAdd}
          >
            Add
          </button>
        </th>
      </tr>
    </>
  );
}

export default AddExercisePosture;
