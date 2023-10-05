import Carousel from './Carousel';
import { Link } from 'react-router-dom'; // Importe o componente Link se estiver usando o React Router
import img1 from './assets/cat-img-5.jpg';
import img2 from './assets/product-3.jpg';
import img3 from './assets/product-6.jpg';

function Entrada() {
  const images = [img1, img2, img3];

  return (
    <div>
      <div>
        <h1>Entrada</h1>
      </div>

      {/* Use o componente Link para envolver o Carousel */}
      <Link to="/home"> {/* Substitua "/outra-pagina" pela URL desejada */}
        <Carousel images={images} />
      </Link>
    </div>
  );
}

export default Entrada;
