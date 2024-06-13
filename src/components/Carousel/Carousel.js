import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagen1 from './imagen1.jpg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import imagen4 from './imagen4.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={imagen1} alt="Image 1" className="carousel-image" />
        </div>
        <div>
          <img src={imagen2} alt="Image 2" className="carousel-image" />
        </div>
        <div>
          <img src={imagen3} alt="Image 3" className="carousel-image" />
        </div>
        <div>
          <img src={imagen4} alt="Image 4" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;