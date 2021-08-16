import React, { useState, useEffect } from 'react';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';
import promotionImg1 from '../../PIC/Picxel/PIC_Promo/pexels-ella-olsson-1640771.jpg';
import promotionImg2 from '../../PIC/Picxel/PIC_Promo/pexels-jane-d-1128678.jpg';
import promotionImg3 from '../../PIC/Picxel/PIC_Promo/pexels-kaboompics-com-5938.jpg';
import promotionImg4 from '../../PIC/Picxel/PIC_Promo/pexels-tirachard-kumtanom-347134.jpg';
import promotionImg5 from '../../PIC/Picxel/PIC_Promo/pexels-william-choquette-1954524.jpg';
import './CorasalPromotionSlideComponent.css';

function CorasalPromotionSlideComponent() {
  const MOCK = [
    { img: promotionImg1 },
    { img: promotionImg2 },
    { img: promotionImg3 },
    { img: promotionImg4 },
    { img: promotionImg5 },
  ];

  const MOCK2 = [
    { img: 'https://picsum.photos/id/1000/1000/800' },
    { img: 'https://picsum.photos/id/1001/1000/800' },
    { img: 'https://picsum.photos/id/1025/1000/800' },
    { img: 'https://picsum.photos/id/1029/1000/800' },
    { img: 'https://picsum.photos/id/1051/1000/800' },
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const length = MOCK2.length;

  const nextSlide = () => {
    setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1));
  };

  const prevSlide = () => {
    setCurrentImg((cur) => (cur === 0 ? length - 1 : cur - 1));
  };

  useEffect(() => {
    setInterval(
      () => setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1)),
      7000
    );
  }, [length]);

  const corasalSlide = MOCK2.map((item, index) => {
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
            : currentImg === MOCK.length - 1 && index === 0
            ? 'img-promo after'
            : currentImg === 0 && index === MOCK.length - 1
            ? 'img-promo before'
            : 'img-promo'
        }
      >
        <img src={item.img} alt='run-promo' className='image' />
      </div>
    );
  });

  if (!Array.isArray(MOCK) || MOCK.length <= 0) {
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
