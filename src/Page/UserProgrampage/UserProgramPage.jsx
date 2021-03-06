import React, { useEffect, useState } from 'react';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import FoodContentCardComponent from '../../Component/FoodContentCardComponent/FoodContentCardComponent';
import FoodSchedule from '../../Component/FoodSchedule/FoodSchedule';
import MenuBarComponent from '../../Component/MenuBarComponent/MenuBarComponent';
import NormalMeal from '../../Component/NormalMealConponent/NormalMeal';
import PostWorkout from '../../Component/PostWorkoutComponent/PostWorkout';
import PreWorkout from '../../Component/PreworkOutComponent/PreWorkout';
import Snack from '../../Component/SnackComponent/Snack';
import WorkoutSchedule from '../../Component/WorkoutSchedule/WorkoutSchedule';
import './UserProgramPage.css';
import axios from '../../config/axios';

function UserProgramPage() {
  const [onPage, setOnPage] = useState('UserWorkoutSchedulePage');
  const [relation, setRelation] = useState({});

  useEffect(() => {
    const fetchInprogressProgram = async () => {
      try {
        const res = await axios.get('/inprogress_program/current_program');
        setRelation(res.data.relation);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchInprogressProgram();
  }, []);

  return (
    <div className='user-program-page'>
      <section className='user-program-page-content'>
        <div className='container'>
          <div className='menu-bar-left-in-user-program'>
            <div className='menu-bar'>
              <MenuBarComponent Page={onPage} setOnPage={setOnPage} />
            </div>
            <div className='content'>
              {onPage === 'UserWorkoutSchedulePage' ? <WorkoutSchedule relation={relation} /> : null}
              {onPage === 'UserFoodSchedulePage' ? (
                <FoodContentCardComponent
                  headerTitle={'WHAT IS NORMAL PRE PERI POST SNACK ?'}
                  contentArray={[
                    'PRE is a pre-workout meal.',
                    'POST is a post-workout meal.',
                    'SNACK is a snack during the day.',
                    'NORMAL is any meal during the day. such as morning, noon, evening.',
                  ]}
                />
              ) : null}
              {onPage === 'UserFoodSchedulePagePreWorkout' ? <PreWorkout /> : null}
              {onPage === 'UserFoodSchedulePagePostWorkout' ? <PostWorkout /> : null}
              {onPage === 'UserFoodSchedulePageSnack' ? <Snack /> : null}
              {onPage === 'UserFoodSchedulePageNormalMeal' ? <NormalMeal /> : null}
              {onPage === 'UserFoodSchedulePageFoodSchedule' ? <FoodSchedule relation={relation} /> : null}
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
  );
}

export default UserProgramPage;
