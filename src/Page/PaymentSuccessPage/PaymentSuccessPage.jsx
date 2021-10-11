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
        if (res.data.latestTransaction.status === 'successful') {
          setTimeout(() => history.push('/user-profile-page'), 5000);
        } else {
          setTimeout(() => history.push('/servicepage'), 5000);
        }
      } catch (err) {
        setAlertMessage('Server failed!!');
        setAlertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
        setTimeout(() => history.push('/servicepage'), 5000);
        setLoading(false);
      }
    };
    fetchLatestTransaction();
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
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
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
