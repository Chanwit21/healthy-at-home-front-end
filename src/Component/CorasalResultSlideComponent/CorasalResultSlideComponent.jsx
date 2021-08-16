import React, { useEffect, useState } from 'react';
import result1 from '../../PIC/Picxel/PIC_Result/pexels-elina-fairytale-3822905.jpg';
import result2 from '../../PIC/Picxel/PIC_Result/pexels-hong-son-4035635.jpg';
import result3 from '../../PIC/Picxel/PIC_Result/pexels-karolina-grabowska-4498516.jpg';
import result4 from '../../PIC/Picxel/PIC_Result/pexels-li-sun-2475521.jpg';
import './CorasalResultSlideComponent.css';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
function CorasalResultSlideComponent() {
  const MOCK = [result1, result2, result3, result4];
  const [currentImg, setCurrentImg] = useState(0);
  const length = MOCK.length;

  const nextSlide = () => {
    setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1));
  };

  const prevSlide = () => {
    setCurrentImg((cur) => (cur === 0 ? length - 1 : cur - 1));
  };

  // ได้แล้วแต่เหมือนว่าจะรีเฟรชสองรอบ
  useEffect(() => {
    setInterval(
      () => setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1)),
      5000
    );
    // console.log("gen", id);
  }, [length]);

  const corasalSlide = MOCK.map((item, index) => {
    return (
      <div
        key={index}
        className={currentImg === index ? 'img-result active' : 'img-result'}
      >
        <img src={item} alt='result' className='resultImage' />
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
