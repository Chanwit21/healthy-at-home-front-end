import React, { useEffect, useRef, useState } from 'react';
import SelectCustomerRow from './SelectCustomerRow/SelectCustomerRow';
import './TrainerCustomer.css';
import axios from '../../config/axios';
import Customerinfo from '../CustomerInfo/Customerinfo';
import TrainerManageFoodSchedule from '../TrainerManageFoodSchedule/TrainerManageFoodSchedule';
import TrainerAddFoodSchedule from '../TrainerAddFoodSchedule/TrainerAddFoodSchedule';
import AlertBox from '../AlertBox/AlertBox';
import TrainerManageWorkoutSchedule from '../TrainerManageWorkoutSchedule/TrainerManageWorkoutSchedule';
import TrainerAddWorkoutSchedule from '../TrainerAddWorkoutSchedule/TrainerAddWorkoutSchedule';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

const genArrayOfDay = (number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    result.push(i);
  }
  return result;
};

function TrainerCustomer() {
  const [relations, setRelations] = useState([]);
  const [onCustomer, setOnCustomer] = useState('');
  const [customerSelect, setCustomerSelect] = useState({});
  const [customerCourseDay, setCustomerCourseDay] = useState([]);
  const [type, setType] = useState('');
  const [onDay, setOnDay] = useState('');
  const [foodSchedule, setFoodSchedule] = useState(null);
  const [workoutSchedule, setWorkoutSchedule] = useState(null);
  const [alertMessageMain, setAlertMessageMain] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [exercisePosture, setExercisePosture] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchRelations = async () => {
      setLoading(true);
      const res = await axios.get('/customer_inprogress');
      setRelations(res.data.cusTrainerRelations);
      setLoading(false);
    };
    if (isFirstRender.current) {
      fetchRelations();
      isFirstRender.current = false;
    } else {
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      window.scrollTo(0, 0);
    } else {
      const relationSelect = relations.find((item) => item.user.userId === onCustomer);
      //   console.log(relationSelect);
      setCustomerCourseDay(relationSelect ? genArrayOfDay(relationSelect.course.day) : []);
      setCustomerSelect(relationSelect ? relationSelect.user : {});
    }
  }, [onCustomer, relations]);

  const fetchFoodSchedule = async (reletionId, day) => {
    try {
      setLoading(true);
      const res = await axios.get(`/food_schedule/${day}/${reletionId}`);
      //   console.log(res.data.foodSchedule);
      setFoodSchedule(res.data.foodSchedule);
      setLoading(false);
    } catch (err) {
      setAlertMessageMain('Server is denine!');
      setAlertBoxColor('alert-box-invalid');
    }
  };

  const fetchWorkoutSchedule = async (reletionId, day) => {
    try {
      setLoading(true);
      const res = await axios.get(`/workout_schedule/${day}/${reletionId}`);
      setWorkoutSchedule(res.data.workOutSchedule);
      setLoading(false);
    } catch (err) {
      setAlertMessageMain('Server is denine!');
      setAlertBoxColor('alert-box-invalid');
    }
  };

  const fetchExercisePosture = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/exercise');
      setExercisePosture(res.data.exercisePostures);
      setLoading(false);
    } catch (err) {
      setAlertMessageMain('Server is denine!');
      setAlertBoxColor('alert-box-invalid');
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const relationSelect = relations.find((item) => item.user.userId === onCustomer);
      if (relationSelect) {
        if (type === 'Food' && onDay !== '') {
          fetchFoodSchedule(relationSelect.relationId, onDay);
        } else {
          setFoodSchedule(null);
        }

        if (type === 'Vedio' && onDay !== '') {
          fetchWorkoutSchedule(relationSelect.relationId, onDay);
          fetchExercisePosture();
        } else {
          setWorkoutSchedule(null);
        }
      }
    }
  }, [type, relations, onCustomer, onDay]);

  const deleteWorkoutScheDule = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/workout_schedule/${id}`);
      setWorkoutSchedule(null);
      setAlertMessageMain('Delete schedule success!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessageMain(''), 3000);
      setLoading(false);
    } catch (err) {
      setAlertMessageMain('Delete schedule failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessageMain(''), 3000);
    }
  };

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
  }

  return (
    <div className='TrainerCustomer'>
      {alertMessageMain ? <AlertBox alertMessage={alertMessageMain} color={alertBoxColor} /> : null}

      <SelectCustomerRow
        relations={relations}
        onCustomer={onCustomer}
        setOnCustomer={setOnCustomer}
        customerCourseDay={customerCourseDay}
        type={type}
        setType={setType}
        onDay={onDay}
        setOnDay={setOnDay}
      />
      {(Object.keys(customerSelect).length === 0 || !!type) && !loading ? null : (
        <Customerinfo profile={customerSelect} />
      )}
      {foodSchedule && type === 'Food' && !loading ? (
        <TrainerManageFoodSchedule
          foodSchedule={foodSchedule}
          setFoodSchedule={setFoodSchedule}
          setAlertMessageMain={setAlertMessageMain}
          setAlertBoxColor={setAlertBoxColor}
        />
      ) : null}
      {!foodSchedule && type === 'Food' && onCustomer && onDay && !loading ? (
        <TrainerAddFoodSchedule
          day={onDay}
          relationId={relations.find((item) => item.user.userId === onCustomer).relationId}
          setFoodSchedule={setFoodSchedule}
          setAlertMessageMain={setAlertMessageMain}
          setAlertBoxColor={setAlertBoxColor}
        />
      ) : null}
      {workoutSchedule && type === 'Vedio' && !loading ? (
        <TrainerManageWorkoutSchedule
          exercisePostureSelect={exercisePosture}
          workoutSchedule={workoutSchedule}
          deleteWorkoutScheDule={deleteWorkoutScheDule}
        />
      ) : null}
      {!workoutSchedule && type === 'Vedio' && onCustomer && onDay && !loading ? (
        <TrainerAddWorkoutSchedule
          onDay={onDay}
          setAlertMessageMain={setAlertMessageMain}
          setAlertBoxColor={setAlertBoxColor}
          relationId={relations.find((item) => item.user.userId === onCustomer).relationId}
          fetchWorkoutSchedule={fetchWorkoutSchedule}
          exercisePostureSelect={exercisePosture}
        />
      ) : null}
    </div>
  );
}

export default TrainerCustomer;
