import React, { useState } from 'react';

function AdminChangeRoleRow({ user, updateRole }) {
  const [isEdit, setIsEdit] = useState(false);
  const [roleEdit, setRoleEdit] = useState(user.role);

  const handleClickEdit = (e) => {
    setIsEdit(true);
  };

  const handleClickSave = (e) => {
    setIsEdit(false);
    updateRole(roleEdit, user.id);
  };

  return (
    <tr>
      <th colSpan='2' style={{ width: '35%', color: '#000' }}>
        {user.firstName + ' ' + user.lastName}
      </th>
      <th colSpan='2' style={{ width: '35%', color: '#000' }}>
        {user.email}
      </th>
      {isEdit ? (
        <>
          <th colSpan='2' style={{ color: '#000' }}>
            <select value={roleEdit} onChange={(e) => setRoleEdit(e.target.value)}>
              <option value='CUSTOMER'>CUSTOMER</option>
              <option value='TRAINER'>TRAINER</option>
              <option value='ADMIN'>ADMIN</option>
            </select>
          </th>
          <th colSpan='1' style={{ color: '#000' }}>
            <button className='btn-save' onClick={handleClickSave}>
              Save
            </button>
          </th>
        </>
      ) : (
        <>
          <th colSpan='2' style={{ color: '#000' }}>
            {user.role}
          </th>
          <th colSpan='1' style={{ color: '#000' }}>
            <button className='btn-edit' onClick={handleClickEdit}>
              Edit
            </button>
          </th>
        </>
      )}
    </tr>
  );
}

export default AdminChangeRoleRow;
