import React from 'react'
import Slider from "infinite-react-carousel";
import './Slider.css'
function SliderSection() {
  const settings = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    duration: 300,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slide_container">
          <h3>one</h3>
        </div>
        <div className="slide_container">
          <h3>two</h3>
        </div>
        <div className="slide_container">
          <h3>three</h3>
        </div>
        <div className="slide_container">
          <h3>four</h3>
        </div>
        <div className="slide_container">
          <h3>five</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SliderSection;
