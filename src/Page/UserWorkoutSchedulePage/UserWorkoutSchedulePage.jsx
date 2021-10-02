import React from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import './UserWorkoutSchedulePage.css';
import { MOCK_USER, COLOR_OF_THE_TYPE_OF_EXERCISE } from '../../mocks/user_data';
import SwitchRestDay from '../../Component/UserWorkoutSchedule/SwitchResDay/SwitchRestDay.jsx';
import { genWorkoutRow, filterWorkoutAndRestDay } from '../../service/workoutSchedule';
import ColorRow from '../../Component/UserWorkoutSchedule/ColorRow';

function UserWorkoutSchedulePage() {
  const rowColors = COLOR_OF_THE_TYPE_OF_EXERCISE.map((element) => {
    return <ColorRow element={element} key={element.id} />;
  });

  const { workout_schedule } = MOCK_USER.find((item) => item.id === 1);

  const restDay = filterWorkoutAndRestDay(workout_schedule).rest;

  const workoutDay = filterWorkoutAndRestDay(workout_schedule).workout;

  const workoutRow = genWorkoutRow(workout_schedule);

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
                      <th colSpan='3'>Executive posture</th>
                      <th colSpan='3'>Reps x Setss</th>
                      <th colSpan='2'>Break period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rowColors}
                    {workoutRow}
                  </tbody>
                </table>
                <SwitchRestDay restDay={restDay} workoutDay={workoutDay} />
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
