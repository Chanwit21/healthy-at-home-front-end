import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';
import './PaymentSuccessPage.css';
import { firstUpperCase } from '../../service/formatting';

function PaymentSuccessPage() {
  const [status, setStatus] = useState('.......');

  useEffect(() => {
    const fetchLatestTransaction = async () => {
      const res = await axios.get('/transaction');
      setStatus(res.data.latestTransaction.status);
    };
    fetchLatestTransaction();
  }, []);

  return (
    <div>
      <div className='payment-success-page'>
        <div className='container'>
          <div className='payment-success-box'>
            <div className='content-in-payment-success-box'>
              <h1>
                <span>Pay Ment</span> {firstUpperCase(status)} !!
              </h1>
              {status === 'successful' ? (
                <>
                  <p>Go to Your Program Now !</p>
                  <Link to='/inprogressprogrampage'>
                    <button>Go To Program</button>
                  </Link>
                </>
              ) : (
                <>
                  <p>Please Go to Service page !</p>
                  <Link to='/servicepage'>
                    <button>Go To Service</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
