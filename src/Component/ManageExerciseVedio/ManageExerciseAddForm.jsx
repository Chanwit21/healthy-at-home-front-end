import React, { useState } from 'react';
import { formatText } from '../../service/formatting';

function ManageExerciseAddForm({ createExercise }) {
  const [addExercise, setAddExercise] = useState({
    name: '',
    fontColor: '',
    backgroundColor: '',
    link: '',
    type: 'Full Body',
  });
  const [error, setError] = useState({ name: '', fontColor: '', backgroundColor: '', link: '', type: '' });

  const handleChangeAdd = (field, e) => {
    setAddExercise((cur) => {
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

  const handleClickAdd = () => {
    let allPass = true;

    for (let key of Object.keys(addExercise)) {
      if (!addExercise[key]) {
        allPass = false;
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${formatText(key)} is require!!`;
          return clone;
        });
      }
    }

    if (allPass) {
      createExercise({ ...addExercise });
    }
  };

  const handleClickClear = () => {
    setAddExercise({ name: '', fontColor: '', backgroundColor: '', link: '', type: 'Full Body' });
    setError({ name: '', fontColor: '', backgroundColor: '', link: '', type: '' });
  };

  return (
    <>
      <tr style={{ color: addExercise.fontColor, backgroundColor: addExercise.backgroundColor }}>
        <td colSpan='2' style={{ backgroundColor: 'inherit' }}>
          <textarea
            value={addExercise.name}
            onChange={(e) => handleChangeAdd('name', e)}
            className={error.name ? 'input-invalid' : ''}
            placeholder={error.name || ''}
            style={{
              color: error.name ? 'red' : '',
              fontWeight: error.name ? '900' : '',
            }}
          />
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          <textarea
            value={addExercise.fontColor}
            onChange={(e) => handleChangeAdd('fontColor', e)}
            className={error.fontColor ? 'input-invalid' : ''}
            placeholder={error.fontColor || ''}
            style={{
              color: error.fontColor ? 'red' : '',
              fontWeight: error.fontColor ? '900' : '',
            }}
          />
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          <textarea
            value={addExercise.backgroundColor}
            onChange={(e) => handleChangeAdd('backgroundColor', e)}
            className={error.backgroundColor ? 'input-invalid' : ''}
            placeholder={error.backgroundColor || ''}
            style={{
              color: error.backgroundColor ? 'red' : '',
              fontWeight: error.backgroundColor ? '900' : '',
            }}
          />
        </td>
        <td colSpan='3' style={{ backgroundColor: 'inherit' }}>
          <textarea
            value={addExercise.link}
            onChange={(e) => handleChangeAdd('link', e)}
            className={error.link ? 'input-invalid' : ''}
            placeholder={error.link || ''}
            style={{
              color: error.link ? 'red' : '',
              fontWeight: error.link ? '900' : '',
            }}
          />
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          <select value={addExercise.type} onChange={(e) => handleChangeAdd('type', e)}>
            <option value='Full Body'>Full Body</option>
            <option value='Core & Abs'>Core & Abs</option>
            <option value='Chest'>Chest</option>
            <option value='Arm'>Arm</option>
            <option value='Butt'>Butt</option>
            <option value='Cardio'>Cardio</option>
            <option value='Rest'>Rest</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colSpan='8'>
          <button className='btn-save' onClick={handleClickAdd}>
            Add
          </button>
          <button className='btn-clear' onClick={handleClickClear}>
            Clear
          </button>
        </td>
      </tr>
    </>
  );
}

export default ManageExerciseAddForm;
