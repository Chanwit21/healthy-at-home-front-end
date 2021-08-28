import React from 'react';

function SwitchRestDay({ restDay, workoutDay }) {
  const restDayOptions = restDay.map(({ day }, index) => {
    return (
      <option key={index} value={day}>
        {day}
      </option>
    );
  });

  const workoutDayOptions = workoutDay.map(({ day }, index) => {
    return (
      <option key={index} value={day}>
        {day}
      </option>
    );
  });

  return (
    <div className='switch-rest-day'>
      <h1>Want to alternate workout days with rest days?</h1>
      <div className='switch-box-for-form'>
        <form action='#'>
          <div className='input-selector-row'>
            <div className='box-left'>
              <label htmlFor='restday'>Select the rest days you want to switch.</label>
              <br />
              <select name='restday' id='restday'>
                <option value=''>none</option>
                {restDayOptions}
              </select>
            </div>
            <div className='box-right'>
              <label htmlFor='day-to-switch'>Select the days you want to switch.</label>
              <br />
              <select name='day-to-switch' id='day-to-switch'>
                <option value=''>none</option>
                {workoutDayOptions}
              </select>
            </div>
          </div>
          <div className='submit-form'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SwitchRestDay;
