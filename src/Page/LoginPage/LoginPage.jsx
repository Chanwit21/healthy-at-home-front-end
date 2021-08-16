import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';

function LoginPage() {
  return (
    <div>
      <div className='loginPage'>
        <section className='login'>
          <div className='container'>
            <div className='login-form'>
              <div className='logo'>
                <img src={h_Logo} alt='H-LOGO' />
                <img src={healthyAtHomeLogo} alt='Text-LOGO' />
              </div>
              <form action='#'>
                <div className='scope-form-login'>
                  <label htmlFor='email'>Email</label>
                  <br />
                  <input type='email' name='email' id='email' />
                  <br />
                  <label htmlFor='password'>Password</label>
                  <br />
                  <input type='password' name='email' id='email' />
                  <p>
                    <Link to='#' className='fogot-password'>
                      Forgot Your Password?
                    </Link>
                  </p>
                  <input type='submit' value='LOG IN' />
                  <p>
                    Don’t have an account?{' '}
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
    </div>
  );
}

export default LoginPage;
