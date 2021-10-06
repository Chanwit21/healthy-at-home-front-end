import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../contetext/Usercontext';
import './ServiceProgramOddRowComponent.css';
import axios from '../../config/axios';
import AlertBox from '../AlertBox/AlertBox';

function ServiceProgramOddRowComponent(props) {
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
      <div className='service-cardOdd'>
        <div className='content-in-servicecardOdd'>
          <div className='text-content-in-servicecardOdd'>
            <h1>{props.courseName}</h1>
            <p>{props.content}</p>
            <button onClick={handleClickJoin}>Join Now</button>
            <p className='price-in-service-cardOdd'>Price : {props.Price}</p>
          </div>
        </div>
        <div className='img-in-servicecardOdd' style={{ backgroundImage: `url(${props.imgPath})` }}></div>
      </div>
    </div>
  );
}

export default ServiceProgramOddRowComponent;
