import React, { useState } from 'react';
import { currencyFormat } from '../../service/formatting';
import ManageProductEditForm from './ManageProductEditForm';

function ManageProductCard({ product, setAlertMessage, updateProducts, deleteProduct }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleClickDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <>
      {isEdit ? (
        <ManageProductEditForm
          updateProducts={updateProducts}
          product={product}
          setAlertMessage={setAlertMessage}
          setIsEdit={setIsEdit}
        />
      ) : (
        <div className='manage_product_card'>
          <div className='card_row'>
            <div className='image_1'>
              <img src={product.imageLink1} alt='product_image_1' />
            </div>
            <div className='image_2'>
              <img src={product.imageLink2} alt='product_image_2' />
            </div>
          </div>
          <div className='card_row_title'>
            <p>Name :</p>
            <p>{product.name}</p>
          </div>
          <div className='card_row_title'>
            <p>Title :</p>
            <p>{product.title}</p>
          </div>
          <div className='card_row_title'>
            <p>Price :</p>
            <p>{currencyFormat(product.price)}</p>
          </div>
          <div className='card_row_title'>
            <p>Day :</p>
            <p>{product.day}</p>
          </div>
          <div className='card_row_title' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button className='btn-edit' onClick={handleClickEdit}>
              Edit
            </button>
            <button className='btn-delete' onClick={handleClickDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageProductCard;
