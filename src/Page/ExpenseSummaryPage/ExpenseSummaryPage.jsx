import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './ExpenseSummaryPage.css';

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
  });
  const location = useLocation();
  // console.log(location.state);

  const history = useHistory();

  useEffect(() => {
    setState(location.state);
  }, [location]);

  const formatDateToShow = date => date.split('-').join('/');

  const handleClickSubmit = () => {
    history.push({ pathname: '/paymentpage', state: state });
  };

  return (
    <div>
      <div style={{ marginBottom: '2.083333333333333vw' }}></div>
      <div className="expen-summary-page">
        <section className="expense-summary">
          <div className="container">
            <div className="form-sumary">
              <div className="img-in-expen-summary-page"></div>
              <div className="content-summary">
                <div className="summary-row">
                  <h1>Selected Program :</h1>
                  <div className="col-in-summary">
                    <p>{state.courseName}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Price :</h1>
                  <div className="col-in-summary">
                    <p>{state.price} THB</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Name :</h1>
                  <div className="col-in-summary">
                    <p>{state.fname + ' ' + state.lname}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Phone Numbers :</h1>
                  <div className="col-in-summary">
                    <p>{state.telNumber}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Gender :</h1>
                  <div className="col-in-summary">
                    <p>{state.gender}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Weight :</h1>
                  <div className="col-in-summary">
                    <p>{state.weight} kg.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Heigth :</h1>
                  <div className="col-in-summary">
                    <p>{state.height} cm.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Food you are allergic :</h1>
                  <div className="col-in-summary">
                    <p>{state.foodAllergic ? state.foodAllergic : '-'}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Type of food :</h1>
                  <div className="col-in-summary">
                    <p>{state.typeOfFood}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Ever lost weight :</h1>
                  <div className="col-in-summary">
                    <p>{state.loseWeightBefore || '-'}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Date to Start :</h1>
                  <div className="col-in-summary">
                    <p>{formatDateToShow(state.dateToStart)}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Congenital disease :</h1>
                  <div className="col-in-summary">
                    <p>
                      {state.disease.haveDisease === 'yes'
                        ? state.disease.message
                        : state.disease.haveDisease}
                    </p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Additional Detail :</h1>
                </div>
                <div className="text-in-summary">
                  <p>{state.additional || ''}</p>
                </div>
                <div className="button-in-summary">
                  <button
                    className="confirm-your-ourder"
                    onClick={handleClickSubmit}
                  >
                    Confirm Your Ourder
                  </button>
                  <button className="edit-your-ourder">Edit Your Ourder</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExpenseSummaryPage;
