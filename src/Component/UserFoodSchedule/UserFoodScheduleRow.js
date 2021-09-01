import React from 'react';

function UserFoodScheduleRow({ time, menuAndQuality, day }) {
  return (
    <tr>
      <td colSpan='1'>{time}</td>
      <td colSpan='1'>{menuAndQuality}</td>
      <td>
        <form action='#' id={`img-${time}-${day}`}>
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
}

export default UserFoodScheduleRow;
