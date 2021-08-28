import React from 'react';
import './MenuBarComponent.css';
import { Link } from 'react-router-dom';

function MenuBarComponent(props) {
  return (
    <div className='menu-bar-component'>
      <div className='content-box'>
        <Link
          to='/user-workout-schedule-page'
          className={props.Page === 'UserWorkoutSchedulePage' ? 'onPage' : ''}
          style={{ borderRadius: '0.520833vw 0.520833vw 0 0' }}
        >
          <h1
            style={{
              borderRadius: '0.52083vw 0.52083vw 0 0',
              color: props.Page === 'UserWorkoutSchedulePage' ? '#000000FF' : '',
            }}
          >
            Workout
          </h1>
        </Link>
        <Link
          to='/user-food-schedule-page'
          className={props.Page === 'UserFoodSchedulePage' ? 'onPage' : ''}
          style={{
            color: props.Page === 'UserFoodSchedulePage' ? '#000000FF' : '',
          }}
        >
          <h1>Food</h1>
        </Link>
        <div
          className='food-menu-bar'
          style={{
            display: props.Page === 'UserFoodSchedulePage' ? '' : 'none',
          }}
        >
          <Link
            to='/user-food-schedule-page-pre-workout'
            style={{
              background: props.FoodMenu === 'UserFoodSchedulePagePreWorkout' ? 'rgba(97, 209, 150, 0.25)' : '',
            }}
          >
            <h1
              style={{
                color: props.FoodMenu === 'UserFoodSchedulePagePreWorkout' ? '#000000FF' : '',
              }}
            >
              Pre Workout
            </h1>
          </Link>
          <Link
            to='/user-food-schedule-page-post-workout'
            style={{
              background: props.FoodMenu === 'UserFoodSchedulePagePostWorkout' ? 'rgba(97, 209, 150, 0.25)' : '',
            }}
          >
            <h1
              style={{
                color: props.FoodMenu === 'UserFoodSchedulePagePostWorkout' ? '#000000FF' : '',
              }}
            >
              Post Workout
            </h1>
          </Link>
          <Link
            to='#'
            style={{
              background: props.FoodMenu === 'UserFoodSchedulePageSnack' ? 'rgba(97, 209, 150, 0.25)' : '',
            }}
          >
            <h1
              style={{
                color: props.FoodMenu === 'UserFoodSchedulePageSnack' ? '#000000FF' : '',
              }}
            >
              Snack
            </h1>
          </Link>
          <Link
            to='#'
            style={{
              background: props.FoodMenu === 'UserFoodSchedulePageNormalMeal' ? 'rgba(97, 209, 150, 0.25)' : '',
            }}
          >
            <h1
              style={{
                color: props.FoodMenu === 'UserFoodSchedulePageNormalMeal' ? '#000000FF' : '',
              }}
            >
              Normal Meal
            </h1>
          </Link>
          <Link
            to='/user-food-schedule-page-food-schedule'
            style={{
              background: props.FoodMenu === 'UserFoodSchedulePageFoodSchedule' ? 'rgba(97, 209, 150, 0.25)' : '',
            }}
          >
            <h1
              style={{
                color: props.FoodMenu === 'UserFoodSchedulePageFoodSchedule' ? '#000000FF' : '',
              }}
            >
              Food schedule
            </h1>
          </Link>
        </div>
        <Link
          to='/user-weekly-update-page'
          className={props.Page === 'UserWeeklyUpdatePage' ? 'onPage' : ''}
          style={{ borderRadius: ' 0 0 0.520833vw 0.520833vw' }}
        >
          <h1
            style={{
              borderRadius: '0 0 0.52083vw 0.52083vw',
              color: props.Page === 'UserWeeklyUpdatePage' ? '#000000FF' : '',
            }}
          >
            Weekly Update
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default MenuBarComponent;
