import React, { useState } from 'react';

function Carrinho() {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <div>
        <img
          src="src\assets\shopping-cart-icon.png"
          alt="Carrinho de Compras"
          width="100"
          height="100"
        />
      </div>
      <div>
        <p>Quantidade no Carrinho: {quantity}</p>
        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default Carrinho