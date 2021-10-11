import React, { useEffect, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import Pagination from '../Pagination/Pagination';

function AdminContactUs() {
  const [contactUs, setContactUs] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('createdAt');
  const [limit, setLimit] = useState(5);
  const [onPage, setOnPage] = useState(1);
  const [length, setLength] = useState(0);

  const fetchContactUs = async (sort, limit, onPage) => {
    try {
      setLoading(true);
      const res = await axios.get(`/contact_us/search?sort=${sort}&limit=${limit}&offset=${limit * (onPage - 1)}`);
      setContactUs(res.data.contactUs);

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
    fetchContactUs(sort, limit, onPage);
  }, [sort, limit, onPage]);

  const tableBody = contactUs.map((item) => {
    return (
      <tr key={item.id}>
        <th colSpan='2' style={{ width: '35%', color: '#000' }}>
          {item.firstName + ' ' + item.lastName}
        </th>
        <th colSpan='2' style={{ width: '35%', color: '#000' }}>
          {item.additionalDetail}
        </th>
        <th colSpan='1' style={{ color: '#000' }}>
          {item.email}
        </th>
        <th colSpan='1' style={{ color: '#000' }}>
          {new Date(item.createdAt).toISOString().split('T')[0]}
        </th>
      </tr>
    );
  });

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    // fetchContactUs(e.target.value, limit, onPage);
  };

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
    // fetchContactUs(sort, e.target.value, onPage);
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
      <h1>Transactions</h1>
      <>
        <label>sort:</label>
        <select value={sort} onChange={handleChangeSort}>
          <option value='firstName'>First name</option>
          <option value='lastName'>Last name</option>
          <option value='email'>Email</option>
          <option value='createdAt'>Time</option>
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
              User Name
            </th>
            <th colSpan='2' style={{ width: '35%' }}>
              Additional details
            </th>
            <th colSpan='1'>Email</th>
            <th colSpan='1'>Time</th>
          </tr>

          {tableBody}
        </thead>
      </table>
      {length !== 0 ? <Pagination length={Math.ceil(length / limit)} onPage={onPage} setOnPage={setOnPage} /> : null}
    </div>
  );
}

export default AdminContactUs;
