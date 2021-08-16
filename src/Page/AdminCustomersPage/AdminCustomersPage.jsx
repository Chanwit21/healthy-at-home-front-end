import React from 'react';
import NavBarLeftForAdminAndTrainerComponent from '../../Component/NavBarLeftForAdminAndTrainerComponent/NavBarLeftForAdminAndTrainerComponent';
import './AdminCustomersPage.css';
import avatarImg from '../../PIC/Icon/user.png';
import trainerImgAndrewDick from '../../PIC/Trainer/pexels-andrew-dick-733500.jpg';

function AdminCustomersPage() {
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
      name: 'Supachai Kingkeaw',
      contents: [{ 'col-left': 'Phone Number', 'col-right': '089-697-xxx' }],
    },
  ];
  const arrayProfileFilter = arrayProfileContents.filter(
    (item) => item.name === 'Chanwit Pansila'
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

  return (
    <div>
      <div className='admin-customers-page'>
        <section className='customers-list'>
          <div className='container'>
            <div className='row-of-navbar-left-and-customers-list'>
              <div className='navbar-left-admin-customers-page'>
                <NavBarLeftForAdminAndTrainerComponent
                  onPage='AdminCustomersPage'
                  profile={arrayProfileFilter[0]}
                />
              </div>
              <div className='customer-list-table'>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Course</th>
                    <th>Personal Trainer</th>
                  </tr>
                  {arrayOfCustomersList.map((item) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={item.imgPathOfCustomer}
                            alt={`img-${item.name}`}
                            style={{
                              display:
                                item.imgPathOfCustomer === '' ? 'none' : '',
                            }}
                          />
                          {item.name}
                        </td>
                        <td>{item.status}</td>
                        <td>{item.course}</td>
                        <td>
                          <img
                            src={item.imgPathOfPersonalTrainer}
                            alt={`img-${item.personalTrainer}`}
                            style={{
                              objectPosition: item.imgTrainerPosition,
                              display:
                                item.imgPathOfPersonalTrainer === ''
                                  ? 'none'
                                  : '',
                            }}
                          />
                          {item.personalTrainer}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminCustomersPage;
