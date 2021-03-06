import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from '../../config/axios';
import './ExpenseSummaryPage.css';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

function ExpenseSummaryPage() {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    weight: '',
    height: '',
    telNumber: '',
    foodAllergic: '',
    typeOfFood: '',
    loseWeightBefore: '',
    disease: '',
    gender: '',
    additional: '',
    courseName: '',
    price: '',
    dateToStart: '',
    serviceId: '',
  });
  const [aleartMessage, setAleartMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  // console.log(location.state);

  const history = useHistory();

  useEffect(() => {
    setState(location.state);
  }, [location]);

  const formatDateToShow = (date) => date.split('-').join('/');

  const handleClickEditYourOrder = () => {
    history.push({ pathname: '/informatioservicetoregisterprogrampage', state: state });
  };

  // const handleScriptLoad = () => {
  const OmiseCard = window.OmiseCard;
  OmiseCard.configure({
    publicKey: 'pkey_test_5pdoxhl4p3erc27pgew',
    currency: 'THB',
    frameLabel: 'Healthy At Home',
    submitLabel: 'PAY NOW',
    buttonLabel: 'Pay',
  });
  // };

  const orderConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethods: ['internet_banking', 'truemoney', 'rabbit_linepay'],
    });
  };

  const handleClickOrderNow = (e) => {
    e.preventDefault();
    orderConfigure();
    OmiseCard.open({
      amount: +state.price.slice(1).split(',').join('') * 100,
      onCreateTokenSuccess: async (nonce) => {
        if (nonce.startsWith('tokn_')) {
          try {
            setLoading(true);
            const res = await axios.post('/payment/card', {
              token: nonce,
              amount: +state.price.slice(1).split(',').join('') * 100,
              serviceId: state.serviceId,
              state: state,
            });
            // console.log(res.data.charge);
            if (res.data.charge.status === 'successful') {
              await axios.post('/user_trainer_relational/create_user_trainer_relational', {
                loseWeightBefore: state.loseWeightBefore || null,
                desease: state.disease.message || null,
                dateStart: state.dateToStart,
                foodAllergic: state.foodAllergic || null,
                typeOfFood: state.typeOfFood,
                courseServiceId: state.serviceId,
              });
              const message = (
                <>
                  <h1>Pay Ment Successful !!</h1>
                  <p>Go to Your Program Now !</p>
                  <Link to='/user-profile-page'>
                    <button>Go To Program</button>
                  </Link>
                </>
              );
              setAleartMessage(message);
              setTimeout(() => history.push('/user-profile-page'), 3000);
            } else {
              setAleartMessage('Payment failed');
            }
            setLoading(false);
          } catch (err) {
            setAleartMessage('Payment failed');
            setLoading(false);
          }
        } else {
          // console.log(nonce);
          try {
            setLoading(true);
            const res = await axios.post('/payment/source', {
              source: nonce,
              amount: +state.price.slice(1).split(',').join('') * 100,
              serviceId: state.serviceId,
              state: state,
            });
            // console.log(res.data.charge);
            // window.open(res.data.charge.authorize_uri, '_blank');
            setLoading(false);
            window.location.href = res.data.charge.authorize_uri;
          } catch (err) {
            setAleartMessage('Server failed');
            setTimeout(() => setAleartMessage(''), 3000);
            setLoading(false);
          }
        }
      },
      onFormClosed: () => {
        // console.log('Test');
      },
    });
  };

  const handleClickCloseAlertBox = () => {
    setAleartMessage('');
  };

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
      <div style={{ marginBottom: '2.083333333333333vw' }}></div>
      <div className='expen-summary-page'>
        <section className='expense-summary'>
          <div className='container'>
            <div className='form-sumary'>
              <div className='img-in-expen-summary-page'></div>
              <div className='content-summary'>
                <div className='summary-row'>
                  <h1>Selected Program :</h1>
                  <div className='col-in-summary'>
                    <p>{state.courseName}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Price :</h1>
                  <div className='col-in-summary'>
                    <p>{state.price} THB</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Name :</h1>
                  <div className='col-in-summary'>
                    <p>{state.fname + ' ' + state.lname}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Phone Numbers :</h1>
                  <div className='col-in-summary'>
                    <p>{state.telNumber}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Gender :</h1>
                  <div className='col-in-summary'>
                    <p>{state.gender}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Weight :</h1>
                  <div className='col-in-summary'>
                    <p>{state.weight} kg.</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Heigth :</h1>
                  <div className='col-in-summary'>
                    <p>{state.height} cm.</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Food you are allergic :</h1>
                  <div className='col-in-summary'>
                    <p>{state.foodAllergic ? state.foodAllergic : '-'}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Type of food :</h1>
                  <div className='col-in-summary'>
                    <p>{state.typeOfFood}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Ever lost weight :</h1>
                  <div className='col-in-summary'>
                    <p>{state.loseWeightBefore || '-'}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Date to Start :</h1>
                  <div className='col-in-summary'>
                    <p>{formatDateToShow(state.dateToStart)}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Congenital disease :</h1>
                  <div className='col-in-summary'>
                    <p>{state.disease.haveDisease === 'yes' ? state.disease.message : state.disease.haveDisease}</p>
                  </div>
                </div>
                <div className='summary-row'>
                  <h1>Additional Detail :</h1>
                </div>
                <div className='text-in-summary'>
                  <p>{state.additional || ''}</p>
                </div>
                <div className='button-in-summary'>
                  <form>
                    <button
                      id='order_now'
                      className='confirm-your-ourder'
                      onClick={handleClickOrderNow}
                      disabled={!!aleartMessage}
                    >
                      Order now
                    </button>
                  </form>
                  <button className='edit-your-ourder' onClick={handleClickEditYourOrder} disabled={!!aleartMessage}>
                    Edit Your Ourder
                  </button>
                </div>
              </div>
            </div>
            {aleartMessage ? (
              <div
                className={`alert-box ${typeof aleartMessage === 'string' ? 'alert-box-invalid' : 'alert-box-valid'}`}
              >
                {typeof aleartMessage === 'string' ? (
                  <div className='alert-box-icon'>
                    <button onClick={handleClickCloseAlertBox}>
                      <i style={{ fontSize: '25px' }} className='bi bi-x'></i>
                    </button>
                  </div>
                ) : null}
                {aleartMessage}
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExpenseSummaryPage;
