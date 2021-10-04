import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './RegisterPage.css';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';
import { isEmail, isStrongPassword } from 'validator';
import axios from '../../config/axios';

function RegisterPage() {
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const history = useHistory();

  const handleChangeInput = (field, e) => {
    setError((cur) => {
      const clone = { ...cur };
      clone[field] = '';
      return clone;
    });
    setRegister((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    if (!register.firstName) {
      setError((cur) => ({ ...cur, firstName: 'firstName is require' }));
    } else if (!register.lastName) {
      setError((cur) => ({ ...cur, lastName: 'lastName is require' }));
    } else if (!isEmail(register.email)) {
      setError((cur) => ({ ...cur, email: 'email is invalid' }));
    } else if (!register.email) {
      setError((cur) => ({ ...cur, email: 'email is require' }));
    } else if (!register.password) {
      setError((cur) => ({ ...cur, password: 'password is require' }));
    } else if (
      !isStrongPassword(register.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError((cur) => ({
        ...cur,
        password:
          'Password must be at least 8 characters, must contain at least one lower-case letter, one upper-case letter, one digit and a special character',
      }));
    } else if (register.password !== register.confirmPassword) {
      setError((cur) => ({
        ...cur,
        password: 'Passwords did not match',
      }));
    } else {
      const res = await axios.post('/users/register', { ...register });
      console.log(res);
      history.push('/loginpage');
      try {
      } catch (err) {
        console.dir(err);
      }
    }
  };

  return (
    <div>
      <div className='registerPage'>
        <section className='register'>
          <div className='container'>
            <div className='form-register'>
              <div className='row-head-of-form'>
                <h1>Create Your Account</h1>
                <div className='logo'>
                  <img src={h_Logo} alt='H-LOGO' />
                  <img src={healthyAtHomeLogo} alt='H-LOGO' />
                </div>
              </div>
              <form onSubmit={handleSubmitRegister}>
                <div className='scope-register-form'>
                  <div className='form-row'>
                    <div className='firstname'>
                      <label htmlFor='firstname'>Firstname</label>
                      <br />
                      <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        className={`${error.firstName ? 'input-invalid' : ''}`}
                        value={register.firstName}
                        onChange={(e) => handleChangeInput('firstName', e)}
                      />
                      {error.firstName ? <div className='invalid-text'>{error.firstName}</div> : null}
                    </div>
                    <div className='lastname'>
                      <label htmlFor='lastname'>Lastname</label>
                      <br />
                      <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        className={`${error.lastName ? 'input-invalid' : ''}`}
                        value={register.lastName}
                        onChange={(e) => handleChangeInput('lastName', e)}
                      />
                      {error.lastName ? <div className='invalid-text'>{error.lastName}</div> : null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='email'>
                      <label htmlFor='email'>Email</label>
                      <br />
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className={`${error.email ? 'input-invalid' : ''}`}
                        value={register.email}
                        onChange={(e) => handleChangeInput('email', e)}
                      />
                      {error.email ? <div className='invalid-text'>{error.email}</div> : null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='password'>
                      <label htmlFor='password'>Password</label>
                      <br />
                      <input
                        type='password'
                        name='password'
                        id='password'
                        className={`${error.password ? 'input-invalid' : ''}`}
                        value={register.password}
                        onChange={(e) => handleChangeInput('password', e)}
                      />
                    </div>
                    <div className='confirmPassword'>
                      <label htmlFor='confirmPassword'>Confirm password</label>
                      <br />
                      <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        className={`${error.password ? 'input-invalid' : ''}`}
                        value={register.confirmPassword}
                        onChange={(e) => handleChangeInput('confirmPassword', e)}
                      />
                      {/* {error.confirmPassword ? <div className='invalid-text'>{error.confirmPassword}</div> : null} */}
                    </div>
                  </div>
                  {error.password ? <div className='invalid-text'>{error.password}</div> : null}
                  <input type='submit' value='Register' />
                </div>
              </form>
              <p>
                Do you already have an account? <Link to='/loginpage'>Login</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RegisterPage;
