import React from 'react';
import { Link } from 'react-router-dom';
import './UserFoodSchedulePageFoodSchedule.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import UserConsultTrainerComponent from '../../Component/UserConsultTrainerComponent/UserConsultTrainerComponent';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import trainerThisIsEngineering from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';

function UserFoodSchedulePageFoodSchedule() {
  const arrayOfFoodSchedle = [
    {
      day: 'Day1',
      content: [
        {
          time: 'Breakfast',
          menuAndQuality: 'Choose 1 protein menu + 1 carbohydrate menu.',
        },
        {
          time: 'Brunch',
          menuAndQuality: 'Choose one good fat SNACK.',
        },
        {
          time: 'Lunch',
          menuAndQuality: 'Choose 1 protein menu + 1 carbohydrate menu.',
        },
        {
          time: 'Afternoon meal',
          menuAndQuality: 'Choose SNACK 1 fruit.',
        },
        {
          time: 'Work Out',
        },
        {
          time: 'Dinner',
          menuAndQuality:
            'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
        },
        {
          time: 'Late night',
          menuAndQuality: 'Choose 1 protein menu.',
        },
      ],
    },
    {
      day: 'Day2',
      content: [
        {
          time: 'Breakfast',
          menuAndQuality: 'Choose 1 protein menu + 1 carbohydrate menu.',
        },
        {
          time: 'Brunch',
          menuAndQuality: 'Choose one good fat SNACK.',
        },
        {
          time: 'Lunch',
          menuAndQuality: 'Choose 1 protein menu + 1 carbohydrate menu.',
        },
        {
          time: 'Afternoon meal',
          menuAndQuality: 'Choose SNACK 1 fruit.',
        },
        {
          time: 'Work Out',
        },
        {
          time: 'Dinner',
          menuAndQuality:
            'Choose 2 protein menu + 1 carbohydrate menu + lots of vegetables.',
        },
        {
          time: 'Late night',
          menuAndQuality: 'Choose 1 protein menu.',
        },
      ],
    },
  ];
  const arrayOfDay = ['none', ...arrayOfFoodSchedle.map((item) => item.day)];
  const onDay = 'Day1';

  return (
    <div>
      <div className='user-food-schedule-page-food-schedule'>
        <section className='food-menu-menu-bar-left-in-User-course-page'>
          <div className='container'>
            <div className='row-of-food-schedule'>
              <div className='menubar'>
                <MenuBarComponent
                  Page='UserFoodSchedulePage'
                  FoodMenu='UserFoodSchedulePageFoodSchedule'
                />
              </div>
              <div className='food-schedule-contnt'>
                <h1>Food schedule</h1>
                <form action='#'>
                  <select name='filterDay' id='day'>
                    {arrayOfDay.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </form>
                {arrayOfFoodSchedle.map((item, index) => {
                  if (item.day === onDay) {
                    return (
                      <table id='food-schedule-table' key={index}>
                        <tr>
                          <th
                            colSpan='3'
                            style={{
                              backgroundColor: '#61D196',
                              color: '#FFF',
                            }}
                          >
                            {item.day}
                          </th>
                        </tr>
                        <tr>
                          <th
                            colSpan='1'
                            style={{
                              backgroundColor: '#61D196',
                              color: '#FFF',
                            }}
                          >
                            {'Time'}
                          </th>
                          <th
                            colSpan='1'
                            style={{
                              backgroundColor: '#61D196',
                              color: '#FFF',
                            }}
                          >
                            {'Menu and quantity'}
                          </th>
                          <th
                            colSpan='1'
                            style={{
                              backgroundColor: '#61D196',
                              color: '#FFF',
                            }}
                          >
                            {'Upload Picture'}
                          </th>
                        </tr>
                        {item.content.map((itemInside) => {
                          if (itemInside.time === 'Work Out') {
                            return (
                              <tr>
                                <td colSpan='3'>{itemInside.time}</td>
                              </tr>
                            );
                          }
                          return (
                            <tr>
                              <td colSpan='1'>{itemInside.time}</td>
                              <td colSpan='1'>{itemInside.menuAndQuality}</td>
                              <td>
                                <form
                                  action='#'
                                  id={`img-${itemInside.time}-${item.day}`}
                                >
                                  <div className='drag-and-drop'>
                                    <h1>Drag and Drop </h1>
                                    <h1>or</h1>
                                    <h1>
                                      <span>Browse</span>
                                    </h1>
                                  </div>
                                  <input type='submit' value='Send' />
                                </form>
                              </td>
                            </tr>
                          );
                        })}
                      </table>
                    );
                  }
                  return null;
                })}
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
