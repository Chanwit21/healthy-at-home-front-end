import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { Link, useHistory } from 'react-router-dom';
import './PaymentSuccessPage.css';
import { firstUpperCase } from '../../service/formatting';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import AlertBox from '../../Component/AlertBox/AlertBox';

function PaymentSuccessPage() {
  const [status, setStatus] = useState('.....failed');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');

  useEffect(() => {
    const fetchLatestTransaction = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/transaction');
        setStatus(res.data.latestTransaction.status);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Server failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
        setTimeout(() => history.push('/servicepage'), 5000);
        setLoading(false);
      }
    };
    setLoading(true);
    setTimeout(() => {
      fetchLatestTransaction();
      setLoading(false);
    }, 3000);
  }, [history]);

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', marginTop: '5vw' }}>
        <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />
      </div>
    );
  }

  return (
    <div>
      <div className='payment-success-page'>
        {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
        <div className='container'>
          <div className='payment-success-box'>
            <div className='content-in-payment-success-box'>
              <h1>
                <span>Pay Ment</span> {firstUpperCase(status)} !!
              </h1>
              {status === 'successful' ? (
                <>
                  <p>Go to Your Program Now !</p>
                  <Link to='/user-profile-page'>
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
