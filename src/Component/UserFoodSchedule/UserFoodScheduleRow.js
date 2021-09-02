import React, { useRef, useState } from 'react';

function isImageType(file) {
  const fileType = file.type;
  const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  return validExtensions.includes(fileType);
}

function UserFoodScheduleRow({ time, menuAndQuality, day }) {
  const [imageURL, setImageURL] = useState('');
  const [onOver, setOnOver] = useState(false);

  const input = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    setOnOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setOnOver(false);
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleDropFile = async (e) => {
    e.preventDefault();
    if (isImageType(e.dataTransfer.files[0])) {
      const result = await toBase64(e.dataTransfer.files[0]);
      console.log(result);
      setImageURL(result);
    } else {
      alert('This is not an Image File!');
      setOnOver(false);
    }
  };

  const handleCickBrowse = (e) => {
    e.preventDefault();
    input.current.click();
  };

  const handleChangeInput = async (e) => {
    e.preventDefault();
    if (isImageType(e.target.files[0])) {
      setOnOver(true);
      const base64URL = await toBase64(e.target.files[0]);
      setImageURL(base64URL);
      // saveAndShowFile(e.target.files[0]);
    } else {
      alert('This is not an Image File!');
      setOnOver(false);
    }
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    setImageURL('');
    setOnOver(false);
  };

  return (
    <tr>
      <td colSpan='1' style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
        {time}
      </td>
      <td colSpan='1'>{menuAndQuality}</td>
      <td>
        <form
          action='#'
          id={`img-${time}-${day}`}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <div
            className='drag-and-drop'
            style={{ border: onOver ? '0.052083333vw solid #2b90c4' : '' }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDropFile}
          >
            {imageURL ? (
              <img src={imageURL} alt='upload' />
            ) : (
              <>
                <h1>Drag and Drop </h1>
                <h1>or</h1>
                <h1>
                  <button onClick={handleCickBrowse}>Browse</button>
                  <input type='file' name='file' id='photo' hidden ref={input} onChange={handleChangeInput} />
                </h1>
              </>
            )}
          </div>
          <input type='submit' value='Send' />
          {imageURL ? (
            <button className='btn-delete' onClick={handleClickDelete}>
              Delete
            </button>
          ) : null}
        </form>
      </td>
    </tr>
  );
}

export default UserFoodScheduleRow;
