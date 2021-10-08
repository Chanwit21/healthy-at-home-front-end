import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NavComponent.css';
import h_Logo from '../../PIC/LOGO/h.png';
import healthyAtHomeLogo from '../../PIC/LOGO/He__2_-removebg-preview.png';
import avataIcon from '../../PIC/Icon/user.png';
import { useUserContext } from '../../contetext/Usercontext';

function NavComponent() {
  const {
    state: { user },
    dispatch,
  } = useUserContext();
  // console.log(user);

  const history = useHistory();

  const handleClickLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  const name = user
    ? user.firstName.length <= 13
      ? `${user.firstName}`
      : `${user.firstName}`.slice(0, 10) + '...'
    : '';

  return (
    <>
      <nav className='navBar'>
        <div className='navContainer'>
          <Link to='/'>
            <div className='Logo'>
              <div className='H-Logo'>
                <img src={h_Logo} alt='H_Logo' />
              </div>
              <div className='healthy-logo'>
                <img src={healthyAtHomeLogo} alt='Taxt-Logo' />
              </div>
            </div>
          </Link>
          <div className='nav-content'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='servicepage'>Service</Link>
              </li>
              <li>
                <Link to='/trainerpage'>Trainers</Link>
              </li>
              <li>
                <Link to='/aboutpage'>About</Link>
              </li>
            </ul>
            {user ? (
              <Link to='/user-profile-page' style={{ textDecoration: 'none', color: 'black' }}>
                <div
                  className='log-in-status'
                  style={{
                    backgroundColor:
                      user.role === 'ADMIN' ? '#ff88a4' : user.role === 'TRAINER' ? '#61D196' : '#FFF6DD',
                  }}
                >
                  <div className='userstatus-icon'>
                    <img src={user.image || avataIcon} alt='User-icon' />
                  </div>
                  <p>{name}</p>
                </div>
              </Link>
            ) : (
              <Link to='/loginpage' style={{ textDecoration: 'none', color: 'black' }}>
                <div className='log-in-status'>
                  <div className='userstatus-icon'>
                    <img src={avataIcon} alt='User-icon' />
                  </div>
                  <p>Login/Register</p>
                </div>
              </Link>
            )}
            {user ? (
              <div className='log-out-status'>
                <button onClick={handleClickLogout}>Logout</button>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
