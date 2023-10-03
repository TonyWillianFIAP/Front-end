import React from 'react'

import Carousel from './Carousel'

// Importe as imagens
import img1 from './assets/product-detail-4.jpg';
import img2 from './assets/product-detail-3.jpg';
import img3 from './assets/product-detail-2.jpg';

function Outlet() {

  const images = [img1, img2, img3];

  return (
    <div>
      <div>
        <h1>Outlet</h1>
      </div>

      {/* Renderize o componente do carrossel e passe as imagens como propriedade */}
      <Carousel images={images} />
    </div>
  );
}

export default Outlet