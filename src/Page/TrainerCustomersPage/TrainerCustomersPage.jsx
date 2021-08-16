import React, { useState } from 'react';
import NavBarLeftForAdminAndTrainerComponent from '../../Component/NavBarLeftForAdminAndTrainerComponent/NavBarLeftForAdminAndTrainerComponent';
import './TrainerCustomersPage.css';
import avatarImg from '../../PIC/Icon/user.png';
import trainerImgAndrewDick from '../../PIC/Trainer/pexels-andrew-dick-733500.jpg';
import trainerThisIsEngineer from '../../PIC/Trainer/pexels-thisisengineering-3912944.jpg';

function TrainerCustomersPage() {
  const arrayProfileContents = [
    {
      name: 'Chanwit Pansila',
      status: 'Admin',
      imgPath: avatarImg,
      imgPosition: '0 0',
      contents: [
        { 'col-left': 'Phone Number', 'col-right': '089-697-xxx' },
        {
          'col-left': 'Gender',
          'col-right': 'Male',
        },
        {
          'col-left': 'Weight',
          'col-right': '63 kg.',
        },
        {
          'col-left': 'Heigth',
          'col-right': '171 cm.',
        },
      ],
    },
    {
      name: 'Thanapob SingHaseanee',
      status: 'Trainer',
      imgPath: trainerThisIsEngineer,
      imgPosition: '0 0',
      contents: [
        { 'col-left': 'Phone Number', 'col-right': '089-697-xxx' },
        {
          'col-left': 'Gender',
          'col-right': 'Male',
        },
        {
          'col-left': 'Weight',
          'col-right': '63 kg.',
        },
        {
          'col-left': 'Heigth',
          'col-right': '171 cm.',
        },
        {
          'col-left': 'Education',
          'col-right':
            'Faculty of Physical Education Srinakharinwirot university.',
        },
      ],
    },
  ];
  const arrayProfileFilter = arrayProfileContents.filter(
    (item) => item.name === 'Thanapob SingHaseanee'
  );
  // console.log(arrayProfileFilter)
  const arrayOfCustomersList = [
    {
      name: 'Wuttichai Chankracang',
      imgPathOfCustomer: avatarImg,
      imgCustomerPosition: '0 0',
      status: 'During The Program',
      course: '45 day program.',
      personalTrainer: 'Thanapob SingHaseanee',
      imgPathOfPersonalTrainer: trainerImgAndrewDick,
      imgTrainerPosition: '0 0',
    },
    {
      name: 'Boontham Saraboon',
      imgPathOfCustomer: avatarImg,
      imgCustomerPosition: '0 0',
      status: 'During The Program',
      course: '3 month program.',
      personalTrainer: 'Suthep Prabkeaw',
      imgPathOfPersonalTrainer: avatarImg,
      imgTrainerPosition: '0 0',
    },
    {
      name: 'Komchan Github',
      imgPathOfCustomer: avatarImg,
      imgCustomerPosition: '0 0',
      status: 'Pending payment',
      course: '45 day program.',
      personalTrainer: 'none',
      imgPathOfPersonalTrainer: '',
      imgTrainerPosition: '0 0',
    },
    {
      name: 'Facetime HaHa',
      imgPathOfCustomer: avatarImg,
      imgCustomerPosition: '0 0',
      status: 'Successful payment Start Date  14/07/2021',
      course: '45 day program.',
      personalTrainer: 'Suthep Prabkeaw',
      imgPathOfPersonalTrainer: avatarImg,
      imgTrainerPosition: '0 0',
    },
  ];
  const arrOfNumberoOfDaysInEachProgram = {
    '45 day program.': 45,
    '3 month program.': 90,
    '9 month program.': 180,
  };
  const arrayColor = [
    {
      color: 'gray',
      colorCode: '#ADADAD',
      fontColor: '#000000',
      content: [
        'The gray pose focuses mainly on size.',
        '12 REPS X 3 SETS',
        'Rest 60 seconds / Set',
      ],
    },
    {
      color: 'white',
      colorCode: '#ffffff',
      fontColor: '#000000',
      content: [
        'White posture emphasizes stamina and size.',
        '20 REPS X 3 SETS',
        'Rest 30 seconds / Set',
      ],
    },
    {
      color: 'pink',
      colorCode: '#FF88A4',
      fontColor: '#FFF',
      content: ['Pink Is Rest Day'],
    },
    {
      color: 'yellow',
      colorCode: '#DCDF52',
      fontColor: '#FFF',
      content: ['Yellow is cardio Day.'],
    },
  ];
  const [customer, setCustomer] = useState('none');
  const [course, setCourse] = useState('');
  const [arrayDay, setArrayDay] = useState([]);
  // const [detailsCustomer, setdetailsCustomer] = useState({});
  const [typeOfSchedule, setTypeOfSchedule] = useState('none');
  const [day, setDay] = useState('');

  function selectCustomer(e) {
    let change = e.target.value;
    const objOfCutomer = arrayOfCustomersList.find(
      (element) => element.name === change
    );
    // console.log(objOfCutomer)
    // setdetailsCustomer(objOfCutomer ? objOfCutomer : {});
    setCourse(objOfCutomer ? objOfCutomer.course : '');
    setTypeOfSchedule('');
    setDay('');
    setCustomer(e.target.value);
    setArrayDay(
      createArrayOfDays(
        arrOfNumberoOfDaysInEachProgram[objOfCutomer ? objOfCutomer.course : '']
          ? arrOfNumberoOfDaysInEachProgram[
              objOfCutomer ? objOfCutomer.course : ''
            ]
          : 0
      )
    );
  }
  // console.log(customer)
  // console.log(course)
  // console.log(arrayDay)

  function createArrayOfDays(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  }

  function selectSchedule(e) {
    const change = e.target.value;
    setTypeOfSchedule(change);
    setDay('');
    // setArrayDay([]);
  }

  function selectDay(e) {
    const change = e.target.value;
    setDay(change);
  }

  function changeColorSelect(e) {
    const id = e.target.id;
    const value = e.target.value;
    console.log(id);
    console.log(value);
    document.getElementById(id).style.backgroundColor = value;
  }

  return (
    <div>
      <div className='trainer-customers-page'>
        <section className='customers-list'>
          <div className='container'>
            <div className='row-of-navbar-left-and-customers-list'>
              <div className='navbar-left-trainer-customers-page'>
                <NavBarLeftForAdminAndTrainerComponent
                  onPage='TrainerCustomersPage'
                  profile={arrayProfileFilter[0]}
                />
              </div>
              <div className='customer-form'>
                <div className='row-of-select-customer'>
                  <select
                    name='customer'
                    id='customer'
                    value={customer}
                    onChange={selectCustomer}
                  >
                    <option value='none'>none</option>
                    {arrayOfCustomersList.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>
                  <select
                    name='type-of-schedule'
                    id='type-of-schedule'
                    onChange={selectSchedule}
                    value={typeOfSchedule}
                  >
                    <option value='none'>none</option>
                    <option value='Food'>Food</option>
                    <option value='Vedio'>Vedio</option>
                  </select>
                  <select
                    name='day-of-schedule'
                    id='day-of-schedule'
                    onChange={selectDay}
                    value={day}
                  >
                    <option value='none'>none</option>
                    {typeOfSchedule !== 'none'
                      ? arrayDay.map((item, index) => {
                          return (
                            <option
                              key={index}
                              value={`Day${item}`}
                            >{`Day${item}`}</option>
                          );
                        })
                      : null}
                  </select>
                </div>
                <div className='set-customer-schedule'>
                  <h1
                    style={{
                      display: course ? '' : 'none',
                    }}
                  >
                    Customer Program : {course}
                  </h1>
                  <form action='#' id='set-food-schedule-form'>
                    <table
                      id='set-food-schedule'
                      style={{
                        display: day && typeOfSchedule === 'Food' ? '' : 'none',
                      }}
                    >
                      <tr>
                        <th colSpan='2'>{day}</th>
                      </tr>
                      <tr>
                        <th>Time & Activity</th>
                        <th>Menu and quantity</th>
                      </tr>
                      <tr>
                        <td>Breakfast</td>
                        <td>
                          <input type='text' name='breakfast' id='breakfast' />
                        </td>
                      </tr>
                      <tr>
                        <td>Brunch</td>
                        <td>
                          <input type='text' name='brunch' id='brunch' />
                        </td>
                      </tr>
                      <tr>
                        <td>Lunch</td>
                        <td>
                          <input type='text' name='lunch' id='lunch' />
                        </td>
                      </tr>
                      <tr>
                        <td>Afternoon meal</td>
                        <td>
                          <input
                            type='text'
                            name='afternoon-meal'
                            id='afternoon-meal'
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan='2'>Work Out</td>
                      </tr>
                      <tr>
                        <td>Dinner</td>
                        <td>
                          <input type='text' name='dinner' id='dinner' />
                        </td>
                      </tr>
                      <tr>
                        <td>Late night</td>
                        <td>
                          <input
                            type='text'
                            name='late-night'
                            id='late-night'
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan='2'>
                          <input type='submit' value='Submit' />
                        </td>
                      </tr>
                    </table>
                  </form>
                  <form id='set-vedio-schedule-form'>
                    <table
                      id='set-vedio-schedule'
                      style={{
                        display:
                          day && typeOfSchedule === 'Vedio' ? '' : 'none',
                      }}
                    >
                      <tr>
                        <th colSpan='4'>{day}</th>
                      </tr>
                      <tr>
                        <th>Order</th>
                        <th>Color</th>
                        <th>Name</th>
                        <th>Link Youtube</th>
                      </tr>
                      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                        return (
                          <tr>
                            <td>{item}</td>
                            <td>
                              <select
                                name={`color-order-${item}`}
                                id={`color-order-${item}`}
                                onChange={changeColorSelect}
                              >
                                <option
                                  value='#FFFFFF'
                                  style={{
                                    backgroundColor: '#FFFFFF',
                                  }}
                                ></option>
                                <option
                                  value='#ADADAD'
                                  style={{
                                    backgroundColor: '#ADADAD',
                                  }}
                                ></option>
                                <option
                                  value='#DCDF52'
                                  style={{
                                    backgroundColor: '#DCDF52',
                                  }}
                                ></option>
                                <option
                                  value='#FF88A4'
                                  style={{
                                    backgroundColor: '#FF88A4',
                                  }}
                                ></option>
                              </select>
                            </td>
                            <td>
                              <input
                                type='text'
                                name={`exercise-order-${item}`}
                                id={`exercise-order-${item}`}
                              />
                            </td>
                            <td>
                              <input
                                type='text'
                                name={`link-order-${item}`}
                                id={`link-order-${item}`}
                              />
                            </td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan='4'>
                          <input type='submit' value='Submit' />
                        </td>
                      </tr>
                    </table>
                  </form>
                  <table
                    id='meaning-of-color'
                    style={{
                      display: day && typeOfSchedule === 'Vedio' ? '' : 'none',
                    }}
                  >
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
                    {arrayColor.map((element) => {
                      let count = 4;
                      return (
                        <tr
                          style={{
                            backgroundColor: element.colorCode,
                            color: element.fontColor,
                          }}
                        >
                          {element.content.map((item) => {
                            if (element.content.length === 1) {
                              return <th colSpan='9'>{item}</th>;
                            }
                            return <th colSpan={count--}>{item}</th>;
                          })}
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TrainerCustomersPage;
