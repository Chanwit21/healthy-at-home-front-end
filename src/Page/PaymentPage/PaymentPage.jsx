import React from "react";
import ContactUsComponent from "../../Component/ContactUsComponent/ContactUsComponent";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import "./PaymentPage.css";

function PaymentPage() {
  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="payment-page">
        <section className="choose-payment">
          <div className="container">
            <div className="contant-payment-row">
              <div className="payment-method">
                <h1>Choose a payment method</h1>
                <form action="#">
                  <div className="credit-debit-card-payment">
                    <input
                      type="radio"
                      name="payment-methode"
                      id="credit-debitcard"
                    />
                    <label htmlFor="credit-debitcard">Credit/Debit Card</label>
                    <br />
                    <p>Please pay before 11 PM.</p>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="Credit/Debit card number"
                    />
                    <br />
                    <input
                      type="text"
                      name="name-on-card"
                      id="name-on-card"
                      placeholder="Name on card"
                    />
                    <br />
                    <div className="row-expiration-date-cvv">
                      <input
                        type="month"
                        name="expiration-date"
                        id="expiration-date"
                        placeholder="Expiration date(MM/YY)"
                      />
                      <input
                        type="password"
                        name="cvv"
                        id="cvv"
                        placeholder="CVV"
                        maxlength="3"
                      />
                    </div>
                    <p>
                      <input
                        type="checkbox"
                        name="remember-card"
                        id="remember-card"
                      />
                      <label htmlFor="remember-card">Remember this card</label>
                    </p>
                    <input type="submit" value="Make Payment" />
                  </div>
                  <div className="transfer-through-bank-account">
                    <input
                      type="radio"
                      name="payment-methode"
                      id="transfer-through-bank-account"
                    />
                    <div className="contanet-in-transfer-through-bank-account">
                      <label htmlFor="transfer-through-bank-account">
                        Transfer through bank account
                      </label>
                      <br />
                      <p>Application / ATM / Counter or bank website</p>
                      <select name="bank-name" id="bankname">
                        <option value="none">Choose Bank</option>
                        <option value="kasikorn">Kasikorn-Bank</option>
                        <option value="thai-panit-bank">Thai Panit Bank</option>
                        <option value="krungsri-bank">Krungsri Bank</option>
                      </select>
                      <select
                        name="bank-name"
                        id="bankname"
                        placeholder="Choose Payment Methode"
                      >
                        <option value="none">Choose Payment Methode</option>
                        <option value="kasikorn">Kasikorn-Bank</option>
                        <option value="thai-panit-bank">Thai Panit Bank</option>
                        <option value="krungsri-bank">Krungsri Bank</option>
                      </select>
                      <input type="submit" value="Make Payment" />
                    </div>
                  </div>
                  <div className="counter-service">
                    <input
                      type="radio"
                      name="payment-methode"
                      id="counter-service"
                    />
                    <div className="contanet-in-counter-service">
                      <label htmlFor="counter-service">
                      Counter Service
                      </label>
                      <br />
                      <p>Please pay before 11 PM.</p>
                      <input type="submit" value="Make Payment" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="summary-payment">
                  <div className="content-in-summary-payment">
                      <h1>Detail</h1>
                      <div className="detail-row">
                          <h1>Selected Program</h1>
                          <p>45 Day Program</p>
                      </div>
                      <div className="detail-row">
                          <h1>Name</h1>
                          <p>Wuttichai Chankracang</p>
                      </div>
                      <div className="detail-row">
                          <h1>Phone Numbers </h1>
                          <p>089-698-xxxx</p>
                      </div>
                      <div className="detail-row">
                          <h1>Date to Start</h1>
                          <p>2021/08/11</p>
                      </div>
                      <div className="horizental-line"></div>
                      <div className="detail-row">
                          <h1>Total products</h1>
                          <p>15,000 THB</p>
                      </div>
                      <div className="detail-row">
                          <h1>Discount</h1>
                          <p>0 THB</p>
                      </div>
                      <div className="detail-row">
                          <h1>Payment summary</h1>
                          <p>15,000 THB</p>
                      </div>
                  </div>
              </div>
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
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default PaymentPage;
