import React from 'react';

function CreditDebitCard({ paymentMethode, setPaymentMethode }) {
  return (
    <div className="credit-debit-card-payment">
      <input
        type="radio"
        name="payment-methode"
        id="credit-debitcard"
        value="credit/dabit_card"
        onChange={e => setPaymentMethode(e.target.value)}
      />
      <label htmlFor="credit-debitcard">Credit/Debit Card</label>
      <br />
      <p>Please pay before 11 PM.</p>
      <input
        type="text"
        name="card-number"
        id="card-number"
        placeholder="Credit/Debit card number"
        className={`${
          paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
        }`}
      />
      <br />
      <input
        type="text"
        name="name-on-card"
        id="name-on-card"
        placeholder="Name on card"
        className={`${
          paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
        }`}
      />
      <br />
      <div className="row-expiration-date-cvv">
        <input
          type="month"
          name="expiration-date"
          id="expiration-date"
          placeholder="Expiration date(MM/YY)"
          className={`${
            paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
          }`}
        />
        <input
          type="password"
          name="cvv"
          id="cvv"
          placeholder="CVV"
          maxLength="3"
          className={`${
            paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
          }`}
        />
      </div>
      <p>
        <input
          type="checkbox"
          name="remember-card"
          id="remember-card"
          className={`${
            paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
          }`}
        />
        <label htmlFor="remember-card">Remember this card</label>
      </p>
      <input
        type="submit"
        value="Make Payment"
        className={`${
          paymentMethode !== 'credit/dabit_card' ? 'disabled' : ''
        }`}
      />
    </div>
  );
}

export default CreditDebitCard;
