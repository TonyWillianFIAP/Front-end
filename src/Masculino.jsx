import React from 'react'

import Carousel from './Carousel'

// Importe as imagens
import img1 from './assets/product-2.jpg';
import img2 from './assets/product-7.jpg';
import img3 from './assets/sapato-casual01img-1.jpg';

export const Masculino = () => {

  const images = [img1, img2, img3];

  return (
    <div>
      <div>
        <h1>Masculino</h1>
      </div>

      {/* Renderize o componente do carrossel e passe as imagens como propriedade */}
      <Carousel images={images} />
    </div>
  );
}

export default Masculino