import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceProgramEvenRowComponent.css';
import { useUserContext } from '../../contetext/Usercontext';

function ServiceProgramEvenRowComponent(props) {
  const { state: userState } = useUserContext();

  return (
    <div>
      <div className='service-cardEven'>
        <div className='img-in-servicecardEven' style={{ backgroundImage: `url(${props.imgPath})` }}></div>
        <div className='content-in-servicecardEven'>
          <div className='text-content-in-servicecardEven'>
            <h1>{props.courseName}</h1>
            <p>{props.content}</p>
            <button>
              <Link
                to={{
                  pathname:
                    userState.user?.role === 'CUSTOMER' ? '/informatioservicetoregisterprogrampage' : '/loginpage',
                  state: {
                    courseName: props.courseName,
                    serImgPath: props.serImgPath,
                    price: props.Price,
                    message: !userState.user ? 'You must login before buy course.' : null,
                  },
                }}
              >
                Join Now
              </Link>
            </button>
            <p className='price-in-service-cardEven'>Price : {props.Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProgramEvenRowComponent;
