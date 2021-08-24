import React from 'react';
import { useLocation } from 'react-router-dom';
import './ExpenseSummaryPage.css';

function ExpenseSummaryPage() {
  const location = useLocation();
  // console.log(location.state);
  const {
    fname,
    lname,
    weight,
    height,
    telNumber,
    foodAllergic,
    typeOfFood,
    loseWeightBefore,
    disease,
    gender,
    additional,
    courseName,
    price,
    dateToStart,
  } = location.state;

  const formatDateToShow = date => date.split('-').join('/');

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
                    <p>{courseName}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Price :</h1>
                  <div className="col-in-summary">
                    <p>{price} THB</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Name :</h1>
                  <div className="col-in-summary">
                    <p>{fname + ' ' + lname}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Phone Numbers :</h1>
                  <div className="col-in-summary">
                    <p>{telNumber}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Gender :</h1>
                  <div className="col-in-summary">
                    <p>{gender}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Weight :</h1>
                  <div className="col-in-summary">
                    <p>{weight} kg.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Heigth :</h1>
                  <div className="col-in-summary">
                    <p>{height} cm.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Food you are allergic :</h1>
                  <div className="col-in-summary">
                    <p>{foodAllergic ? foodAllergic : '-'}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Type of food :</h1>
                  <div className="col-in-summary">
                    <p>{typeOfFood}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Ever lost weight :</h1>
                  <div className="col-in-summary">
                    <p>{loseWeightBefore || '-'}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Date to Start :</h1>
                  <div className="col-in-summary">
                    <p>{formatDateToShow(dateToStart)}</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Congenital disease :</h1>
                  <div className="col-in-summary">
                    <p>
                      {disease.haveDisease === 'yes'
                        ? disease.message
                        : disease.haveDisease}
                    </p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Additional Detail :</h1>
                </div>
                <div className="text-in-summary">
                  <p>{additional || ''}</p>
                </div>
                <div className="button-in-summary">
                  <button className="confirm-your-ourder" type="submit">
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
