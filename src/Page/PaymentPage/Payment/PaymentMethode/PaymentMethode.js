import React from 'react';
import BankAccount from './BankAccount';
import CreditDebitCard from './CreditDebitCard';
import CounterService from './CounterService';

function PaymentMethode({ paymentMethode, setPaymentMethode }) {
  return (
    <div className="payment-method">
      <h1>Choose a payment method</h1>
      <form action="#">
        <CreditDebitCard
          setPaymentMethode={setPaymentMethode}
          paymentMethode={paymentMethode}
        />
        <BankAccount
          setPaymentMethode={setPaymentMethode}
          paymentMethode={paymentMethode}
        />
        <CounterService
          setPaymentMethode={setPaymentMethode}
          paymentMethode={paymentMethode}
        />
      </form>
    </div>
  );
}

export default PaymentMethode;
