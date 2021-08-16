import React from 'react';

import { Link } from 'react-router-dom';
import './PaymentSuccessPage.css';

function PaymentSuccessPage() {
  return (
    <div>
      <div className='payment-success-page'>
        <div className='container'>
          <div className='payment-success-box'>
            <div className='content-in-payment-success-box'>
              <h1>
                <span>Pay Ment</span> Success !!
              </h1>
              <p>Go to Your Program Now !</p>
              <Link to='/inprogressprogrampage'>
                <button>Go To Program</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
