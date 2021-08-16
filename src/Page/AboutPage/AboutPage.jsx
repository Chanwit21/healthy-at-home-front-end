import React from 'react';
import './AboutPage.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';

function AboutPage() {
  return (
    <div>
      <div className='about-page'>
        <div className='allsection'>
          <div className='allsectionbox'>
            <section className='main-text'>
              <div className='container'>
                <h1>About Healthy At Home</h1>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Heathy
                  At Home is a program that will help you shape up at home. We
                  have a team of trainers with practical experience in
                  bodybuilding to design and track your program to fit your
                  lifestyle.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You
                  can consult and adjust your exercise schedule if you're in a
                  rush, with a trainer on track for the duration of the program.
                </p>
              </div>
            </section>
            <section className='contact-us'>
              <div className='container'>
                <ContactUsComponent />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
