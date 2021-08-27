import React from 'react';

function BankAccount({ paymentMethode, setPaymentMethode }) {
  return (
    <div className="transfer-through-bank-account">
      <input
        type="radio"
        name="payment-methode"
        id="transfer-through-bank-account"
        value="bank_account"
        onChange={e => setPaymentMethode(e.target.value)}
      />
      <div className="contanet-in-transfer-through-bank-account">
        <label htmlFor="transfer-through-bank-account">
          Transfer through bank account
        </label>
        <br />
        <p>Application / ATM / Counter or bank website</p>
        <select
          name="bank-name"
          id="bankname"
          className={`${paymentMethode !== 'bank_account' ? 'disabled' : ''}`}
        >
          <option value="none">Choose Bank</option>
          <option value="kasikorn">Kasikorn-Bank</option>
          <option value="thai-panit-bank">Thai Panit Bank</option>
          <option value="krungsri-bank">Krungsri Bank</option>
        </select>
        <select
          name="payment-methode"
          id="payment-methode"
          placeholder="Choose Payment Methode"
          className={`${paymentMethode !== 'bank_account' ? 'disabled' : ''}`}
        >
          <option value="none">Choose Payment Methode</option>
          <option value="kasikorn">Kasikorn-Bank</option>
          <option value="thai-panit-bank">Thai Panit Bank</option>
          <option value="krungsri-bank">Krungsri Bank</option>
        </select>
        <input
          type="submit"
          value="Make Payment"
          className={`${paymentMethode !== 'bank_account' ? 'disabled' : ''}`}
        />
      </div>
    </div>
  );
}

export default BankAccount;
