import React, { useState } from 'react';
import './WeeklyUpdate.css';
import { formatText } from '../../service/formatting';

function WeeklyUpdate() {
  const [weeklyUpdate, setWeeklyUpdate] = useState({
    weight: '',
    dayExercisePerWeek: '',
    fat: '',
    muscle: '',
    circumferenceThigh: '',
    circumferenceMidUpperArm: '',
    waistline: '',
  });
  const [error, setError] = useState({
    weight: '',
    dayExercisePerWeek: '',
    fat: '',
    muscle: '',
    circumferenceThigh: '',
    circumferenceMidUpperArm: '',
    waistline: '',
  });

  const handleChangeInput = (field, e) => {
    setWeeklyUpdate((cur) => {
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

  const handleSubmitWeeklyUpdate = (e) => {
    e.preventDefault();
    let allPass = true;

    for (let key in weeklyUpdate) {
      if (!weeklyUpdate[key]) {
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${formatText(key)} is require`;
          return clone;
        });
        allPass = false;
      }
    }

    if (allPass) {
      alert('Success');
    }
  };

  return (
    <div className='form-weekly-update'>
      <form onSubmit={handleSubmitWeeklyUpdate}>
        <h1>All field must be a number.</h1>
        <div className='row-of-content-in-form' id='first-of-row'>
          <div className='content-left-or-top'>
            <label htmlFor='weight'>Weight (kg.)</label>
            <br />
            <input
              className={error.weight ? 'input-invalid' : ''}
              type='number'
              name='weight'
              id='weight'
              max='200'
              min='20'
              value={weeklyUpdate.weight}
              onChange={(e) => handleChangeInput('weight', e)}
            />
            {error.weight ? <div className='invalid-text'>{error.weight}</div> : null}
          </div>
          <div className='content-right-or-bottom' id='first-row'>
            <label htmlFor='count-day-per-week'>Number of days exercising in the last 7 days.</label>
            <br />
            <input
              className={error.dayExercisePerWeek ? 'input-invalid' : ''}
              type='number'
              name='exercise-day-per-week'
              id='count-day-per-week'
              max='7'
              min='0'
              value={weeklyUpdate.dayExercisePerWeek}
              onChange={(e) => handleChangeInput('dayExercisePerWeek', e)}
            />
            {error.dayExercisePerWeek ? <div className='invalid-text'>{error.dayExercisePerWeek}</div> : null}
          </div>
        </div>
        <div className='row-of-content-in-form'>
          <div className='content-left-or-top'>
            <label htmlFor='fat-percentage'>Fat percentage(%)</label>
            <br />
            <input
              className={error.fat ? 'input-invalid' : ''}
              type='number'
              name='fat-percentage'
              id='fat-percentage'
              max='30'
              min='15'
              value={weeklyUpdate.fat}
              onChange={(e) => handleChangeInput('fat', e)}
            />
            {error.fat ? <div className='invalid-text'>{error.fat}</div> : null}
          </div>
          <div className='content-right-or-bottom'>
            <label htmlFor='muscle-percentage(%)'>Muscle percentage(%)</label>
            <br />
            <input
              className={error.muscle ? 'input-invalid' : ''}
              type='number'
              name='muscle-percentage(%)'
              id='muscle-percentage(%)'
              max='80'
              min='30'
              value={weeklyUpdate.muscle}
              onChange={(e) => handleChangeInput('muscle', e)}
            />
            {error.muscle ? <div className='invalid-text'>{error.muscle}</div> : null}
          </div>
        </div>
        <div className='row-of-content-in-form'>
          <div className='content-left-or-top'>
            <label htmlFor='circumference-thigh'>Circumference, Thigh (cm.)</label>
            <br />
            <input
              className={error.circumferenceThigh ? 'input-invalid' : ''}
              type='number'
              name='circumference-thigh'
              id='circumference-thigh'
              max='100'
              min='20'
              value={weeklyUpdate.circumferenceThigh}
              onChange={(e) => handleChangeInput('circumferenceThigh', e)}
            />
            {error.circumferenceThigh ? <div className='invalid-text'>{error.circumferenceThigh}</div> : null}
          </div>
          <div className='content-right-or-bottom'>
            <label htmlFor='circumference-mid-upper-arm'>Circumference, Mid-Upper Arm (cm.)</label>
            <br />
            <input
              className={error.circumferenceMidUpperArm ? 'input-invalid' : ''}
              type='number'
              name='circumference-mid-upper-arm'
              id='circumference-mid-upper-arm'
              max='100'
              min='20'
              value={weeklyUpdate.circumferenceMidUpperArm}
              onChange={(e) => handleChangeInput('circumferenceMidUpperArm', e)}
            />
            {error.circumferenceMidUpperArm ? (
              <div className='invalid-text'>{error.circumferenceMidUpperArm}</div>
            ) : null}
          </div>
        </div>
        <div className='row-of-content-in-form'>
          <div className='content-left-or-top'>
            <label htmlFor='girth'>Waistline (cm.)</label>
            <br />
            <input
              className={error.waistline ? 'input-invalid' : ''}
              type='number'
              name='girth'
              id='girth'
              max='100'
              min='20'
              value={weeklyUpdate.waistline}
              onChange={(e) => handleChangeInput('waistline', e)}
            />
            {error.waistline ? <div className='invalid-text'>{error.waistline}</div> : null}
          </div>
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default WeeklyUpdate;
