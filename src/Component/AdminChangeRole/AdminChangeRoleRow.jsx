import React from 'react';

function AdminChangeRoleRow({ user }) {
  return (
    <tr>
      <th colSpan='2' style={{ width: '35%', color: '#000' }}>
        {user.firstName + ' ' + user.lastName}
      </th>
      <th colSpan='2' style={{ width: '35%', color: '#000' }}>
        {user.email}
      </th>
      <th colSpan='2' style={{ color: '#000' }}>
        {user.role}
      </th>
      <th colSpan='1' style={{ color: '#000' }}>
        <button className='btn-edit'>Edit</button>
      </th>
    </tr>
  );
}

export default AdminChangeRoleRow;
