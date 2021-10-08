import React, { useState } from 'react';
import { formatText } from '../../../service/formatting';

function TrainnerFoodScheduleRow({ time, menuAndQuality, setFoodSchedule, foodSchedule, setIsHaveEdit }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeEdit = (e) => {
    setIsHaveEdit(true);
    setIsEdit(true);
  };

  const handleClickClear = (e) => {
    setFoodSchedule((cur) => {
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
            <textarea
              type='text'
              value={foodSchedule[time]}
              onChange={(e) =>
                setFoodSchedule((cur) => {
                  const clone = { ...cur };
                  clone[time] = e.target.value;
                  return clone;
                })
              }
            />
          ) : (
            <> {menuAndQuality}</>
          )}
        </td>
        {isEdit ? (
          <>
            <td colSpan='1' style={{ width: '15%' }}>
              <button className='btn-save' onClick={(e) => setIsEdit(false)}>
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
