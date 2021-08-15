import React, { useState } from "react";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import promotionImg1 from "../../PIC/Picxel/PIC_Promo/pexels-ella-olsson-1640771.jpg";
import promotionImg2 from "../../PIC/Picxel/PIC_Promo/pexels-jane-d-1128678.jpg";
import promotionImg3 from "../../PIC/Picxel/PIC_Promo/pexels-kaboompics-com-5938.jpg";
import promotionImg4 from "../../PIC/Picxel/PIC_Promo/pexels-tirachard-kumtanom-347134.jpg";
import promotionImg5 from "../../PIC/Picxel/PIC_Promo/pexels-william-choquette-1954524.jpg";
import "./CorasalPromotionSlideComponent.css";

function CorasalPromotionSlideComponent() {
  const MOCK = [
    promotionImg1,
    promotionImg2,
    promotionImg3,
    promotionImg4,
    promotionImg5,
  ];
  const [currentImg, setCurrentImg] = useState(0);
  const length = MOCK.length;

  const nextSlide = () => {
    setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1));
  };

  const prevSlide = () => {
    setCurrentImg((cur) => (cur === 0 ? length - 1 : cur - 1));
  };

  // // มี Bug ถ้า Click มันจะรัวเกินไปได้
  // useEffect(() => {
  //   setTimeout(
  //     () => setCurrentImg((cur) => (cur === length - 1 ? 0 : cur + 1)),
  //     5000
  //   );
  // }, [currentImg, length]);

  const corasalSlide = MOCK.map((item, index) => {
    return (
      <div
        key={index}
        className={currentImg === index ? "img-promo active" : "img-promo"}>
        <img src={item} alt="run-promo" className="image" />
      </div>
    );
  });

  if (!Array.isArray(MOCK) || MOCK.length <= 0) {
    return null;
  }

  return (
    <section className="CorasalPromotionSlideComponent">
      <div className="container">
        <div className="arrow-left-bg" onClick={() => prevSlide()}>
          <BsCaretLeftFill className="arrow" />
        </div>
        {corasalSlide}
        {/* <div className="img-promo">
          <img src={promotionImg1} alt="run-promo" />
        </div> */}
        <div className="arrow-right-bg" onClick={() => nextSlide()}>
          <BsCaretRightFill className="arrow" />
        </div>
      </div>
    </section>
  );
}

export default CorasalPromotionSlideComponent;
