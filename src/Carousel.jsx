import React from 'react';
import './css/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe os estilos do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importe o JavaScript do Bootstrap

function Carousel({ images }) {
  return (
    <div className="carousel-container">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores */}
        <ol className="carousel-indicators">
          {images.map((image, index) => (
            <li
              key={index}
              data-bs-target="#myCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        {/* Slides */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img src={image} alt={`Imagem ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>

        {/* Controles */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
