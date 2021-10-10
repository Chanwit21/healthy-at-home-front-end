import React, { useRef, useState } from 'react';
import './ManageFoodMenu.css';
import AlertBox from '../AlertBox/AlertBox';
import Pagination from '../Pagination/Pagination';
import axios from '../../config/axios';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';

function ManageFoodMenu() {
  const [images, setImages] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertBoxColor, setalertBoxColor] = useState('alert-box-invalid');
  const [onPage, setOnPage] = useState(1);
  const [onAddImage, setOnAddImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [fileToshow, setFileToshow] = useState('');
  const [selectTypeToAdd, setSelectTypeToAdd] = useState('');
  const [error, setError] = useState({ selectTypeAdd: '', imageFile: '' });
  const [loading, setLoading] = useState(false);
  const inputFile = useRef();

  const [selectType, setSelectType] = useState('');

  const handleClickDelete = async (id) => {
    try {
      setLoading(true);
      const newImages = [...images].filter((item) => item.id !== id);
      setImages(newImages);
      await axios.delete(`/food_image/${id}`);
      setSelectType('');
      setAlertMessage('Delete Success');
      setalertBoxColor('alert-box-valid');
      setTimeout(() => setAlertMessage(''), 2000);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (err) {
      setAlertMessage('Delete failed!!');
      setalertBoxColor('alert-box-invalid');
      setTimeout(() => setAlertMessage(''), 2000);
    }
  };

  const handleChangeType = async (e) => {
    setSelectType(e.target.value);

    if (e.target.value) {
      try {
        setLoading(true);
        const res = await axios.get(`/food_image?type=${e.target.value}`);
        setImages(res.data.images);
        setLoading(false);
      } catch (err) {
        setAlertMessage('Select Error.');
        setalertBoxColor('alert-box-invalid');
        setTimeout(() => setAlertMessage(''), 2000);
      }
    } else {
      setImages([]);
    }
  };

  const handleClickAddButton = (e) => {
    setOnAddImage(true);
    setSelectType('');
    setImages([]);
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

    let allPass = true;

    if (!selectTypeToAdd) {
      allPass = false;
      setError((cur) => {
        const clone = { ...cur };
        clone.selectTypeAdd = 'Type is require !!';
        return clone;
      });
    }

    if (!imageFile) {
      allPass = false;
      setError((cur) => {
        const clone = { ...cur };
        clone.imageFile = 'Image is require !!';
        return clone;
      });
    }

    if (allPass) {
      const form = new FormData();
      form.append('type', selectTypeToAdd);
      form.append('food_image', imageFile);

      try {
        setLoading(true);
        window.scrollTo(0, 0);
        await axios.post('/food_image', form);
        setAlertMessage('Add file success.');
        setalertBoxColor('alert-box-valid');
        setTimeout(() => setAlertMessage(''), 2000);
        setOnAddImage(false);
        setImageFile(null);
        setFileToshow('');
        setSelectTypeToAdd('');
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
    setSelectTypeToAdd('');
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
          <h1>Add Food Menu</h1>
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
            <select
              className={`select-add${error.selectTypeAdd ? ' input-invalid' : ''}`}
              value={selectTypeToAdd}
              onChange={(e) => {
                setSelectTypeToAdd(e.target.value);
                setError((cur) => {
                  const clone = { ...cur };
                  clone.selectTypeAdd = '';
                  return clone;
                });
              }}
            >
              <option value=''>Choose type</option>
              <option value='food_menu_postworkout'>Post workout</option>
              <option value='food_menu_preworkout'>Pre workout</option>
              <option value='food_menu_normal'>Normal</option>
              <option value='food_menu_snack'>Snack</option>
            </select>
            {error.selectTypeAdd ? (
              <div className='invalid-text' style={{ margin: '0 auto', width: '80%', marginBottom: '1vw' }}>
                {error.selectTypeAdd}
              </div>
            ) : null}
            {fileToshow ? (
              <button type='button' className='btn-clear' onClick={handleClickClear}>
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
            <h1>Food schedule</h1>
            <button className='btn-add' onClick={handleClickAddButton}>
              Add Image
            </button>
          </div>
          <select value={selectType} onChange={handleChangeType}>
            <option value=''>Choose type</option>
            <option value='food_menu_postworkout'>Post workout</option>
            <option value='food_menu_preworkout'>Pre workout</option>
            <option value='food_menu_normal'>Normal</option>
            <option value='food_menu_snack'>Snack</option>
          </select>
          <table id='food-schedule-trainer'>
            <tbody>{tableBody}</tbody>
          </table>
          {images.length !== 0 ? <Pagination length={images.length} onPage={onPage} setOnPage={setOnPage} /> : null}
        </div>
      )}
    </div>
  );
}

export default ManageFoodMenu;
