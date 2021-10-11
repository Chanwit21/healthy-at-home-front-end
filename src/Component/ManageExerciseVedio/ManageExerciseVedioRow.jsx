import React, { useState } from 'react';
import { formatText } from '../../service/formatting';

function ManageExerciseVedioRow({ exerciseVedio, updateExercise, deleteExercises }) {
  const [exerciseVedioToEdit, setExerciseVedioToEdit] = useState(exerciseVedio);
  const [error, setError] = useState({ name: '', fontColor: '', backgroundColor: '', link: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeEdit = (field, e) => {
    setExerciseVedioToEdit((cur) => {
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

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickSave = () => {
    let allPass = true;

    for (let key of Object.keys(exerciseVedioToEdit)) {
      if (!exerciseVedioToEdit[key]) {
        allPass = false;
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${formatText(key)} is require!!`;
          return clone;
        });
      }
    }

    if (allPass) {
      const isSuccess = updateExercise(exerciseVedio.id, { ...exerciseVedioToEdit });
      if (isSuccess) {
        setIsEdit(false);
      }
    }
  };

  const handleClickDelete = () => {
    deleteExercises(exerciseVedio.id);
  };

  const handleClickCancle = () => {
    setIsEdit(false);
  };

  return (
    <>
      <tr style={{ color: exerciseVedioToEdit.fontColor, backgroundColor: exerciseVedioToEdit.backgroundColor }}>
        <td colSpan='2' style={{ backgroundColor: 'inherit' }}>
          {isEdit ? (
            <>
              <textarea
                value={exerciseVedioToEdit.name}
                onChange={(e) => handleChangeEdit('name', e)}
                className={error.name ? 'input-invalid' : ''}
                placeholder={error.name || ''}
                style={{
                  color: error.name ? 'red' : '',
                  fontWeight: error.name ? '900' : '',
                }}
              />
            </>
          ) : (
            <>{exerciseVedioToEdit.name}</>
          )}
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          {isEdit ? (
            <>
              <textarea
                value={exerciseVedioToEdit.fontColor}
                onChange={(e) => handleChangeEdit('fontColor', e)}
                className={error.fontColor ? 'input-invalid' : ''}
                placeholder={error.fontColor || ''}
                style={{
                  color: error.fontColor ? 'red' : '',
                  fontWeight: error.fontColor ? '900' : '',
                }}
              />
            </>
          ) : (
            <>{exerciseVedioToEdit.fontColor}</>
          )}
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          {isEdit ? (
            <>
              <textarea
                value={exerciseVedioToEdit.backgroundColor}
                onChange={(e) => handleChangeEdit('backgroundColor', e)}
                className={error.backgroundColor ? 'input-invalid' : ''}
                placeholder={error.backgroundColor || ''}
                style={{
                  color: error.backgroundColor ? 'red' : '',
                  fontWeight: error.backgroundColor ? '900' : '',
                }}
              />
            </>
          ) : (
            <>{exerciseVedioToEdit.backgroundColor}</>
          )}
        </td>
        <td colSpan='3' style={{ backgroundColor: 'inherit' }}>
          {isEdit ? (
            <>
              <textarea
                value={exerciseVedioToEdit.link}
                onChange={(e) => handleChangeEdit('link', e)}
                className={error.link ? 'input-invalid' : ''}
                placeholder={error.link || ''}
                style={{
                  color: error.link ? 'red' : '',
                  fontWeight: error.link ? '900' : '',
                }}
              />
            </>
          ) : (
            <>{exerciseVedioToEdit.link}</>
          )}
        </td>
        <td colSpan='1' style={{ backgroundColor: 'inherit' }}>
          {isEdit ? (
            <select value={exerciseVedioToEdit.type} onChange={(e) => handleChangeEdit('type', e)}>
              <option value='Full Body'>Full Body</option>
              <option value='Core & Abs'>Core & Abs</option>
              <option value='Chest'>Chest</option>
              <option value='Arm'>Arm</option>
              <option value='Butt'>Butt</option>
              <option value='Cardio'>Cardio</option>
              <option value='Rest'>Rest</option>
            </select>
          ) : (
            <>{exerciseVedioToEdit.type}</>
          )}
        </td>
      </tr>
      {isEdit ? (
        <tr>
          <td colSpan='8'>
            <button className='btn-save' onClick={handleClickSave}>
              Save
            </button>
            <button className='btn-clear' onClick={handleClickCancle}>
              <i class='bi bi-x'></i>
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td colSpan='8'>
            <button className='btn-edit' onClick={handleClickEdit}>
              Edit
            </button>
            <button className='btn-delete' onClick={handleClickDelete}>
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default ManageExerciseVedioRow;
