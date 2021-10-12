import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminChangeRole from '../../Component/AdminChangeRole/AdminChangeRole';
import AdminContactUs from '../../Component/AdminContactUs/AdminContactUs';
import AdminWatchTransaction from '../../Component/AdminWatchTransaction/AdminWatchTransaction';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import ManageExerciseColor from '../../Component/ManageExerciseColor/ManageExerciseColor';
import ManageExerciseVedio from '../../Component/ManageExerciseVedio/ManageExerciseVedio';
import ManageFoodMenu from '../../Component/ManageFoodMenu/ManageFoodMenu';
import ManagePicPromo from '../../Component/ManagePicPromo/ManagePicPromo';
import ManagePicResult from '../../Component/ManagePicResult/ManagePicResult';
import ManageProduct from '../../Component/ManageProduct/ManageProduct';
import ManageTrainer from '../../Component/ManageTrainer/ManageTrainer';
import NavBarLeftForUserComponent from '../../Component/NavBarLeftForUserComponent/NavBarLeftForUserComponent';
import Profile from '../../Component/ProfileComponent/Profile';
import TrainerCustomer from '../../Component/TrainerCustomer/TrainerCustomer';
import UpdateProfileForm from '../../Component/UpdateProfileForm/UpdateProfileForm';
import UserInprogressProgramCardComponent from '../../Component/UserInprogressProgramCardComponent/UserInprogressProgramCardComponent';
import axios from '../../config/axios';
import './UserProfilePage.css';

function UserProfilePage() {
  const [profile, setProfile] = useState({
    education: null,
    email: null,
    firstName: null,
    gender: null,
    height: null,
    id: null,
    image: null,
    lastName: null,
    nickName: null,
    phoneNumber: null,
    role: null,
    weight: null,
  });
  const [onPage, setOnPage] = useState('UserProfilePage');

  useEffect(() => {
    const fetchUserAndInprogressProgram = async () => {
      const res = await axios.get('/users/user_info');
      // console.log(res.data.user);
      const objProfile = { ...res.data.user };
      if (res.data.user.role === 'CUSTOMER') {
        const res2 = await axios.get('/inprogress_program/current_program');
        Object.assign(objProfile, res2.data.relation);
      }

      setProfile({ ...objProfile });
    };
    fetchUserAndInprogressProgram();
  }, []);

  return (
    <div>
      <div className='user-profile-page'>
        <section className='content-in-user-profile-page'>
          <div className='container'>
            <div className='user-profile'>
              <div className='nav-left-user'>
                <NavBarLeftForUserComponent
                  profileImage={profile.image}
                  Name={`${profile.firstName} ${profile.lastName}`}
                  Page={onPage}
                  role={profile.role}
                  setOnPage={setOnPage}
                  haveCourseService={!!profile.CourseService}
                />
              </div>
              {onPage === 'UserProfilePage' ? <Profile profile={profile} /> : null}
              {onPage === 'UserInprogressProgramPage' && profile.CourseService ? (
                <div>
                  <Link
                    to='/user-program-page'
                    style={{
                      textDecoration: 'none',
                      color: '#000',
                    }}
                  >
                    <UserInprogressProgramCardComponent
                      ProgramName={profile.CourseService.name}
                      ContentInProgram={profile.CourseService.title}
                      Image={profile.CourseService.imageLink1}
                    />
                  </Link>
                </div>
              ) : null}
              {onPage === 'EditProfilePage' ? (
                <UpdateProfileForm
                  firstName={profile.firstName}
                  lastName={profile.lastName}
                  weight={profile.weight}
                  height={profile.height}
                  nickName={profile.nickName}
                  phoneNumber={profile.phoneNumber}
                  gender={profile.gender}
                  education={profile.education}
                  profileImage={profile.image}
                />
              ) : null}
              {onPage === 'TrainerCustomerPage' ? <TrainerCustomer trainerId={profile.id} /> : null}
              {onPage === 'ManageFoodMenuPage' ? <ManageFoodMenu /> : null}
              {onPage === 'ManageExerciseColorPage' ? <ManageExerciseColor /> : null}
              {onPage === 'ManageExerciseVedioPage' ? <ManageExerciseVedio /> : null}
              {onPage === 'TransactionsPage' ? <AdminWatchTransaction /> : null}
              {onPage === 'ContactUsPage' ? <AdminContactUs /> : null}
              {onPage === 'ChangeRolePage' ? <AdminChangeRole /> : null}
              {onPage === 'ManageResultPage' ? <ManagePicResult /> : null}
              {onPage === 'ManagePromotionPage' ? <ManagePicPromo /> : null}
              {onPage === 'ManageTrainerPage' ? <ManageTrainer /> : null}
              {onPage === 'ManageProductPage' ? <ManageProduct /> : null}
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

export default UserProfilePage;
