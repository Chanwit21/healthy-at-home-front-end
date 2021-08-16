import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import './InformationServiceToRegisterProgramPage.css';

function InformationServiceToRegisterProgramPage() {
  return (
    <div>
      <div className='informationServiceToRegisterProgramPage'>
        <section className='service-card-section'>
          <div className='container'>
            <div className='service-card'>
              <div className='img'></div>
              <div className='text-in-card'>
                <p>45 Days Program</p>
              </div>
            </div>
          </div>
        </section>
        <section className='form-information-section'>
          <div className='container'>
            <div className='form-information'>
              <form action='#'>
                <div className='form-row'>
                  <div className='first-name'>
                    <label htmlFor='firstname'>Firstname</label>
                    <br />
                    <input type='text' name='firstname' id='firstname' />
                  </div>
                  <div className='last-name'>
                    <label htmlFor='lastname'>Lastname</label>
                    <br />
                    <input type='text' name='lastname' id='lastname' />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='weight'>
                    <label htmlFor='weight'>Width(kg.)</label>
                    <br />
                    <input type='text' name='weight' id='weight' />
                  </div>
                  <div className='height'>
                    <label htmlFor='height'>Heigth(cm.)</label>
                    <br />
                    <input type='text' name='height' id='height' />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='telephone'>
                    <label htmlFor='telephone'>Telephone Numbers</label>
                    <br />
                    <input type='tel' name='telephone' id='telephone' />
                  </div>
                  <div className='food-allergic'>
                    <label htmlFor='food-allergic'>
                      Food you are allergic?
                    </label>
                    <br />
                    <input
                      type='text'
                      name='food-allergic'
                      id='food-allergic'
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='type-of-food'>
                    <label htmlFor='type-of-food'>Type of food</label>
                    <br />
                    <select name='type-of-food' id='type-of-food'>
                      <option value='none'>none</option>
                      <option value='vegan'>Vegan</option>
                      <option value='halal'>Halal</option>
                      <option value='plant-base'>Plant Base</option>
                      <option value='meat-and-poultry'>
                        Meat and poultry.
                      </option>
                      <option value='fish-and-seafood'>
                        Fish and seafood.
                      </option>
                    </select>
                  </div>
                  <div className='type-lose-weight-before'>
                    <label htmlFor='type-lose-weight-before'>
                      How did you lose weight before?
                    </label>
                    <br />
                    <select name='type-of-food' id='type-of-food'>
                      <option value='none'>none</option>
                      <option value='intermediate-fasting'>
                        Intermediate Fasting
                      </option>
                      <option value='keto-diet'>Keto Diet</option>
                      <option value='mediterranean-diet'>
                        The Mediterranean diet{' '}
                      </option>
                      <option value='atkins-diet'>Atkins Diet</option>
                      <option value='Paleo'>Paleo</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='disease'>
                    <label htmlFor='disease'>
                      Do you have any underlying disease?
                    </label>
                    <br />
                    <div className='row-radio-check'>
                      <div className='box-desease'>
                        <input
                          type='radio'
                          name='disease'
                          id='disease-yes'
                          value='yes'
                        />
                        <label htmlFor='disease-yes'>Yes</label>
                      </div>
                      <div className='box-desease'>
                        <input
                          type='radio'
                          name='disease'
                          id='disease-no'
                          value='no'
                        />
                        <label htmlFor='disease-no'>No</label>
                      </div>
                    </div>
                    <input type='text' name='disease' id='disease' />
                  </div>
                  <div className='gender'>
                    <label htmlFor='gender'>Gender</label>
                    <br />
                    <select name='gender' id='gender'>
                      <option value='none'>none</option>
                      <option value='male'>male</option>
                      <option value='female'>female</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='additional'>
                    <label htmlFor='additional'>Additional Detail</label>
                    <br />
                    <textarea name='additional' id='additional'></textarea>
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
    </div>
  );
}

export default InformationServiceToRegisterProgramPage;
