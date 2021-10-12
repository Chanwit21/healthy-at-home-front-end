import React, { useEffect, useState } from 'react';
import ManageProductCard from './ManageProductCard';
import './ManageProduct.css';
import AlertBox from '../AlertBox/AlertBox';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
import ManageProductAddProduct from './ManageProductAddProduct';

function ManageProduct() {
  const [allProduct, setAllProduct] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');
  const [loading, setLoading] = useState(false);
  const [onAdd, setOnAdd] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/course_services`);
      setAllProduct(res.data.course_services);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, []);

  const addProductForm = async (form) => {
    try {
      setLoading(true);
      const res = await axios.post(`/course_services`, form);
      const clone = [...allProduct];
      clone.push(res.data.course_service);
      setAllProduct(clone);
      setAlertMessage('Create success!!');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 3000);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Create failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const updateProducts = async (id, product, imageFile1, imageFile2) => {
    try {
      window.scrollTo(0, 0);
      setLoading(true);
      await axios.put(`/course_services/text/${id}`, { ...product });

      if (imageFile1) {
        const form = new FormData();
        form.append('image1', imageFile1);
        await axios.put(`/course_services/image1/${id}`, form);
      }

      if (imageFile2) {
        const form = new FormData();
        form.append('image2', imageFile2);
        await axios.put(`/course_services/image2/${id}`, form);
      }
      fetchProduct();
      setAlertMessage('Update success!!');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    } catch (err) {
      console.dir(err);
      setAlertMessage('Update failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/course_services/${id}`);
      fetchProduct();
      setAlertMessage('Update success!!');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    } catch (err) {
      console.dir(err);
      setAlertMessage('Delete failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
    }
  };

  const handleClickClose = () => {
    setOnAdd(false);
  };

  const handleClickAdd = () => {
    setOnAdd(true);
  };

  const cards = allProduct.map((product) => {
    return (
      <ManageProductCard
        deleteProduct={deleteProduct}
        updateProducts={updateProducts}
        key={product.id}
        product={product}
        setAlertMessage={setAlertMessage}
      />
    );
  });

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
    <div className='ManageProduct'>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
      <div className='header_manage_product' style={{ height: '5vw' }}>
        <h1>Product</h1>
        {onAdd ? (
          <button
            style={{
              width: '3vw',
              height: '3vw',
              backgroundColor: '#b23b3b',
              borderRadius: '0.5vw',
              border: 'none',
              color: '#FFF',
              cursor: 'pointer',
            }}
            onClick={handleClickClose}
          >
            <i className='bi bi-x'></i>
          </button>
        ) : (
          <button
            style={{
              width: '5vw',
              height: '3vw',
              backgroundColor: '#4CAF50',
              borderRadius: '0.5vw',
              border: 'none',
              color: '#FFF',
              cursor: 'pointer',
            }}
            onClick={handleClickAdd}
          >
            Add
          </button>
        )}
      </div>

      {onAdd ? (
        <ManageProductAddProduct setAlertMessage={setAlertMessage} addProductForm={addProductForm} />
      ) : (
        <>{cards}</>
      )}
    </div>
  );
}

export default ManageProduct;
