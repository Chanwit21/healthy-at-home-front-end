import React, { useState } from 'react';
import './TrainerManageFoodSchedule.css';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';
import TrainnerFoodScheduleRow from './TrainnerFoodScheduleRow/TrainnerFoodScheduleRow';
import TrainerFoodScheduleHead from './TrainerFoodScheduleHead/TrainerFoodScheduleHead';

function TrainerManageFoodSchedule({ foodSchedule, setFoodSchedule }) {
  const [foodScheduleForEdit, setFoodScheduleForEdit] = useState(foodSchedule);
  const [error, setError] = useState({});
  const [isHaveEdit, setIsHaveEdit] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');

  const tableBody = Object.keys(foodScheduleForEdit).map((item, index) => {
    if (['breakfast', 'brunch', 'lunch', 'afternoon', 'diner', 'lastnight'].includes(item)) {
      return (
        <TrainnerFoodScheduleRow
          key={index}
          time={item}
          menuAndQuality={foodScheduleForEdit[item]}
          foodScheduleForEdit={foodScheduleForEdit}
          setFoodScheduleForEdit={setFoodScheduleForEdit}
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
      await axios.put(`/food_schedule/${foodScheduleForEdit.id}`, { ...foodScheduleForEdit });

      setIsHaveEdit(false);
      setAlertMessage('Update food schedule Successful !!');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 3000);
    } catch (err) {
      setAlertMessage('Update failed!!');
      setTimeout(() => setAlertMessage(''), 3000);
    }
  };

  return (
    <div className='food-schedule-trainer'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <h1>Food schedule</h1>
      <table id='food-schedule-trainer'>
        <thead>
          <TrainerFoodScheduleHead day={foodScheduleForEdit.day} />
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
        </tbody>
      </table>
    </div>
  );
}

export default TrainerManageFoodSchedule;
