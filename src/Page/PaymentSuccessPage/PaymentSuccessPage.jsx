import React from "react";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import { Link } from 'react-router-dom'
import "./PaymentSuccessPage.css";

function PaymentSuccessPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="payment-success-page">
        <div className="container">
          <div className="payment-success-box">
            <div className="content-in-payment-success-box">
              <h1><span>Pay Ment</span> Success !!</h1>
              <p>Go to Your Program Now !</p>
              <Link to='/inprogressprogrampage'><button>Go To Program</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default PaymentSuccessPage;
