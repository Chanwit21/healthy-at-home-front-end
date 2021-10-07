import React, { useState, useEffect } from 'react';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';
import promotionImg1 from '../../PIC/Picxel/PIC_Promo/pexels-ella-olsson-1640771.jpg';
import axios from '../../config/axios';
import './CorasalPromotionSlideComponent.css';

function CorasalPromotionSlideComponent() {
  const [promotionImage, setPromotionImage] = useState([
    { imageLink: promotionImg1 },
    { imageLink: promotionImg1 },
    { imageLink: promotionImg1 },
    { imageLink: promotionImg1 },
    { imageLink: promotionImg1 },
  ]);
  const [currentImg, setCurrentImg] = useState(0);
  const length = promotionImage.length;

  const nextSlide = () => {
    setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1));
  };

  const prevSlide = () => {
    setCurrentImg((cur) => (cur === 0 ? length - 1 : cur - 1));
  };

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get('/promotion_image');
      setPromotionImage(res.data.promotion_images);
    };
    fetchImage();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1)), 5000);

    return () => clearInterval(id);
  }, [length]);

  const corasalSlide = promotionImage.map((item, index) => {
    return (
      <div
        id={index}
        key={index}
        className={
          currentImg === index
            ? 'img-promo active'
            : index === currentImg - 1
            ? 'img-promo before'
            : index === currentImg + 1
            ? 'img-promo after'
            : currentImg === promotionImage.length - 1 && index === 0
            ? 'img-promo after'
            : currentImg === 0 && index === promotionImage.length - 1
            ? 'img-promo before'
            : 'img-promo'
        }
      >
        <img src={item.imageLink} alt='run-promo' className='image' />
      </div>
    );
  });

  if (!Array.isArray(promotionImage) || promotionImage.length <= 0) {
    return null;
  }

  return (
    <section className='CorasalPromotionSlideComponent'>
      <div className='container'>
        <div className='arrow-left-bg' onClick={() => prevSlide()}>
          <BsCaretLeftFill className='arrow' />
        </div>
        {corasalSlide}
        {/* <div className="img-promo">
          <img src={promotionImg1} alt="run-promo" />
        </div> */}
        <div className='arrow-right-bg' onClick={() => nextSlide()}>
          <BsCaretRightFill className='arrow' />
        </div>
      </div>
    </section>
  );
}

export default CorasalPromotionSlideComponent;
