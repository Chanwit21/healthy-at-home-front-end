import React from 'react';

function SummaryPayment({ state }) {
  return (
    <div className="summary-payment">
      <div className="content-in-summary-payment">
        <h1>Detail</h1>
        <div className="detail-row">
          <h1>Selected Program</h1>
          <p>{state.courseName}</p>
        </div>
        <div className="detail-row">
          <h1>Name</h1>
          <p>
            {state.fname} {state.lname}
          </p>
        </div>
        <div className="detail-row">
          <h1>Phone Numbers </h1>
          <p>{state.telNumber}</p>
        </div>
        <div className="detail-row">
          <h1>Date to Start</h1>
          <p>{state.dateToStart.split('-').join('/')}</p>
        </div>
        <div className="horizental-line"></div>
        <div className="detail-row">
          <h1>Total products</h1>
          <p>{state.price} THB</p>
        </div>
        <div className="detail-row">
          <h1>Discount</h1>
          <p>0 THB</p>
        </div>
        <div className="detail-row">
          <h1>Payment summary</h1>
          <p>15,000 THB</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryPayment;
