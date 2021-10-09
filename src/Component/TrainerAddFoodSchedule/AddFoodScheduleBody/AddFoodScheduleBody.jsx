import React from 'react';
import { formatText } from '../../../service/formatting';

function AddFoodScheduleBody({ time, content, error, setError, setFoodScheduleForAdd }) {
  const handleChangeTextArea = (e) => {
    setFoodScheduleForAdd((cur) => {
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

  const handleClickClear = () => {
    setFoodScheduleForAdd((cur) => {
      const clone = { ...cur };
      clone[time] = '';
      return clone;
    });
  };

  return (
    <tr>
      <td colSpan='1' style={{ paddingLeft: '2vw', paddingRight: '2vw', width: '10%' }}>
        {formatText(time)}
      </td>
      <td colSpan='2' style={{ width: '70%' }}>
        <>
          <textarea
            className={error[time] ? 'input-invalid' : ''}
            type='text'
            value={content}
            onChange={handleChangeTextArea}
          />
          {error[time] ? <div className='invalid-text'>{error[time]}</div> : null}
        </>
      </td>
      <td colSpan='2' style={{ width: '20%' }}>
        <button className='btn-clear' onClick={handleClickClear}>
          Clear
        </button>
      </td>
    </tr>
  );
}

export default AddFoodScheduleBody;
