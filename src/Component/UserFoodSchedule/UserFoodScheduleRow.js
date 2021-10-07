import React from 'react';

function UserFoodScheduleRow({ time, menuAndQuality, day }) {
  return (
    <tr>
      <td colSpan='1' style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
        {time}
      </td>
      <td colSpan='1'>{menuAndQuality}</td>
    </tr>
  );
}

export default UserFoodScheduleRow;
