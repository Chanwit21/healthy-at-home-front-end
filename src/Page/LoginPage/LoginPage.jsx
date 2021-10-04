import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LoginPage.css';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';
import { isEmail, isStrongPassword } from 'validator';
import axios from '../../config/axios';
import { useUserContext } from '../../contetext/Usercontext';

function LoginPage() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [err, setErr] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const { dispatch } = useUserContext();
  const history = useHistory();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!isEmail(login.email)) {
      return setErr((cur) => ({ ...cur, email: 'Email is invalid Format' }));
    }

    if (
      !isStrongPassword(login.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return setErr((cur) => ({
        ...cur,
        password:
          'Password must be at least 8 characters, must contain at least one lower-case letter, one upper-case letter, one digit and a special character',
      }));
    }
    try {
      const res = await axios.post('/users/login', { email: login.email, password: login.password });
      console.log(res.data);
      dispatch({ type: 'LOGIN', payload: { token: res.data.token } });
      history.push('/');
    } catch (error) {
      console.dir(error);
      if (error.response?.status === 400 && error.response?.data.message) {
        setLoginError(error.response.data.message);
        setTimeout(() => {
          setLoginError('');
        }, 5000);
      }
    }
  };

  const handleChangeEmail = (e) => {
    setLogin((curr) => ({ ...curr, email: e.target.value }));
    setErr((cur) => ({ ...cur, email: '' }));
  };

  const handleChangePassword = (e) => {
    setLogin((curr) => ({ ...curr, password: e.target.value }));
    setErr((cur) => ({ ...cur, password: '' }));
  };

  return (
    <div className='loginPage'>
      <section className='login'>
        <div className='container'>
          <div className='login-form'>
            <div className='logo'>
              <img src={h_Logo} alt='H-LOGO' />
              <img src={healthyAtHomeLogo} alt='Text-LOGO' />
            </div>
            <form onSubmit={handleSubmitLogin}>
              <div className='scope-form-login'>
                <label htmlFor='email'>Email</label>
                <br />
                <input type='email' name='email' id='email' value={login.email} onChange={handleChangeEmail} />
                {err.email ? <div className='error'>{err.email}</div> : null}
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={login.password}
                  onChange={handleChangePassword}
                />
                {err.password ? <div className='error'>{err.password}</div> : null}
                {loginError ? <div className='login-error'>{loginError}</div> : null}
                <p>
                  <Link to='#' className='fogot-password'>
                    Forgot Your Password?
                  </Link>
                </p>
                <input type='submit' value='LOG IN' />
                <p>
                  Don’t have an account?
                  <Link to='/registerpage' className='register'>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
