import React, { useEffect, useRef, useState } from 'react';
import AlertBox from '../AlertBox/AlertBox';
import Pagination from '../Pagination/Pagination';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

function ManagePicResult() {
  const [images, setImages] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');
  const [onPage, setOnPage] = useState(1);
  const [onAddImage, setOnAddImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [fileToshow, setFileToshow] = useState('');
  const [error, setError] = useState({ selectTypeAdd: '', imageFile: '' });
  const [loading, setLoading] = useState(false);
  const inputFile = useRef();

  const fetchImage = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/customer_result_image`);
      setImages(res.data.customer_result_images);
      setLoading(false);
    } catch (err) {
      setAlertMessage('Server failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImage();
  }, []);

  const handleClickDelete = async (id) => {
    if (images.length === 4) {
      setAlertMessage('The resulting image must be at least 4 images, please add one before you can delete it.');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 5000);
    } else {
      try {
        setLoading(true);
        const newImages = [...images].filter((item) => item.id !== id);
        setImages(newImages);
        await axios.delete(`/customer_result_image/${id}`);
        setAlertMessage('Delete Success');
        setalertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessage(''), 2000);
        setOnPage(1);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        setAlertMessage('Delete failed!!');
        setalertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
      }
    }
  };

  const handleClickAddButton = (e) => {
    setOnAddImage(true);
  };

  const handleClickAddFile = () => {
    inputFile.current.click();
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = function (e) {
      setFileToshow(e.target.result);
    };
    reader.readAsDataURL(file);
    setError((cur) => {
      const clone = { ...cur };
      clone.imageFile = '';
      return clone;
    });
  };

  const handleClickAddImage = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setError((cur) => {
        const clone = { ...cur };
        clone.imageFile = 'Image is require !!';
        return clone;
      });
    } else {
      const form = new FormData();
      form.append('customer_result_image', imageFile);

      try {
        setLoading(true);
        window.scrollTo(0, 0);
        await axios.post('/customer_result_image', form);
        fetchImage();
        setAlertMessage('Add file success.');
        setalertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessage(''), 2000);
        setOnAddImage(false);
        setImageFile(null);
        setFileToshow('');
        setOnPage(1);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Add file failed.');
        setalertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
      }
    }
  };

  const handleClickClear = () => {
    setImageFile(null);
    setFileToshow('');
  };

  const handleClickClose = () => {
    setImageFile(null);
    setFileToshow('');
    setOnAddImage(false);
  };

  const tableBody =
    images.length !== 0 ? (
      <>
        <tr>
          <td colSpan='5' className='image-row'>
            <img src={images[onPage - 1].imageLink} alt={images[onPage - 1].imageType} />
          </td>
        </tr>
        <tr>
          <td colSpan='5'>
            <button className='btn-delete' onClick={(e) => handleClickDelete(images[onPage - 1].id)}>
              Delete
            </button>
          </td>
        </tr>
      </>
    ) : null;

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
    <div className='ManageFoodMenu'>
      {onAddImage ? (
        <div className='add-image-form'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1>Result Photo</h1>{' '}
            <button className='btn-clear' style={{ width: '5%', marginBottom: '0' }} onClick={handleClickClose}>
              <i class='bi bi-x'></i>
            </button>
          </div>
          <form onSubmit={handleClickAddImage}>
            <div className={`add-image-area${error.imageFile ? ' input-invalid' : ''}`} onClick={handleClickAddFile}>
              {fileToshow ? (
                <img src={fileToshow} alt='file' />
              ) : (
                <i className='bi bi-plus' style={{ fontSize: '10vw' }}></i>
              )}
            </div>
            {error.imageFile ? (
              <div className='invalid-text' style={{ margin: '0 auto', width: '80%', marginBottom: '1vw' }}>
                {error.imageFile}
              </div>
            ) : null}
            <input type='file' hidden ref={inputFile} onChange={handleChangeFile} />
            {error.selectTypeAdd ? (
              <div className='invalid-text' style={{ margin: '0 auto', width: '80%', marginBottom: '1vw' }}>
                {error.selectTypeAdd}
              </div>
            ) : null}
            {fileToshow ? (
              <button type='button' className='btn-clear' style={{ marginBottom: '1.5vw' }} onClick={handleClickClear}>
                Clear
              </button>
            ) : null}

            <input type='submit' value='Add' />
          </form>
        </div>
      ) : (
        <div className='food-schedule-trainer'>
          {alertMessage ? <AlertBox alertMessage={alertMessage} color={alertBoxColor} /> : null}
          <div className='header-row'>
            <h1>Result Photo</h1>
            <button className='btn-add' onClick={handleClickAddButton}>
              Add Image
            </button>
          </div>
          <p>{`Showing ${onPage} of ${images.length}`}</p>
          <table id='food-schedule-trainer'>
            <tbody>{tableBody}</tbody>
          </table>
          {images.length !== 0 ? <Pagination length={images.length} onPage={onPage} setOnPage={setOnPage} /> : null}
        </div>
      )}
    </div>
  );
}

export default ManagePicResult;
