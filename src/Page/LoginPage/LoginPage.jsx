import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LoginPage.css';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';
import { isEmail } from 'validator';
import axios from '../../config/axios';
import { useUserContext } from '../../contetext/Usercontext';

function LoginPage() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [err, setErr] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const { dispatch } = useUserContext();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setAlertMessage(location.state.message);
      setTimeout(() => {
        setAlertMessage('');
        history.replace();
      }, 3000);
    }
  }, [location, history]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!isEmail(login.email)) {
      return setErr((cur) => ({ ...cur, email: 'Email is invalid Format' }));
    }
    try {
      const res = await axios.post('/users/login', { email: login.email, password: login.password });
      // console.log(res.data);
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
            {alertMessage ? <div className='alert-box '>{alertMessage}</div> : null}
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
