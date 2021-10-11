import React, { useEffect, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import Pagination from '../Pagination/Pagination';
import ManageTrainerRow from './ManageTrainerRow';

function ManageTrainer() {
  const [relations, setRelations] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [onPage, setOnPage] = useState(1);
  const [length, setLength] = useState(0);
  const [trainers, setTrainers] = useState([]);

  const fetchTrainer = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/trainer_info`);
      setLoading(false);
      setTrainers(res.data.trainers);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTrainer();
  }, []);

  const fetchRelations = async (limit, onPage) => {
    try {
      setLoading(true);
      const res = await axios.get(`/relation/search?limit=${limit}&offset=${limit * (onPage - 1)}`);
      setRelations(res.data.relations);

      setLength(res.data.length);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRelations(limit, onPage);
  }, [limit, onPage]);

  const updateRelations = async (relationId, trainer) => {
    try {
      setLoading(true);
      await axios.put(`/relation/${relationId}`, { trainerId: trainer.id });
      const clone = [...relations];
      const idx = clone.findIndex((item) => item.relationId === relationId);
      clone[idx].trainer = trainer;
      setRelations(clone);
      setAlertMessage('Update success!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Update failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const tableBody = relations.map((relation) => {
    return (
      <ManageTrainerRow
        key={relation.relationId}
        relation={relation}
        trainers={trainers}
        updateRelations={updateRelations}
      />
    );
  });

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const cssOverride = css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: #000;
  `;

  if (loading) {
    return <BounceLoader color='#000' loading={loading} css={cssOverride} size={150} />;
  }

  return (
    <div className='manage-exercise'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <h1>Customer and User</h1>
          <select value={limit} onChange={handleChangeLimit} style={{ width: '20%' }}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>
          <p>{`Showing ${1 + limit * (onPage - 1)} to ${
            limit * onPage > length ? length : limit * onPage
          } of ${length}`}</p>
        </div>
      </div>
      <table id='manage-exercise'>
        <thead>
          <tr
            style={{
              backgroundColor: '#2B90C5',
              color: '#FFF',
              height: '3.125vw',
            }}
          >
            <th colSpan='2' style={{ width: '40%' }}>
              User Name
            </th>
            <th colSpan='2' style={{ width: '40%' }}>
              Trainer Name
            </th>
            <th colSpan='1'>Edit</th>
          </tr>

          {tableBody}
        </thead>
      </table>
      {length !== 0 ? <Pagination length={Math.ceil(length / limit)} onPage={onPage} setOnPage={setOnPage} /> : null}
    </div>
  );
}

export default ManageTrainer;
