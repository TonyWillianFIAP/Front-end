import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'src/assets/cat-img-1.jpg',
    'src/assets/product-5.jpg',
    'src/assets/cat-img-2.jpg',
    // Adicione mais URLs de imagens conforme necessário
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Imagem ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
