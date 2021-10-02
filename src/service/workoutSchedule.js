import CardioDayRow from '../Component/UserWorkoutSchedule/CardioDayRow';
import RestDayRow from '../Component/UserWorkoutSchedule/RestDayRow';
import { firstUpperCase } from './formatting';

const genWorkoutRow = (workout_schedule) => {
  const clone = { ...workout_schedule };
  const result = [];
  const keys = [];
  for (let key in clone) {
    keys.push(key);
  }
  const keysSort = keys.sort((a, b) => {
    return a.split('day')[1] - b.split('day')[1];
  });

  for (let key of keysSort) {
    const { name, link, backgroundColor, fontColor } = clone[key];
    if (name.col2 === null) {
      if (name.col1 === 'Rest') {
        result.push(
          <RestDayRow
            key={`id-${key}`}
            name={name.col1}
            day={firstUpperCase(key)}
            backgroundColor={backgroundColor.col1}
            fontColor={fontColor.col1}
          />
        );
      } else {
        result.push(
          <CardioDayRow
            key={`id-${key}`}
            day={firstUpperCase(key)}
            backgroundColor={backgroundColor.col1}
            fontColor={fontColor.col1}
            link={link.col1}
            name={name.col1}
          />
        );
      }
    } else {
      const row = [];
      for (let key1 in name) {
        if (key1 !== 'id') {
          row.push(
            <td
              key={key1}
              style={{
                backgroundColor: backgroundColor[key1],
              }}
            >
              <a target='_blank' rel='noreferrer' href={link[key1]} style={{ color: fontColor[key1] }}>
                {name[key1]}
              </a>
            </td>
          );
        }
      }
      result.push(
        <tr className='contentExercise' key={`id-${key}`}>
          <td style={{ backgroundColor: '#2B90C5', color: '#FFF' }}>{firstUpperCase(key)}</td>
          {row}
        </tr>
      );
    }
  }

  return result;
};

const filterWorkoutAndRestDay = (workout_schedule) => {
  const result = { rest: [], workout: [] };
  for (let key in workout_schedule) {
    const { name } = workout_schedule[key];
    if (name.col1 === 'Rest') {
      result.rest.push(firstUpperCase(key));
    } else {
      result.workout.push(firstUpperCase(key));
    }
  }
  return result;
};

export { filterWorkoutAndRestDay, genWorkoutRow };
