import React, { useEffect, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import Pagination from '../Pagination/Pagination';
import { currencyFormat } from '../../service/formatting';

function AdminWatchTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setAlertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('userName');
  const [limit, setLimit] = useState(5);
  const [onPage, setOnPage] = useState(1);
  const [length, setLength] = useState(0);
  const [allamount, setAllamount] = useState(0);

  const fetchTransactions = async (sort, limit, onPage) => {
    try {
      setLoading(true);
      const res = await axios.get(`transaction/search?sort=${sort}&limit=${limit}&offset=${limit * (onPage - 1)}`);
      setTransactions(res.data.transactions);

      setLength(res.data.length);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const fetchAllAmount = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`transaction/all_amount`);
      setAllamount(res.data.total_amount);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setAlertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(sort, limit, onPage);
    fetchAllAmount();
  }, [sort, limit, onPage]);

  const tableBody = transactions.map((item) => {
    return (
      <tr key={item.id} style={{ backgroundColor: item.status === 'successful' ? '#67F55F' : '#ADADAD' }}>
        <th colSpan='2' style={{ width: '35%', color: '#000' }}>
          {item.userName}
        </th>
        <th colSpan='2' style={{ width: '35%', color: '#000' }}>
          {item.courseName}
        </th>
        <th colSpan='1' style={{ color: '#000' }}>
          {item.amount}
        </th>
        <th colSpan='1' style={{ color: '#000' }}>
          {item.status}
        </th>
      </tr>
    );
  });

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

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
        <div>
          <h1>Transactions</h1>
          <label>sort:</label>
          <select value={sort} onChange={handleChangeSort}>
            <option value='userName'>User name</option>
            <option value='amount'>Amount</option>
            <option value='status'>Status</option>
          </select>
          <select value={limit} onChange={handleChangeLimit}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>
          <p>{`Showing ${1 + limit * (onPage - 1)} to ${
            limit * onPage > length ? length : limit * onPage
          } of ${length}`}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}> Amount : {currencyFormat(allamount)}</div>
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
            <th colSpan='2' style={{ width: '35%' }}>
              User Name
            </th>
            <th colSpan='2' style={{ width: '35%' }}>
              Course Name
            </th>
            <th colSpan='1'>Amount</th>
            <th colSpan='1'>Status</th>
          </tr>

          {tableBody}
        </thead>
      </table>
      {length !== 0 ? <Pagination length={Math.ceil(length / limit)} onPage={onPage} setOnPage={setOnPage} /> : null}
    </div>
  );
}

export default AdminWatchTransaction;
