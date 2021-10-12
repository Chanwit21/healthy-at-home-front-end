const genWorkoutCols = (count, exercises) => {
  switch (count) {
    case 1: {
      return exercises.map((exercise) => {
        if (exercise.haveExercise) {
          return (
            <td
              colSpan='7'
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
        }
        return null;
      });
    }
    case 2: {
      let num = 7;
      const cols = exercises.map((exercise) => {
        if (exercise.haveExercise) {
          const col = (
            <td
              colSpan={num > 4 ? 4 : 3}
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
          num = num - 4;
          return col;
        }
        return null;
      });
      return cols;
    }
    case 3: {
      let num = 7;
      const cols = exercises.map((exercise) => {
        if (exercise.haveExercise) {
          const col = (
            <td
              colSpan={num > 4 ? 3 : 2}
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
          num = num - 3;
          return col;
        }
        return null;
      });
      return cols;
    }
    case 4: {
      let num = 7;
      const cols = exercises.map((exercise) => {
        if (exercise.haveExercise) {
          const col = (
            <td
              colSpan={num > 2 ? 2 : 1}
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
          num = num - 2;
          return col;
        }
        return null;
      });
      return cols;
    }
    case 5: {
      let num = 7;
      const cols = exercises.map((exercise) => {
        if (exercise.haveExercise) {
          const col = (
            <td
              colSpan={num > 3 ? 2 : 1}
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
          num = num - 2;
          return col;
        }
        return null;
      });
      return cols;
    }
    case 6: {
      let num = 7;
      const cols = exercises.map((exercise) => {
        if (exercise.haveExercise) {
          const col = (
            <td
              colSpan={num > 6 ? 2 : 1}
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
          num = num - 2;
          return col;
        }
        return null;
      });
      return cols;
    }
    case 7: {
      return exercises.map((exercise) => {
        if (exercise.haveExercise) {
          return (
            <td
              colSpan='1'
              key={exercise.exerciseId}
              style={{
                color: exercise.fontColor,
                backgroundColor: exercise.backgroundColor,
                textDecoration: 'none',
              }}
            >
              <a
                style={{
                  color: exercise.fontColor,
                  textDecoration: 'none',
                }}
                href={exercise.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {exercise.name}
              </a>
            </td>
          );
        }
        return null;
      });
    }
    default: {
      return [];
    }
  }
};

export { genWorkoutCols };
