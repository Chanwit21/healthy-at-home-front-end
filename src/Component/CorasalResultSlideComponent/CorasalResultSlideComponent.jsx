import React, { useEffect, useState } from 'react';
import result1 from '../../PIC/Picxel/PIC_Result/pexels-elina-fairytale-3822905.jpg';
import axios from '../../config/axios';
import './CorasalResultSlideComponent.css';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

function CorasalResultSlideComponent() {
  const [customerResultImage, setCustomerResultImage] = useState([
    { imageLink: result1 },
    { imageLink: result1 },
    { imageLink: result1 },
    { imageLink: result1 },
  ]);
  const [currentImg, setCurrentImg] = useState(0);
  const length = customerResultImage.length;

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get('/customer_result_image');
      setCustomerResultImage(res.data.customer_result_images);
    };
    fetchImage();
  }, []);

  const nextSlide = () => {
    setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1));
  };

  const prevSlide = () => {
    setCurrentImg((cur) => (cur === 0 ? length - 1 : cur - 1));
  };

  useEffect(() => {
    const id = setInterval(() => setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1)), 5000);
    return () => clearInterval(id);
    // console.log("gen", id);
  }, [length]);

  const corasalSlide = customerResultImage.map((item, index) => {
    return (
      <div key={index} className={currentImg === index ? 'img-result active' : 'img-result'}>
        <img src={item.imageLink} alt='result' className='resultImage' />
      </div>
    );
  });

  return (
    <div className='CorasalResultSlideComponent'>
      <button className='arrow arrow-left-result' onClick={() => prevSlide()}>
        <BsCaretLeftFill />
      </button>
      {corasalSlide}
      {/* <img src={result1} alt="result1" className="resultImage" /> */}
      <button className='arrow arrow-right-result' onClick={() => nextSlide()}>
        <BsCaretRightFill />
      </button>
    </div>
  );
}

export default CorasalResultSlideComponent;
