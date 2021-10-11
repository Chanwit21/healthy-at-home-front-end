import React from 'react';
import './MenuBarComponent.css';

function MenuBarComponent(props) {
  const { setOnPage, Page } = props;

  const colorOnPage = 'rgba(97, 209, 150, 0.25)';
  const fontWeightOnPage = '600';
  const fontWeightUnOnPage = '400';
  const borderOnPage = '1px solid #0003';

  return (
    <div className='menu-bar-component'>
      <div className='content-box'>
        <button
          onClick={(e) => setOnPage('UserWorkoutSchedulePage')}
          className={Page === 'UserWorkoutSchedulePage' ? 'onPage' : ''}
          style={{
            fontWeight: Page === 'UserWorkoutSchedulePage' ? '900' : '600',
          }}
        >
          Workout
        </button>
        <button
          onClick={(e) => setOnPage('UserFoodSchedulePage')}
          className={Page.includes('UserFoodSchedulePage') ? 'onPage' : ''}
          style={{
            fontWeight: Page.includes('UserFoodSchedulePage') ? '900' : '600',
            borderRadius: !Page.includes('UserFoodSchedulePage') ? '0 0 0.52083vw 0.52083vw' : '',
          }}
        >
          Food
        </button>
        <div
          className={`food-menu-bar`}
          style={{
            display: Page.includes('UserFoodSchedulePage') ? '' : 'none',
          }}
        >
          <button
            onClick={(e) => setOnPage('UserFoodSchedulePagePreWorkout')}
            style={{
              backgroundColor: Page === 'UserFoodSchedulePagePreWorkout' ? colorOnPage : '',
              fontWeight: Page === 'UserFoodSchedulePagePreWorkout' ? fontWeightOnPage : fontWeightUnOnPage,
              border: Page === 'UserFoodSchedulePagePreWorkout' ? borderOnPage : '',
            }}
          >
            Pre Workout
          </button>

          <button
            onClick={(e) => setOnPage('UserFoodSchedulePagePostWorkout')}
            style={{
              backgroundColor: Page === 'UserFoodSchedulePagePostWorkout' ? colorOnPage : '',
              fontWeight: Page === 'UserFoodSchedulePagePostWorkout' ? fontWeightOnPage : fontWeightUnOnPage,
              border: Page === 'UserFoodSchedulePagePostWorkout' ? borderOnPage : '',
            }}
          >
            Post Workout
          </button>

          <button
            onClick={(e) => setOnPage('UserFoodSchedulePageSnack')}
            style={{
              backgroundColor: Page === 'UserFoodSchedulePageSnack' ? colorOnPage : '',
              fontWeight: Page === 'UserFoodSchedulePageSnack' ? fontWeightOnPage : fontWeightUnOnPage,
              border: Page === 'UserFoodSchedulePageSnack' ? borderOnPage : '',
            }}
          >
            Snacks
          </button>

          <button
            onClick={(e) => setOnPage('UserFoodSchedulePageNormalMeal')}
            style={{
              backgroundColor: Page === 'UserFoodSchedulePageNormalMeal' ? colorOnPage : '',
              fontWeight: Page === 'UserFoodSchedulePageNormalMeal' ? fontWeightOnPage : fontWeightUnOnPage,
              border: Page === 'UserFoodSchedulePageNormalMeal' ? borderOnPage : '',
            }}
          >
            Normal Meal
          </button>

          <button
            onClick={(e) => setOnPage('UserFoodSchedulePageFoodSchedule')}
            style={{
              backgroundColor: Page === 'UserFoodSchedulePageFoodSchedule' ? colorOnPage : '',
              fontWeight: Page === 'UserFoodSchedulePageFoodSchedule' ? fontWeightOnPage : fontWeightUnOnPage,
              border: Page === 'UserFoodSchedulePageFoodSchedule' ? borderOnPage : '',
            }}
          >
            Food schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuBarComponent;
