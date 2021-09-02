import React from 'react';
import { Link } from 'react-router-dom';
import './UserFoodSchedulePageFoodSchedule.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import UserConsultTrainerComponent from '../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import trainerThisIsEngineering from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';
import UserFoodScheduleRow from '../../Component/UserFoodSchedule/UserFoodScheduleRow';
import FoodScheduleHead from '../../Component/UserFoodSchedule/FoodScheduleHead';

function UserFoodSchedulePageFoodSchedule() {
  const arrayOfFoodSchedle = [
    {
      day: 'Day1',
      breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
      brunch: 'Choose one good fat SNACK.',
      lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
      afternoon: 'Choose SNACK 1 fruit.',
      workout: 'Work Out',
      dinner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
      lastnight: 'Choose 1 protein menu.',
    },
    {
      day: 'Day2',
      breakfast: 'Choose 1 protein menu + 1 carbohydrate menu.',
      brunch: 'Choose one good fat SNACK.',
      lunch: 'Choose 1 protein menu + 1 carbohydrate menu.',
      afternoon: 'Choose SNACK 1 fruit.',
      workout: 'Work Out',
      dinner: 'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
      lastnight: 'Choose 1 protein menu.',
    },
  ];

  const arrayOfDay = ['none', ...arrayOfFoodSchedle.map((item) => item.day)];
  const onDay = 'Day1';
  const filterByDay = arrayOfFoodSchedle.find((item) => item.day === onDay);
  // console.log(filterByDay);

  function firstUpperCase(value) {
    return value[0].toUpperCase() + value.slice(1);
  }

  function genTableBody(array, day) {
    const tableBody = [];
    for (let key in array) {
      // console.log(key);
      if (key !== 'day') {
        if (key !== 'workout') {
          tableBody.push(
            <UserFoodScheduleRow key={`id-${key}`} time={firstUpperCase(key)} menuAndQuality={array[key]} day={day} />
          );
        } else {
          tableBody.push(
            <tr key={`id-${key}`}>
              <td colSpan='3'>{array[key]}</td>
            </tr>
          );
        }
      }
    }
    return tableBody;
  }

  const tableBody = genTableBody(filterByDay, onDay);

  return (
    <div>
      <div className='user-food-schedule-page-food-schedule'>
        <section className='food-menu-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='row-of-food-schedule'>
              <div className='menubar'>
                <MenuBarComponent Page='UserFoodSchedulePage' FoodMenu='UserFoodSchedulePageFoodSchedule' />
              </div>
              <div className='food-schedule-contnt'>
                <h1>Food schedule</h1>
                <form action='#'>
                  <select name='filterDay' id='day'>
                    {arrayOfDay.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </form>
                <table id='food-schedule-table'>
                  <thead>
                    <FoodScheduleHead day={onDay} />
                  </thead>
                  <tbody>{tableBody}</tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className='consult-trainer'>
          <div className='container'>
            <div className='consult-trainer-row'>
              <div className='consult-trainer'>
                <Link to='/chatpage'>
                  <UserConsultTrainerComponent
                    pathOfImg={trainerThisIsEngineering}
                    nickName='Trainer Job'
                    Fullname='Thanapob SingHaseanee'
                  />
                </Link>
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

export default UserFoodSchedulePageFoodSchedule;
