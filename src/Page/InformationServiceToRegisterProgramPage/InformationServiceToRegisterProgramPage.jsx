import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import './InformationServiceToRegisterProgramPage.css';
import {
  validateWeight,
  validateLname,
  validateHeight,
  validateFname,
  validateDate,
  validateGender,
  validateDisease,
  validateTypeOfFood,
  validatePhoneNumber,
} from '../../service/validateInformationServiceToRegister';

function InformationServiceToRegisterProgramPage() {
  const location = useLocation();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [foodAllergic, setFoodAllergic] = useState('');
  const [typeOfFood, setTypeOfFood] = useState('');
  const [loseWeightBefore, setLoseWeightBefore] = useState('');
  const [disease, setDisease] = useState({ haveDisease: '', message: '' });
  const [gender, setGender] = useState('');
  const [additional, setAdditional] = useState('');
  const [dateToStart, setDateToStart] = useState('');
  const [error, setError] = useState({ fname: '' });
  const courseName = location.state.courseName;
  const serImgPath = location.state.serImgPath;

  // console.log(location.state);
  const history = useHistory();
  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   if (location.state) {
  //     setCourseName(location.state.courseName);
  //     setSerImgPath(location.state.serImgPath);
  //   }
  // }, [location]);

  const handleChangeFirstname = (e) => {
    setFname(e.target.value);
    setError((current) => ({ ...current, fname: validateFname(e.target.value) }));
  };

  const handleChangeLastname = (e) => {
    setLname(e.target.value);
    setError((current) => ({ ...current, lname: validateLname(e.target.value) }));
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
    setError((current) => ({
      ...current,
      weight: validateWeight(e.target.value),
    }));
  };

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
    setError((current) => ({
      ...current,
      height: validateHeight(e.target.value),
    }));
  };

  const handleChangeTelephoneNumber = (e) => {
    setTelNumber(e.target.value);
    setError((current) => ({
      ...current,
      phone: validatePhoneNumber(e.target.value, false),
    }));
  };

  const handleChangeFoodAllergic = (e) => {
    setFoodAllergic(e.target.value);
  };

  const handleChangeTypeOfFood = (e) => {
    setTypeOfFood(e.target.value);
    setError((current) => ({
      ...current,
      'type-of-food': validateTypeOfFood(e.target.value),
    }));
  };

  const handleChangeLoseWeightBefore = (e) => {
    setLoseWeightBefore(e.target.value);
  };

  const handleChangeDisease = (e, key) => {
    const cloneDisease = { ...disease };
    cloneDisease[key] = e.target.value;
    setDisease(cloneDisease);
    setError((current) => ({
      ...current,
      disease: '',
    }));
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
    setError((current) => ({
      ...current,
      gender: validateGender(e.target.value),
    }));
  };

  const handleChangDateToStart = (e) => {
    const date = e.target.value;
    // console.log(date);
    setDateToStart(date);
    setError((current) => ({
      ...current,
      dateToStart: validateDate(e.target.value),
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const error_fname = validateFname(fname);
    const error_lname = validateLname(lname);
    const error_weight = validateWeight(weight);
    const error_height = validateHeight(height);
    const error_telNumber = validatePhoneNumber(telNumber);
    const error_typeOfFood = validateTypeOfFood(typeOfFood);
    const error_disease = validateDisease(disease);
    const error_gender = validateGender(gender);
    const error_dateToStart = validateDate(dateToStart);
    if (
      error_fname ||
      error_lname ||
      error_weight ||
      error_height ||
      error_telNumber ||
      error_typeOfFood ||
      error_disease ||
      error_gender ||
      error_dateToStart
    ) {
      setError((current) => ({
        ...current,
        fname: error_fname,
        lname: error_lname,
        weight: error_weight,
        height: error_height,
        phone: error_telNumber,
        'type-of-food': error_typeOfFood,
        gender: error_gender,
        disease: error_disease,
        dateToStart: error_dateToStart,
      }));
    } else {
      history.push({
        pathname: '/expensesummarypage',
        state: {
          fname,
          lname,
          weight,
          height,
          telNumber,
          foodAllergic,
          typeOfFood,
          loseWeightBefore,
          disease,
          gender,
          dateToStart,
          additional,
          courseName: location.state.courseName,
          price: location.state.price,
        },
      });
    }
  };

  return (
    <>
      <div className='informationServiceToRegisterProgramPage'>
        <section className='service-card-section'>
          <div className='container'>
            <div className='service-card'>
              <div className='img' style={{ backgroundImage: `url(${serImgPath})` }}></div>
              <div className='text-in-card'>
                <p>{courseName}</p>
              </div>
            </div>
          </div>
        </section>
        <section className='form-information-section'>
          <div className='container'>
            <div className='form-information'>
              <form onSubmit={handleSubmitForm}>
                <div className='form-row'>
                  <div className='first-name'>
                    <label htmlFor='firstname'>Firstname</label>
                    <br />
                    <input
                      className={`${error.fname ? 'input-invalid' : ''}`}
                      type='text'
                      name='firstname'
                      id='firstname'
                      value={fname}
                      onChange={handleChangeFirstname}
                    />
                    {error.fname ? <div className='invalid-text'>{error.fname}</div> : null}
                  </div>
                  <div className='last-name'>
                    <label htmlFor='lastname'>Lastname</label>
                    <br />
                    <input
                      className={`${error.lname ? 'input-invalid' : ''}`}
                      type='text'
                      name='lastname'
                      id='lastname'
                      value={lname}
                      onChange={handleChangeLastname}
                    />
                    {error.lname ? <div className='invalid-text'>{error.lname}</div> : null}
                  </div>
                </div>
                <div className='form-row'>
                  <div className='weight'>
                    <label htmlFor='weight'>Weight(kg.)</label>
                    <br />
                    <input
                      className={`${error.weight ? 'input-invalid' : ''}`}
                      type='text'
                      name='weight'
                      id='weight'
                      value={weight}
                      onChange={handleChangeWeight}
                      maxLength={3}
                    />
                    {error.weight ? <div className='invalid-text'>{error.weight}</div> : null}
                  </div>
                  <div className='height'>
                    <label htmlFor='height'>Heigth(cm.)</label>
                    <br />
                    <input
                      className={`${error.height ? 'input-invalid' : ''}`}
                      type='text'
                      name='height'
                      id='height'
                      value={height}
                      onChange={handleChangeHeight}
                      maxLength={3}
                    />
                    {error.height ? <div className='invalid-text'>{error.height}</div> : null}
                  </div>
                </div>
                <div className='form-row'>
                  <div className='telephone'>
                    <label htmlFor='telephone'>Telephone Numbers</label>
                    <br />
                    <input
                      className={error.phone ? 'input-invalid' : ''}
                      type='tel'
                      name='telephone'
                      id='telephone'
                      value={telNumber}
                      onChange={handleChangeTelephoneNumber}
                    />
                    {error.phone ? <div className='invalid-text'>{error.phone}</div> : null}
                  </div>
                  <div className='food-allergic'>
                    <label htmlFor='food-allergic'>Food you are allergic?</label>
                    <br />
                    <input
                      type='text'
                      name='food-allergic'
                      id='food-allergic'
                      value={foodAllergic}
                      onChange={handleChangeFoodAllergic}
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='type-of-food'>
                    <label htmlFor='type-of-food'>Type of food</label>
                    <br />
                    <select
                      className={`${error['type-of-food'] ? 'input-invalid' : ''}`}
                      name='type-of-food'
                      id='type-of-food'
                      value={typeOfFood}
                      onChange={handleChangeTypeOfFood}
                    >
                      <option value=''>none</option>
                      <option value='vegan'>Vegan</option>
                      <option value='halal'>Halal</option>
                      <option value='plant-base'>Plant Base</option>
                      <option value='meat-and-poultry'>Meat and poultry.</option>
                      <option value='fish-and-seafood'>Fish and seafood.</option>
                      <option value='all-types'>All types of food</option>
                    </select>
                    {error['type-of-food'] ? <div className='invalid-text'>{error['type-of-food']}</div> : null}
                  </div>
                  <div className='type-lose-weight-before'>
                    <label htmlFor='type-lose-weight-before'>How did you lose weight before?</label>
                    <br />
                    <select
                      name='lose-weight-before'
                      id='lose-weight-before'
                      value={loseWeightBefore}
                      onChange={handleChangeLoseWeightBefore}
                    >
                      <option value=''>none</option>
                      <option value='intermediate-fasting'>Intermediate Fasting</option>
                      <option value='keto-diet'>Keto Diet</option>
                      <option value='mediterranean-diet'>The Mediterranean diet</option>
                      <option value='atkins-diet'>Atkins Diet</option>
                      <option value='Paleo'>Paleo</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='disease'>
                    <label htmlFor='disease'>Do you have any underlying disease?</label>
                    <br />
                    <div className='row-radio-check'>
                      <div className='box-desease'>
                        <input
                          type='radio'
                          name='disease'
                          id='disease-yes'
                          value='yes'
                          onChange={(e) => handleChangeDisease(e, 'haveDisease')}
                        />
                        <label htmlFor='disease-yes'>Yes</label>
                      </div>
                      <div className='box-desease'>
                        <input
                          type='radio'
                          name='disease'
                          id='disease-no'
                          value='no'
                          onChange={(e) => handleChangeDisease(e, 'haveDisease')}
                        />
                        <label htmlFor='disease-no'>No</label>
                      </div>
                    </div>
                    <input
                      disabled={!disease.haveDisease || disease.haveDisease === 'no'}
                      type='text'
                      name='disease'
                      id='disease'
                      value={disease.message}
                      onChange={(e) => handleChangeDisease(e, 'message')}
                    />
                    {error.disease ? <div className='invalid-text'>{error.disease}</div> : null}
                  </div>
                  <div className='gender'>
                    <label htmlFor='gender'>Gender</label>
                    <br />
                    <select
                      className={`${error.gender ? 'input-invalid' : ''}`}
                      name='gender'
                      id='gender'
                      value={gender}
                      onChange={handleChangeGender}
                    >
                      <option value=''>none</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                    {error.gender ? <div className='invalid-text'>{error.gender}</div> : null}
                  </div>
                </div>
                <div className='form-row'>
                  <div className='dateToStart'>
                    <label htmlFor='dateToStart'>Date to Start ?</label>
                    <br />
                    <input
                      type='date'
                      name='dateToStart'
                      id='dateToStart'
                      value={dateToStart}
                      onChange={handleChangDateToStart}
                    />
                    {error.dateToStart ? <div className='invalid-text'>{error.dateToStart}</div> : null}
                  </div>
                </div>
                <div className='form-row'>
                  <div className='additional'>
                    <label htmlFor='additional'>Additional Detail</label>
                    <br />
                    <textarea
                      name='additional'
                      id='additional'
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className='submit'>
                  <input type='submit' value='Order Now' />
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className='contact-us'>
          <div className='container'>
            <div className='horizental-line'></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
    </>
  );
}

export default InformationServiceToRegisterProgramPage;
