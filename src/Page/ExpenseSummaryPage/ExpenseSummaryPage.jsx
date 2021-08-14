import React from "react";
import "./ExpenseSummaryPage.css";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";

function ExpenseSummaryPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <div className="expen-summary-page">
        <section className="expense-summary">
          <div className="container">
            <div className="form-sumary">
              <div className="img-in-expen-summary-page"></div>
              <div className="content-summary">
                <div className="summary-row">
                  <h1>Selected Program :</h1>
                  <div className="col-in-summary">
                    <p>45 Days Program</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Price :</h1>
                  <div className="col-in-summary">
                    <p>15,000 THB</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Name :</h1>
                  <div className="col-in-summary">
                    <p>Wuttichai  Chankracang</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Phone Numbers :</h1>
                  <div className="col-in-summary">
                    <p>089-698-xxxx</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Gender :</h1>
                  <div className="col-in-summary">
                    <p>Male</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Weight :</h1>
                  <div className="col-in-summary">
                    <p>70 kg.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Heigth :</h1>
                  <div className="col-in-summary">
                    <p>170 cm.</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Food you are allergic :</h1>
                  <div className="col-in-summary">
                    <p>Shrimp</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Type of food :</h1>
                  <div className="col-in-summary">
                    <p>Vegan Food</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Ever lost weight :</h1>
                  <div className="col-in-summary">
                    <p>Intermitent Fasting</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Exercise ever done :</h1>
                  <div className="col-in-summary">
                    <p>Cardio,Body Weight</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Date to Start :</h1>
                  <div className="col-in-summary">
                    <p>2021/08/11</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Congenital disease :</h1>
                  <div className="col-in-summary">
                    <p>Allergy</p>
                  </div>
                </div>
                <div className="summary-row">
                  <h1>Additional Detail :</h1>
                </div>
                  <div className="text-in-summary">
                      <p>Additiional Detail</p>
                  </div>
                  <div className="button-in-summary">
                      <button className="confirm-your-ourder">Confirm Your Ourder</button><button className='edit-your-ourder'>Edit Your Ourder</button>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default ExpenseSummaryPage;
