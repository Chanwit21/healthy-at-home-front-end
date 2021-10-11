import React, { useEffect, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import Pagination from '../Pagination/Pagination';
import './ManageExerciseVedio.css';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import ManageExerciseVedioRow from './ManageExerciseVedioRow';
import ManageExerciseAddForm from './ManageExerciseAddForm';

function ManageExerciseVedio() {
  const [exercises, setExercises] = useState([]);
  const [length, setLength] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('name');
  const [limit, setLimit] = useState(5);
  const [onPage, setOnPage] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const fetchExercises = async (sort, limit, onPage) => {
    try {
      setLoading(true);
      const res = await axios.get(`/exercise/search?sortBy=${sort}&limit=${limit}&offset=${limit * (onPage - 1)}`);
      setExercises(res.data.exercisePostures);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    }
  };

  const fetchLength = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/exercise/length`);
      setLength(res.data.length);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    }
  };

  useEffect(() => {
    fetchLength();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchExercises(sort, limit, onPage);
  }, [sort, limit, onPage]);

  const handleChangeSort = (e) => {
    setOnPage(1);
    setSort(e.target.value);
    fetchExercises(e.target.value, limit > length - limit * onPage ? length - limit * onPage : limit, onPage);
  };

  const handleChangeLimit = (e) => {
    setOnPage(1);
    setLimit(+e.target.value);
    fetchExercises(sort, +e.target.value, onPage);
  };

  const handleClickAdd = () => {
    setIsAdding(true);
  };

  const handleClickClose = () => {
    setIsAdding(false);
  };

  const updateExercise = async (id, exercise) => {
    try {
      setLoading(true);
      await axios.put(`/exercise/${id}`, { ...exercise });
      const clone = [...exercises];
      const idx = clone.findIndex((item) => item.id === id);
      clone[idx] = { ...exercise };
      setExercises(clone);
      setAlertMessage('Update Success!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
      return true;
    } catch (err) {
      setAlertMessage('Update failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      return false;
    }
  };

  const createExercise = async (exercise) => {
    try {
      setLoading(true);
      await axios.post(`/exercise`, { ...exercise });
      fetchExercises(sort, limit, onPage);
      setAlertMessage('Create Success!!');
      setAlertBoxColor('alert-box-valid');
      setIsAdding(false);
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
      return true;
    } catch (err) {
      console.clear();
      setAlertMessage(err.response.data.message);
      setLoading(false);
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      return false;
    }
  };

  const deleteExercises = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/exercise/${id}`);
      fetchExercises(sort, limit, onPage);
      setAlertMessage('Delete Success!!');
      setAlertBoxColor('alert-box-valid');
      setIsAdding(false);
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
      return true;
    } catch (err) {
      setAlertMessage('Delete failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      return false;
    }
  };

  const tableBody = exercises.map((exerciseVedio) => (
    <ManageExerciseVedioRow
      key={exerciseVedio.id}
      deleteExercises={deleteExercises}
      exerciseVedio={exerciseVedio}
      updateExercise={updateExercise}
    />
  ));

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
    <div className='ManageExerciseVedio'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <div className='header_manage_workout'>
        <div style={{ width: '50%' }}>
          <h1>Exercise schedule</h1>
          {isAdding ? null : (
            <>
              <label>sort:</label>
              <select value={sort} onChange={handleChangeSort}>
                <option value='name'>Name</option>
                <option value='fontColor'>Font Color</option>
                <option value='backgroundColor'>Background Color</option>
                <option value='link'>Link</option>
                <option value='type'>Type</option>
              </select>
              <select value={limit} onChange={handleChangeLimit}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
              <p>{`Showing ${1 + limit * (onPage - 1)} to ${
                limit * onPage > length ? length : limit * onPage
              } of ${length}`}</p>
            </>
          )}
        </div>
        {isAdding ? (
          <div className='button-add'>
            <button className='btn-clear' style={{ width: 'fit-content' }} onClick={handleClickClose}>
              <i className='bi bi-x'></i>
            </button>
          </div>
        ) : (
          <div className='button-add'>
            <button className='btn-edit' style={{ backgroundColor: '#4caf50' }} onClick={handleClickAdd}>
              Add
            </button>
          </div>
        )}
      </div>
      <table id='manage-exercise-vedio-schedule'>
        <thead>
          <tr
            style={{
              backgroundColor: '#61d195',
            }}
          >
            <th colSpan='2' style={{ width: '40%' }}>
              Name
            </th>
            <th colSpan='1' style={{ width: '10%' }}>
              Font Color
            </th>
            <th colSpan='1' style={{ width: '10%' }}>
              Background Color
            </th>
            <th colSpan='3' style={{ width: '30%' }}>
              Link
            </th>
            <th colSpan='1'>Type</th>
          </tr>
        </thead>
        <tbody>
          {isAdding ? (
            <>
              <ManageExerciseAddForm createExercise={createExercise} />
            </>
          ) : (
            <>{tableBody}</>
          )}
        </tbody>
      </table>
      {isAdding ? null : <Pagination length={Math.ceil(length / limit)} onPage={onPage} setOnPage={setOnPage} />}
    </div>
  );
}

export default ManageExerciseVedio;
