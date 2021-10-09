import React, { useEffect, useRef, useState } from 'react';
import SelectCustomerRow from './SelectCustomerRow/SelectCustomerRow';
import './TrainerCustomer.css';
import axios from '../../config/axios';
import Customerinfo from '../CustomerInfo/Customerinfo';
import TrainerManageFoodSchedule from '../TrainerManageFoodSchedule/TrainerManageFoodSchedule';
import TrainerAddFoodSchedule from '../TrainerAddFoodSchedule/TrainerAddFoodSchedule';
import AlertBox from '../AlertBox/AlertBox';

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
  const [alertMessageMain, setAlertMessageMain] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchRelations = async () => {
      const res = await axios.get('/customer_inprogress');
      setRelations(res.data.cusTrainerRelations);
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
    } else {
      const relationSelect = relations.find((item) => item.user.userId === onCustomer);
      //   console.log(relationSelect);
      setCustomerCourseDay(relationSelect ? genArrayOfDay(relationSelect.course.day) : []);
      setCustomerSelect(relationSelect ? relationSelect.user : {});
    }
  }, [onCustomer, relations]);

  useEffect(() => {
    const fetchFoodSchedule = async (reletionId, day) => {
      const res = await axios.get(`/food_schedule/${day}/${reletionId}`);
      //   console.log(res.data.foodSchedule);
      setFoodSchedule(res.data.foodSchedule);
    };

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
      }
    }
  }, [type, relations, onCustomer, onDay]);

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
      {Object.keys(customerSelect).length === 0 || !!type ? null : <Customerinfo profile={customerSelect} />}
      {foodSchedule ? (
        <TrainerManageFoodSchedule foodSchedule={foodSchedule} setFoodSchedule={setFoodSchedule} />
      ) : null}
      {!foodSchedule && onCustomer && onDay ? (
        <TrainerAddFoodSchedule
          day={onDay}
          relationId={relations.find((item) => item.user.userId === onCustomer).relationId}
          setFoodSchedule={setFoodSchedule}
          setAlertMessageMain={setAlertMessageMain}
          setAlertBoxColor={setAlertBoxColor}
        />
      ) : null}
    </div>
  );
}

export default TrainerCustomer;
