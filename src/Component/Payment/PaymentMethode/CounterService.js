import React from 'react';

function CounterService({ paymentMethode, setPaymentMethode }) {
  return (
    <div className="counter-service">
      <input
        type="radio"
        name="payment-methode"
        id="counter-service"
        value="counter_service"
        onChange={e => setPaymentMethode(e.target.value)}
      />
      <div className="contanet-in-counter-service">
        <label htmlFor="counter-service">Counter Service</label>
        <br />
        <p>Please pay before 11 PM.</p>
        <input
          type="submit"
          value="Make Payment"
          className={`${
            paymentMethode !== 'counter_service' ? 'disabled' : ''
          }`}
        />
      </div>
    </div>
  );
}

export default CounterService;
