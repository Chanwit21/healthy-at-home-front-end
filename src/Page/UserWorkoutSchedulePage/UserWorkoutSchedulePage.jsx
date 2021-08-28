import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import UserConsultTrainerComponent from '../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent';
import { Link } from 'react-router-dom';
import './UserWorkoutSchedulePage.css';
import trainerThisIsEngineering from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';
import { MOCK_USER, COLOR_OF_THE_TYPE_OF_EXERCISE } from '../../mocks/user_data';
import SwitchRestDay from '../../Component/SwitchResDay/SwitchRestDay.jsx';

function UserWorkoutSchedulePage() {
  const rowColors = COLOR_OF_THE_TYPE_OF_EXERCISE.map((element) => {
    return (
      <tr
        key={element.id}
        style={{
          backgroundColor: element.bgColor,
          color: element.fontColor,
        }}
      >
        <th colSpan={4}>{element.executive_posture}</th>
        <th colSpan={3}>{element.reps_sets}</th>
        <th colSpan={2}>{element.break_period}</th>
      </tr>
    );
  });

  const { workout_schedule } = MOCK_USER.find((item) => item.id === 1);
  const restDay = workout_schedule.filter((item) => {
    const { name } = item;
    if (name.col1 === 'Rest') return true;
    return false;
  });

  const workoutDay = workout_schedule.filter((item) => {
    const { name } = item;
    if (name.col1 !== 'Rest') return true;
    return false;
  });

  const workoutRows1 = workout_schedule.map((item, index) => {
    const { day, name, link, backgroundColor, fontColor } = item;
    if (name.col2 === null) {
      if (name.col1 === 'Rest') {
        return (
          <tr className='contentExercise' key={index}>
            <td
              style={{
                backgroundColor: '#2B90C5',
                color: '#FFF',
              }}
            >
              {day}
            </td>
            <td
              colSpan='8'
              style={{
                backgroundColor: backgroundColor.col1,
              }}
            >
              <span
                style={{
                  color: fontColor.col1,
                  fontSize: '2.5vw',
                }}
              >
                {name.col1}
              </span>
            </td>
          </tr>
        );
      }
      return (
        <tr className='contentExercise' key={index}>
          <td
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
            }}
          >
            {day}
          </td>
          <td
            colSpan='7'
            style={{
              backgroundColor: backgroundColor.col1,
            }}
          >
            <a
              target='_blank'
              rel='noreferrer'
              href={link.col1}
              style={{
                color: fontColor.col1,
                fontSize: '2.5vw',
              }}
            >
              {name.col1}
            </a>
          </td>
          <td colSpan='1' style={{ backgroundColor: '#FFFFFF' }} className='checkBox'>
            <input type='checkbox' name={`execise ${day}`} id={`execise ${day}`} />
            <label htmlFor={`execise ${day}`}>Success</label>
          </td>
        </tr>
      );
    } else {
      const row = [];
      for (let key in name) {
        if (key !== 'id') {
          row.push(
            <td
              key={key}
              style={{
                backgroundColor: backgroundColor[key],
              }}
            >
              <a target='_blank' rel='noreferrer' href={link[key]} style={{ color: fontColor[key] }}>
                {name[key]}
              </a>
            </td>
          );
        }
      }
      return (
        <tr className='contentExercise' key={index}>
          <td style={{ backgroundColor: '#2B90C5', color: '#FFF' }}>{day}</td>
          {row}
          <td colSpan='1' style={{ backgroundColor: '#FFFFFF' }} className='checkBox'>
            <input type='checkbox' name={`execise ${day}`} id={`execise ${day}`} />
            <label htmlFor={`execise ${day}`}>Success</label>
          </td>
        </tr>
      );
    }
  });

  return (
    <div>
      <div className='user-workout-schedule-page'>
        <section className='workout-schedule-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='menu-bar-left-in-User-course'>
              <div className='menu-bar'>
                <MenuBarComponent Page='UserWorkoutSchedulePage' />
              </div>
              <div className='workout-schedule'>
                <h1 id='head-of-workout-schedule'>Workout schedule</h1>
                <table id='workout-schedule-table'>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: '#2B90C5',
                        color: '#FFF',
                        height: '3.125vw',
                      }}
                    >
                      <th colSpan='4'>Executive posture</th>
                      <th colSpan='3'>Reps x Setss</th>
                      <th colSpan='2'>Break period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rowColors}

                    {workoutRows1}
                  </tbody>
                </table>
                <SwitchRestDay restDay={restDay} workoutDay={workoutDay} />
                <div className='consult-trainner'>
                  <Link to='/chat-page'>
                    <UserConsultTrainerComponent
                      pathOfImg={trainerThisIsEngineering}
                      nickName='Trainer Job'
                      Fullname='Thanapob SingHaseanee'
                    />
                  </Link>
                </div>
              </div>
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

export default UserWorkoutSchedulePage;
