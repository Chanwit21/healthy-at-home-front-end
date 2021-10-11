import React, { useState } from 'react';

function ManageTrainerRow({ relation, trainers, updateRelations }) {
  const [isEdit, setIsEdit] = useState(false);
  const [selectTrainer, setSelectTrainer] = useState(relation.trainer.id);

  const handleChangeSelectTrainer = (e) => {
    setSelectTrainer(e.target.value);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickSave = () => {
    const trainer = trainers.find((item) => item.id === selectTrainer);
    updateRelations(relation.relationId, trainer);
    setIsEdit(false);
  };

  const trainerOption = trainers.map((trainer) => {
    return (
      <option key={trainer.id} value={trainer.id}>
        {trainer.firstName + ' ' + trainer.lastName}
      </option>
    );
  });

  return (
    <tr>
      <th colSpan='2' style={{ width: '35%', color: '#000' }}>
        {relation.user.firstName + ' ' + relation.user.lastName}
      </th>
      <th colSpan='2' style={{ color: '#000' }}>
        {isEdit ? (
          <select value={selectTrainer} onChange={handleChangeSelectTrainer}>
            {trainerOption}
          </select>
        ) : (
          <>{relation.trainer.firstName + ' ' + relation.trainer.lastName}</>
        )}
      </th>
      <th colSpan='1' style={{ color: '#000' }}>
        {isEdit ? (
          <button className='btn-save' onClick={handleClickSave}>
            Save
          </button>
        ) : (
          <button className='btn-edit' onClick={handleClickEdit}>
            Edit
          </button>
        )}
      </th>
    </tr>
  );
}

export default ManageTrainerRow;
