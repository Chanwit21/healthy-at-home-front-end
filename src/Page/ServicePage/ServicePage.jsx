import React, { useEffect, useState } from 'react';
import ServiceProgramEvenRowComponent from '../../Component/ServiceProgramEvenRowComponent/ServiceProgramEvenRowComponent';
import ServiceProgramOddRowComponent from '../../Component/ServiceProgramOddRowComponent/ServiceProgramOddRowComponent';
import './ServicePage.css';
import ContactUsComponent from '../../Component/ContactUsComponent/ContactUsComponent';
import axios from '../../config/axios';

const formatPrice = (amount) => {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(Math.floor(amount));
};

function ServicePage() {
  const [courseServices, setCourseServices] = useState([]);

  useEffect(() => {
    const fetchCourseServices = async () => {
      const res = await axios.get('/course_services');
      setCourseServices(res.data.course_services);
    };
    fetchCourseServices();
  }, []);

  const course_services = courseServices.map((service, index) => {
    if (index % 2 === 0) {
      return (
        <ServiceProgramOddRowComponent
          key={service.id}
          serviceId={service.id}
          imgPath={service.imageLink1}
          serImgPath={service.imageLink2}
          courseName={service.name}
          content={service.title}
          Price={formatPrice(service.price)}
        />
      );
    }
    return (
      <ServiceProgramEvenRowComponent
        key={service.id}
        serviceId={service.id}
        imgPath={service.imageLink1}
        serImgPath={service.imageLink2}
        courseName={service.name}
        content={service.title}
        Price={formatPrice(service.price)}
      />
    );
  });

  return (
    <>
      <div className='service-page'>
        <section className='service-program'>
          <div className='container'>{course_services}</div>
        </section>
        <section className='contact-us'>
          <div className='container'>
            <div className='horizental-line'></div>
            <ContactUsComponent />
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicePage;
