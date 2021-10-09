import React from 'react';
import './SelectCustomerRow.css';

function SelectCustomerRow({
  onDay,
  setOnDay,
  relations,
  customerCourseDay,
  onCustomer,
  setOnCustomer,
  type,
  setType,
}) {
  return (
    <div className='row-of-select-customer'>
      <select
        name='customer'
        id='customer'
        value={onCustomer}
        onChange={(e) => {
          setOnCustomer(e.target.value);
          setOnDay('');
          setType('');
        }}
      >
        <option value=''>none</option>
        {relations.map((item) => {
          return (
            <option key={item.user.userId} value={item.user.userId}>
              {item.user.firstName + ' ' + item.user.lastName}
            </option>
          );
        })}
      </select>
      <select
        name='type-of-schedule'
        id='type-of-schedule'
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setOnDay('');
        }}
        disabled={!onCustomer}
      >
        <option value=''>Choose type</option>
        <option value='Food'>Food</option>
        <option value='Vedio'>Vedio</option>
      </select>
      <select
        name='day-of-schedule'
        id='day-of-schedule'
        value={onDay}
        onChange={(e) => {
          setOnDay(e.target.value);
        }}
        disabled={!type}
      >
        <option value=''>Choose Day</option>
        {customerCourseDay.map((item, index) => {
          return <option key={index} value={`Day${item}`}>{`Day${item}`}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectCustomerRow;
