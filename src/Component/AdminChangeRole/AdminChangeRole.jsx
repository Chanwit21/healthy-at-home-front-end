import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import AlertBox from '../AlertBox/AlertBox';
import Pagination from '../Pagination/Pagination';
import AdminChangeRoleRow from './AdminChangeRoleRow';

function AdminChangeRole() {
  const [users, setUsers] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('firstName');
  const [limit, setLimit] = useState(5);
  const [onPage, setOnPage] = useState(1);
  const [length, setLength] = useState(0);
  const [word, setWord] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const fetchUser = async (sort, limit, onPage, word) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `/users/search?sort=${sort}&limit=${limit}&offset=${limit * (onPage - 1)}&word=${word}`
      );
      setUsers(res.data.users);
      setLength(res.data.length);
      setLoading(false);
    } catch (err) {
      console.dir(err);
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchUser(sort, limit, onPage, word);
  }, [sort, limit, onPage, word]);

  const updateRole = async (role, userId) => {
    try {
      setLoading(true);
      await axios.put(`/users/changerole`, { role, userId });
      const clone = [...users];
      const idx = clone.findIndex((item) => item.id === userId);
      clone[idx].role = role;
      setUsers(clone);
      setAlertMessage('Update role success!!');
      setAlertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    } catch (err) {
      console.dir(err);
      setAlertMessage('Update role failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const tableBody = users.map((user) => {
    return <AdminChangeRoleRow key={user.id} user={user} updateRole={updateRole} />;
  });

  const handleChangeSort = (e) => {
    setOnPage(1);
    setSort(e.target.value);
  };

  const handleChangeLimit = (e) => {
    setOnPage(1);
    setLimit(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setSearchWord(e.target.value);
    if (e.target.value === '') {
      setWord('');
    }
  };

  const handleCLickSearch = () => {
    setWord(searchWord);
    setOnPage(1);
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
      <h1>Change Role</h1>
      <>
        <label>sort:</label>
        <select value={sort} onChange={handleChangeSort}>
          <option value='firstName'>First name</option>
          <option value='lastName'>Last name</option>
          <option value='email'>Email</option>
        </select>
        <select value={limit} onChange={handleChangeLimit}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
        </select>
        <input type='text' value={searchWord} onChange={handleChangeSearch} style={{ marginLeft: '2vw' }} />
        <button
          onClick={handleCLickSearch}
          style={{
            background: '#2b90c4',
            border: '0.052083333vw solid #2b90c4',
            borderRadius: '0.52083333vw',
            fontWeight: '600',
            fontSize: '1.01625vw',
            color: '#ffffff',
            padding: '0.4vw 1vw',
            cursor: ' pointer',
            marginLeft: '1vw',
          }}
        >
          Search
        </button>
        <p>{`Showing ${1 + limit * (onPage - 1)} to ${
          limit * onPage > length ? length : limit * onPage
        } of ${length}`}</p>
      </>
      {length === 0 ? null : (
        <table id='manage-exercise'>
          <thead>
            <tr
              style={{
                backgroundColor: '#2B90C5',
                color: '#FFF',
                height: '3.125vw',
              }}
            >
              <th colSpan='2' style={{ width: '35%' }}>
                Name
              </th>
              <th colSpan='2' style={{ width: '35%' }}>
                Email
              </th>
              <th colSpan='2'>Role</th>
              <th colSpan='1'>Edit</th>
            </tr>

            {tableBody}
          </thead>
        </table>
      )}

      {length !== 0 ? <Pagination length={Math.ceil(length / limit)} onPage={onPage} setOnPage={setOnPage} /> : null}
    </div>
  );
}

export default AdminChangeRole;
