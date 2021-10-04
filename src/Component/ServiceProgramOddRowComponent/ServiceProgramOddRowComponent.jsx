import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contetext/Usercontext';
import './ServiceProgramOddRowComponent.css';

function ServiceProgramOddRowComponent(props) {
  const { state: userState } = useUserContext();
  return (
    <div>
      <div className='service-cardOdd'>
        <div className='content-in-servicecardOdd'>
          <div className='text-content-in-servicecardOdd'>
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
            <p className='price-in-service-cardOdd'>Price : {props.Price}</p>
          </div>
        </div>
        <div className='img-in-servicecardOdd' style={{ backgroundImage: `url(${props.imgPath})` }}></div>
      </div>
    </div>
  );
}

export default ServiceProgramOddRowComponent;
