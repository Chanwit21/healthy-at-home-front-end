import React, { useEffect, useRef, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import AddFoodScheduleBody from './AddFoodScheduleBody/AddFoodScheduleBody';
import AddFoodScheduleHead from './AddFoodScheduleHead/AddFoodScheduleHead';
import axios from '../../config/axios';
import { formatText } from '../../service/formatting';

function TrainerAddFoodSchedule({ day, relationId, setFoodSchedule, setAlertMessageMain, setAlertBoxColor }) {
  const [foodScheduleForAdd, setFoodScheduleForAdd] = useState({
    breakfast: '',
    brunch: '',
    lunch: '',
    afternoon: '',
    diner: '',
    lastnight: '',
  });
  const [error, setError] = useState({
    breakfast: '',
    brunch: '',
    lunch: '',
    afternoon: '',
    diner: '',
    lastnight: '',
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('');
  const isSubmit = useRef(false);

  const genTableBody = (obj) => {
    return Object.keys(obj).map((key, index) => (
      <AddFoodScheduleBody
        key={index}
        time={key}
        content={obj[key]}
        error={error}
        setError={setError}
        setFoodScheduleForAdd={setFoodScheduleForAdd}
        foodScheDule
      />
    ));
  };

  const tableBody = genTableBody(foodScheduleForAdd);

  useEffect(() => {
    return () => {
      if (isSubmit.current) {
        setAlertMessageMain('Create food schedule Successful !!');
        setAlertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessageMain(''), 3000);
      }
    };
  }, [setAlertMessageMain, setAlertBoxColor]);

  const handleSubmitAddFoodSachdule = async (e) => {
    e.preventDefault();
    const checkAllPass = (obj) => {
      let allPass = true;
      for (let key in obj) {
        if (!obj[key]) {
          setError((cur) => {
            const clone = { ...cur };
            clone[key] = `${formatText(key)} is require.`;
            return clone;
          });
          allPass = false;
        }
      }
      return allPass;
    };
    if (!checkAllPass(foodScheduleForAdd)) {
      setAlertMessage('All field is require.');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 3000);
    } else {
      try {
        const res = await axios.post(`/food_schedule`, { day, relationId, ...foodScheduleForAdd });
        setFoodSchedule(res.data.foodScheDule);
        isSubmit.current = true;
      } catch (err) {
        setAlertMessage('Create failed!!');
        setalertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 3000);
      }
    }
  };

  return (
    <div className='food-schedule-trainer'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Food schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <AddFoodScheduleHead day={day} />
        </thead>
        <tbody>
          {tableBody}
          <tr>
            <td colSpan='5'>
              <form onSubmit={handleSubmitAddFoodSachdule}>
                <input type='submit' value='Submit' />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TrainerAddFoodSchedule;
