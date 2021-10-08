import React, { useRef, useState } from 'react';
import './UpdateProfileForm.css';
import AlertBox from '../AlertBox/AlertBox';
import axios from '../../config/axios';
import { useUserContext } from '../../contetext/Usercontext';
import { removeToken } from '../../service/localStorage';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

function UpdateProfileForm({
  firstName,
  lastName,
  weight,
  height,
  nickName,
  phoneNumber,
  gender,
  education,
  profileImage,
}) {
  let [loading, setLoading] = useState(false);
  const [updateProfile, setUpdateProfile] = useState({
    firstName,
    lastName,
    weight,
    height,
    nickName,
    phoneNumber,
    gender,
    education,
  });
  const [error, setError] = useState({});
  const [updateProfileImage, setUpdateProfileImage] = useState(profileImage);
  const [imagefile, setImagefile] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const { dispatch } = useUserContext();

  const inputProfileImage = useRef();

  const handleClickAddProfileImage = (e) => {
    if (!updateProfileImage) {
      inputProfileImage.current.click();
    }
  };

  const handelChangeInput = (field, e) => {
    setUpdateProfile((cur) => {
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

  const handleClickClearImage = () => {
    setUpdateProfileImage(null);
    setImagefile(null);
  };

  const handleChangeInputFile = (e) => {
    if (['image/jpg', 'image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
      const file = e.target.files[0];
      setImagefile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAlertMessage('Only .png, .jpg and .jpeg format allowed!');
      setTimeout(() => setAlertMessage(''), 3000);
    }
  };

  const handleSubmitUpdateProfile = async (e) => {
    e.preventDefault();

    let allPass = true;

    if (!updateProfile.firstName) {
      allPass = false;
      setError((cur) => ({ ...cur, firstName: 'First name is require.' }));
    }

    if (!updateProfile.lastName) {
      allPass = false;
      setError((cur) => ({ ...cur, lastName: 'Last name is require.' }));
    }

    if (!updateProfile.nickName) {
      allPass = false;
      setError((cur) => ({ ...cur, nickName: 'Nickname is require.' }));
    }

    if (updateProfile.phoneNumber.length !== 10 && updateProfile.phoneNumber !== '') {
      allPass = false;
      setError((cur) => ({ ...cur, phoneNumber: 'Phone Number is invalid length.' }));
    }

    if (isNaN(updateProfile.phoneNumber)) {
      allPass = false;
      setError((cur) => ({ ...cur, phoneNumber: 'Phone Number must be numeric.' }));
    }

    if (isNaN(updateProfile.weight)) {
      allPass = false;
      setError((cur) => ({ ...cur, weight: 'Weight must be numeric.' }));
    }

    if (isNaN(updateProfile.height)) {
      allPass = false;
      setError((cur) => ({ ...cur, height: 'Height must be numeric.' }));
    }

    if (updateProfile.gender === '') {
      allPass = false;
      setError((cur) => ({ ...cur, gender: 'Gender is require.' }));
    }

    if (allPass) {
      const form = new FormData();
      form.append('firstName', updateProfile.firstName);
      form.append('lastName', updateProfile.lastName);
      form.append('weight', updateProfile.weight);
      form.append('height', updateProfile.height);
      form.append('nickName', updateProfile.nickName);
      form.append('phoneNumber', updateProfile.phoneNumber);
      form.append('gender', updateProfile.gender);
      form.append('education', updateProfile.education);

      if (imagefile) {
        form.append('profile-image', imagefile);
      }

      try {
        setLoading(true);
        window.scrollTo(0, 0);
        await axios.put('/users/update_profile', form);
        const res = await axios.get('/refresh_token');
        // console.log(res.data);
        removeToken();
        dispatch({ type: 'LOGIN', payload: { token: res.data.token } });
        window.location.reload();
        setLoading(false);
      } catch (err) {}
    }
  };

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
  }

  return (
    <div className='UpdateProfileForm'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color='alert-box-invalid' /> : null}
      <form className='form-information' onSubmit={handleSubmitUpdateProfile}>
        <div
          className='image-box'
          onClick={handleClickAddProfileImage}
          style={{
            backgroundImage: `url(${updateProfileImage || ''})`,
            cursor: updateProfileImage ? '' : 'pointer',
            backgroundSize: 'cover',
          }}
        >
          {updateProfileImage ? null : <i style={{ fontSize: '35px' }} className='bi bi-plus-lg'></i>}
        </div>
        {!updateProfileImage ? null : (
          <button className='btn-delete-image' type='button' onClick={handleClickClearImage}>
            Delete Image
          </button>
        )}

        <input
          type='file'
          name='profileImage'
          id='profileImage'
          hidden
          ref={inputProfileImage}
          onChange={handleChangeInputFile}
        />
        <div className='form-row'>
          <div className='input-group'>
            <label htmlFor='firstName'>First name</label>
            <br />
            <input
              className={`${error.firstName ? 'input-invalid' : ''}`}
              type='text'
              id='firstName'
              value={updateProfile.firstName}
              onChange={(e) => handelChangeInput('firstName', e)}
            />
            {error.firstName ? <div className='invalid-text'>{error.firstName}</div> : null}
          </div>
          <div className='input-group'>
            <label htmlFor='lastName'>Last Name</label>
            <br />
            <input
              className={`${error.lastName ? 'input-invalid' : ''}`}
              type='text'
              id='lastName'
              value={updateProfile.lastName}
              onChange={(e) => handelChangeInput('lastName', e)}
            />
            {error.lastName ? <div className='invalid-text'>{error.lastName}</div> : null}
          </div>
        </div>

        <div className='form-row'>
          <div className='input-group'>
            <label htmlFor='nickName'>Nickname</label>
            <br />
            <input
              className={`${error.nickName ? 'input-invalid' : ''}`}
              type='text'
              id='nickName'
              value={updateProfile.nickName || ''}
              onChange={(e) => handelChangeInput('nickName', e)}
            />
            {error.nickName ? <div className='invalid-text'>{error.nickName}</div> : null}
          </div>
          <div className='input-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <br />
            <input
              className={`${error.phoneNumber ? 'input-invalid' : ''}`}
              type='text'
              id='phoneNumber'
              value={updateProfile.phoneNumber || ''}
              onChange={(e) => handelChangeInput('phoneNumber', e)}
            />
            {error.phoneNumber ? <div className='invalid-text'>{error.phoneNumber}</div> : null}
          </div>
        </div>

        <div className='form-row'>
          <div className='input-group'>
            <label htmlFor='weight'>Weight</label>
            <br />
            <input
              className={`${error.weight ? 'input-invalid' : ''}`}
              type='text'
              id='weight'
              value={updateProfile.weight || ''}
              onChange={(e) => handelChangeInput('weight', e)}
            />
            {error.weight ? <div className='invalid-text'>{error.weight}</div> : null}
          </div>
          <div className='input-group'>
            <label htmlFor='height'>Height</label>
            <br />
            <input
              className={`${error.height ? 'input-invalid' : ''}`}
              type='text'
              id='height'
              value={updateProfile.height || ''}
              onChange={(e) => handelChangeInput('height', e)}
            />
            {error.height ? <div className='invalid-text'>{error.height}</div> : null}
          </div>
        </div>

        <div className='form-row'>
          <div className='input-group'>
            <label htmlFor='gender'>Gender</label>
            <br />
            <select
              className={`${error.gender ? 'input-invalid' : ''}`}
              name='gender'
              id='gender'
              value={updateProfile.gender || ''}
              onChange={(e) => handelChangeInput('gender', e)}
            >
              <option value=''>none</option>
              <option value='MALE'>Male</option>
              <option value='FEMALE'>Female</option>
              <option value={null}>Other</option>
            </select>
            {error.gender ? <div className='invalid-text'>{error.gender}</div> : null}
          </div>
          <div className='input-group'>
            <label htmlFor='education'>Education</label>
            <br />
            <input
              type='text'
              id='education'
              value={updateProfile.education || ''}
              onChange={(e) => handelChangeInput('education', e)}
            />
          </div>
        </div>
        <button className='btn-submit' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
