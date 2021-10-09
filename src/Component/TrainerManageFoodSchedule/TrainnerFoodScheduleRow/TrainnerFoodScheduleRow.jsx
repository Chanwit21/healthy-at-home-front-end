import React, { useState } from 'react';
import { formatText } from '../../../service/formatting';

function TrainnerFoodScheduleRow({
  time,
  menuAndQuality,
  setFoodScheduleForEdit,
  foodScheduleForEdit,
  setIsHaveEdit,
  error,
  setError,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeEdit = (e) => {
    setIsHaveEdit(true);
    setIsEdit(true);
  };

  const handleClickClear = (e) => {
    setFoodScheduleForEdit((cur) => {
      const clone = { ...cur };
      clone[time] = '';
      return clone;
    });
  };

  const handleClickSave = (e) => {
    if (!foodScheduleForEdit[time]) {
      setError((cur) => {
        const clone = { ...cur };
        clone[time] = `${formatText(time)} is require.`;
        return clone;
      });
    } else {
      setIsEdit(false);
    }
  };

  const handleChangeTextArea = (e) => {
    setFoodScheduleForEdit((cur) => {
      const clone = { ...cur };
      clone[time] = e.target.value;
      return clone;
    });
    setError((cur) => {
      const clone = { ...cur };
      clone[time] = '';
      return clone;
    });
  };

  return (
    <>
      <tr>
        <td colSpan='1' style={{ paddingLeft: '2vw', paddingRight: '2vw', width: '10%' }}>
          {formatText(time)}
        </td>
        <td colSpan='2' style={{ width: '60%' }}>
          {isEdit ? (
            <>
              <textarea
                className={error[time] ? 'input-invalid' : ''}
                type='text'
                value={foodScheduleForEdit[time]}
                onChange={handleChangeTextArea}
              />
              {error[time] ? <div className='invalid-text'>{error[time]}</div> : null}
            </>
          ) : (
            <> {menuAndQuality}</>
          )}
        </td>
        {isEdit ? (
          <>
            <td colSpan='1' style={{ width: '15%' }}>
              <button className='btn-save' onClick={handleClickSave}>
                Save
              </button>
            </td>
            <td colSpan='1' style={{ width: '15%' }}>
              <button className='btn-delete' onClick={handleClickClear}>
                Clear
              </button>
            </td>
          </>
        ) : (
          <td colSpan='2' style={{ width: '30%' }}>
            <button className='btn-edit' onClick={handleChangeEdit}>
              Edit
            </button>
          </td>
        )}
      </tr>
    </>
  );
}

export default TrainnerFoodScheduleRow;
