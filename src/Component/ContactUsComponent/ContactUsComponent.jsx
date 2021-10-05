import React, { useState } from 'react';
import './ContactUsComponent.css';
import twitter from '../../PIC/Icon/twitter.png';
import facebook from '../../PIC/Icon/facebook.png';
import instagram from '../../PIC/Icon/instagram.png';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';
import axios from '../../config/axios';

function ContactUsComponent() {
  const [contactUs, setContactUs] = useState({ firstName: '', lastName: '', email: '', additionalDetail: '' });
  const [error, setError] = useState({ firstName: '', lastName: '', email: '', additionalDetail: '' });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeInput = (field, e) => {
    setContactUs((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
    setError((cur) => {
      const clone = { ...cur };
      clone[field] = '';
      return clone;
    });
  };

  const handleSubmitContactUs = async (e) => {
    e.preventDefault();

    let allPass = true;

    if (!contactUs.firstName.trim()) {
      setError((cur) => ({ ...cur, firstName: 'First name is require.' }));
      setContactUs((cur) => ({ ...cur, firstName: '' }));
      allPass = false;
    }
    if (!contactUs.lastName.trim()) {
      setError((cur) => ({ ...cur, lastName: 'Last name is require.' }));
      setContactUs((cur) => ({ ...cur, lastName: '' }));
      allPass = false;
    }
    if (!contactUs.email.trim()) {
      setError((cur) => ({ ...cur, email: 'email is require.' }));
      setContactUs((cur) => ({ ...cur, email: '' }));
      allPass = false;
    }
    if (!contactUs.additionalDetail.trim()) {
      allPass = false;
      setError((cur) => ({ ...cur, additionalDetail: 'Additional detail is require.' }));
      setContactUs((cur) => ({ ...cur, additionalDetail: '' }));
    }

    if (allPass) {
      try {
        await axios.post('/contact_us', { ...contactUs });
        setAlertMessage('Thank you! Your message has been successfully sent.');
        setTimeout(() => setAlertMessage(''), 3000);
        setContactUs({ firstName: '', lastName: '', email: '', additionalDetail: '' });
      } catch (err) {
        console.dir(err);
        if (err.response) {
          setAlertMessage('Cannot connect the computer to the server');
          setTimeout(() => setAlertMessage(''), 3000);
        }
      }
    }
  };

  return (
    <div>
      <div className='contact-us-content'>
        <div className='contact-us-text'>
          <h1>Contact us</h1>
          <p>Tal : 02-xxx-xxxx</p>
          <p>Line : @Fit@Home</p>
          <p>Email : FitAtHome@gmail.com</p>
          <div className='contact-us-img'>
            <img src={twitter} alt='twitter' />
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
          </div>
        </div>
        {alertMessage ? (
          <div className={`alert-box${alertMessage.includes('server') ? ' alert-box-invalid' : ' alert-box-valid'}`}>
            {alertMessage}
          </div>
        ) : null}
        <div className='contact-us-form'>
          <img src={h_Logo} alt='H-LOGO' />
          <img src={healthyAtHomeLogo} alt='H-LOGO' />
          <form onSubmit={handleSubmitContactUs}>
            <div className='label'>
              <label htmlFor='firstname'>Firstname : </label>
              <br />
              <label htmlFor='lastname'>Lastname : </label>
              <br />
              <label htmlFor='email'>Email : </label>
              <br />
              <label htmlFor='aditional'>Additional Detial : </label>
            </div>
            <div className='input-group'>
              <input
                className={`${error.firstName ? 'input-invalid' : ''}`}
                type='text'
                id='firstname'
                name='firstname'
                placeholder={error.firstName}
                value={contactUs.firstName}
                onChange={(e) => handleChangeInput('firstName', e)}
              />
              <br />
              <input
                className={`${error.lastName ? 'input-invalid' : ''}`}
                type='text'
                id='lastname'
                name='lastname'
                placeholder={error.lastName}
                value={contactUs.lastName}
                onChange={(e) => handleChangeInput('lastName', e)}
              />
              <br />
              <input
                className={`${error.email ? 'input-invalid' : ''}`}
                type='email'
                id='email'
                name='email'
                placeholder={error.email}
                value={contactUs.email}
                onChange={(e) => handleChangeInput('email', e)}
              />
              <br />
              <textarea
                id='aditional'
                name='aditional'
                rows='4'
                cols='50'
                className={`${error.additionalDetail ? 'input-invalid' : ''}`}
                placeholder={error.additionalDetail}
                value={contactUs.additionalDetail}
                onChange={(e) => handleChangeInput('additionalDetail', e)}
              ></textarea>
            </div>
            <br />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
