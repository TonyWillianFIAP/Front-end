import React from 'react';
import Carousel from './Carousel'

// Importe as imagens
import img1 from './assets/cat-img-5.jpg';
import img2 from './assets/product-3.jpg';
import img3 from './assets/product-6.jpg';

// Importe o arquivo CSS para aplicar os estilos

function Feminino() {
  // Coloque as imagens em um array
  const images = [img1, img2, img3];

  return (
    <div>
      <div>
        <h1>Feminino</h1>
      </div>

      {/* Renderize o componente do carrossel e passe as imagens como propriedade */}
      <Carousel images={images} />
    </div>
  );
}

export default Feminino;
