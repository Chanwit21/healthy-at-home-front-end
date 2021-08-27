import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import './PaymentPage.css';
import SummaryPayment from './Payment/SummaryPayment';
import PaymentMethode from './Payment/PaymentMethode/PaymentMethode';

function PaymentPage() {
  const [state, setState] = useState({
    courseName: '',
    fname: '',
    lname: '',
    telNumber: '',
    dateToStart: '',
    price: '',
  });
  const [paymentMethode, setPaymentMethode] = useState('');
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (location.state) {
      setState(location.state);
    }
  }, [location]);

  return (
    <div>
      <div className="payment-page">
        <section className="choose-payment">
          <div className="container">
            <div className="contant-payment-row">
              <PaymentMethode
                paymentMethode={paymentMethode}
                setPaymentMethode={setPaymentMethode}
              />
              <SummaryPayment state={state} />
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="contact-us">
            <div className="container">
              <div className="horizental-line"></div>
              <ContactUsComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PaymentPage;
