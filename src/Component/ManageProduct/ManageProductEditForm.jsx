import React, { useRef, useState } from 'react';
import { formatText } from '../../service/formatting';

function ManageProductEditForm({ setAlertMessage, product, setIsEdit, updateProducts }) {
  const [editProduct, setEditProduct] = useState({
    name: product.name,
    title: product.title,
    price: product.price,
    day: product.day,
  });
  const [error, setError] = useState({ name: '', title: '', price: '', day: '' });
  const [imageShow1, setImageShow1] = useState(product.imageLink1);
  const [ImageFile1, setImageFile1] = useState(null);
  const [imageShow2, setImageShow2] = useState(product.imageLink2);
  const [ImageFile2, setImageFile2] = useState(null);
  const inputImage1 = useRef();
  const inputImage2 = useRef();

  const handleChangeInputImage1 = (e) => {
    if (e.target.files[0]) {
      if (['image/jpg', 'image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
        const file = e.target.files[0];
        setImageFile1(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageShow1(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setAlertMessage('Only .png, .jpg and .jpeg format allowed!');
        setTimeout(() => setAlertMessage(''), 3000);
      }
    }
  };

  const handleChangeInputImage2 = (e) => {
    if (e.target.files[0]) {
      if (['image/jpg', 'image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
        const file = e.target.files[0];
        setImageFile2(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageShow2(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setAlertMessage('Only .png, .jpg and .jpeg format allowed!');
        setTimeout(() => setAlertMessage(''), 3000);
      }
    }
  };

  const handleClickAddImage1 = () => {
    if (!imageShow1) {
      inputImage1.current.click();
    }
  };

  const handleClickAddImage2 = () => {
    if (!imageShow2) {
      inputImage2.current.click();
    }
  };

  const handleCLickClearImage1 = () => {
    setImageFile1(null);
    setImageShow1('');
  };

  const handleCLickClearImage2 = () => {
    setImageFile2(null);
    setImageShow2('');
  };

  const handleChangeInput = (field, e) => {
    setEditProduct((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
    setError((cur) => {
      const clone = { ...cur };
      clone[field] = '';
      return clone;
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let allPass = true;

    for (let key of Object.keys(editProduct)) {
      if (!editProduct[key]) {
        allPass = false;
        setError((cur) => {
          const clone = { ...cur };
          clone[key] = `${formatText(key)} is require!!`;
          return clone;
        });
      }

      if (key === 'day' || key === 'price') {
        if (isNaN(editProduct[key])) {
          allPass = false;
          setError((cur) => {
            const clone = { ...cur };
            clone[key] = `${formatText(key)} must be a number!!`;
            return clone;
          });
        }
      }
    }

    if (!imageShow1) {
      allPass = false;
      setError((cur) => {
        const clone = { ...cur };
        clone.image1 = `Image1 is require!!`;
        return clone;
      });
    }

    if (!imageShow2) {
      allPass = false;
      setError((cur) => {
        const clone = { ...cur };
        clone.image2 = `Image2 is require!!`;
        return clone;
      });
    }

    if (allPass) {
      updateProducts(product.id, editProduct, ImageFile1, ImageFile2);
    }
  };

  const handleClickClose = () => {
    setIsEdit(false);
  };

  return (
    <div className='manage_product_card'>
      <form onSubmit={handleSubmitForm}>
        <input
          type='file'
          style={{ opacity: 0, position: 'absolute', zIndex: -3 }}
          hidden
          ref={inputImage1}
          onChange={handleChangeInputImage1}
        />
        <input
          type='file'
          style={{ opacity: 0, position: 'absolute', zIndex: -3 }}
          hidden
          ref={inputImage2}
          onChange={handleChangeInputImage2}
        />
        <div className='card_row'>
          <div
            className='add_image1'
            onClick={handleClickAddImage1}
            style={{ backgroundImage: `url(${imageShow1})`, backgroundSize: 'cover' }}
          >
            {imageShow1 ? null : <i className='bi bi-plus-lg'></i>}
          </div>
          <div
            className='add_image2'
            onClick={handleClickAddImage2}
            style={{ backgroundImage: `url(${imageShow2})`, backgroundSize: 'cover' }}
          >
            {imageShow2 ? null : <i className='bi bi-plus-lg'></i>}
          </div>
        </div>
        {error.image1 || error.image2 ? (
          <div className='card_row'>
            {error.image1 ? (
              <div className='btn_add_image1'>
                <div className='invalid-text' style={{ textAlign: 'center' }}>
                  {error.image1}
                </div>
              </div>
            ) : null}
            {error.image2 ? (
              <div className='btn_add_image2'>
                <div className='invalid-text' style={{ textAlign: 'center' }}>
                  {error.image2}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {imageShow1 || imageShow2 ? (
          <div className='card_row'>
            <div className='btn_add_image1'>
              {!imageShow1 ? null : <button onClick={handleCLickClearImage1}>Clear Image1</button>}
            </div>
            <div className='btn_add_image2'>
              {!imageShow2 ? null : <button onClick={handleCLickClearImage2}>Clear Image2</button>}
            </div>
          </div>
        ) : null}
        <div className='card_row_title'>
          <p>Name :</p>
          <p>
            <input type='text' value={editProduct.name} onChange={(e) => handleChangeInput('name', e)} />
          </p>
        </div>
        {error.name ? (
          <div className='invalid-text' style={{ textAlign: 'center' }}>
            {error.name}
          </div>
        ) : null}
        <div className='card_row_title'>
          <p>Title :</p>
          <p>
            <input type='text' value={editProduct.title} onChange={(e) => handleChangeInput('title', e)} />
          </p>
        </div>{' '}
        {error.title ? (
          <div className='invalid-text' style={{ textAlign: 'center' }}>
            {error.title}
          </div>
        ) : null}
        <div className='card_row_title'>
          <p>Price :</p>
          <p>
            <input type='text' value={editProduct.price} onChange={(e) => handleChangeInput('price', e)} />
          </p>
        </div>
        {error.price ? (
          <div className='invalid-text' style={{ textAlign: 'center' }}>
            {error.price}
          </div>
        ) : null}
        <div className='card_row_title'>
          <p>Day :</p>
          <p>
            <input type='text' value={editProduct.day} onChange={(e) => handleChangeInput('day', e)} />
          </p>
        </div>
        {error.day ? (
          <div className='invalid-text' style={{ textAlign: 'center' }}>
            {error.day}
          </div>
        ) : null}
        <div className='card_row'>
          <button className='btn-save' type='submit'>
            Save
          </button>
          <button className='btn-delete' type='button' onClick={handleClickClose}>
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageProductEditForm;
