import React, { useEffect, useRef, useState } from 'react';
import './TrainerManageFoodSchedule.css';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';
import TrainnerFoodScheduleRow from './TrainnerFoodScheduleRow/TrainnerFoodScheduleRow';
import TrainerFoodScheduleHead from './TrainerFoodScheduleHead/TrainerFoodScheduleHead';

function TrainerManageFoodSchedule({ foodSchedule, setFoodSchedule, setAlertMessageMain, setAlertBoxColor }) {
  // const [foodScheduleForEdit, setFoodScheduleForEdit] = useState(foodSchedule);
  const [error, setError] = useState({});
  const [isHaveEdit, setIsHaveEdit] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');
  const haveClickDelete = useRef(false);

  const tableBody = Object.keys(foodSchedule).map((item, index) => {
    if (['breakfast', 'brunch', 'lunch', 'afternoon', 'diner', 'lastnight'].includes(item)) {
      return (
        <TrainnerFoodScheduleRow
          key={index}
          time={item}
          foodSchedule={foodSchedule}
          setFoodSchedule={setFoodSchedule}
          setIsHaveEdit={setIsHaveEdit}
          error={error}
          setError={setError}
        />
      );
    }
    return null;
  });

  const handleSubmitEditFoodSachdule = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/food_schedule/${foodSchedule.id}`, { ...foodSchedule });

      setIsHaveEdit(false);
      setAlertMessage('Update food schedule Successful !!');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 3000);
    } catch (err) {
      setAlertMessage('Update failed!!');
      setTimeout(() => setAlertMessage(''), 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (haveClickDelete.current) {
        setAlertMessageMain('Delete food schedule successful !!');
        setTimeout(() => setAlertMessageMain(''), 3000);
        setAlertBoxColor('alert-box-valid');
      }
    };
  }, [setAlertMessageMain, setAlertBoxColor]);

  const handleClickDelete = async () => {
    try {
      await axios.delete(`/food_schedule/${foodSchedule.id}`);
      haveClickDelete.current = true;
      setFoodSchedule(null);
    } catch (err) {
      setAlertMessageMain('Can not delete foodschedule!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessageMain(''), 3000);
    }
  };

  return (
    <div className='food-schedule-trainer'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Food schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <TrainerFoodScheduleHead day={foodSchedule.day} />
        </thead>
        <tbody>
          {tableBody}
          {isHaveEdit ? (
            <tr>
              <td colSpan='5'>
                <form onSubmit={handleSubmitEditFoodSachdule}>
                  <input type='submit' value='Submit' />
                </form>
              </td>
            </tr>
          ) : null}
          <tr>
            <td colSpan='5'>
              <button className='btn-delete' onClick={handleClickDelete}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TrainerManageFoodSchedule;
