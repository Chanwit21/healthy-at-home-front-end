import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceProgramEvenRowComponent.css';
import { useUserContext } from '../../contetext/Usercontext';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';

function ServiceProgramEvenRowComponent(props) {
  const [alertMessage, setAlertMessage] = useState('');
  const { state: userState } = useUserContext();
  const history = useHistory();

  const handleClickJoin = async (e) => {
    const res = await axios.get('/user_trainer_relational/check_user_trainer_relational');
    if (!res.data.already) {
      history.push({
        pathname: userState.user?.role === 'CUSTOMER' ? '/informatioservicetoregisterprogrampage' : '/loginpage',
        state: {
          courseName: props.courseName,
          serImgPath: props.serImgPath,
          serviceId: props.serviceId,
          price: props.Price,
          message: !userState.user ? 'You must login before buy course.' : null,
        },
      });
    } else {
      setAlertMessage('You has already in progress course !!');
      setTimeout(() => setAlertMessage(''), 3000);
    }
  };

  return (
    <div>
      {alertMessage ? <AlertBox alertMessage={alertMessage} color={'alert-box-invalid'} /> : null}
      <div className='service-cardEven'>
        <div className='img-in-servicecardEven' style={{ backgroundImage: `url(${props.imgPath})` }}></div>
        <div className='content-in-servicecardEven'>
          <div className='text-content-in-servicecardEven'>
            <h1>{props.courseName}</h1>
            <p>{props.content}</p>
            <button onClick={handleClickJoin}>Join Now</button>
            <p className='price-in-service-cardEven'>Price : {props.Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProgramEvenRowComponent;
