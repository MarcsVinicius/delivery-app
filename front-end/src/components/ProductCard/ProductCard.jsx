import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

const LESS_THEN_ZERO = -1;

function ProductCard({ productData }) {
  const [quantity, setQuantity] = useState(0);
  const { setSavedProducts } = useContext(AppContext);

  const {
    id,
    name,
    urlImage,
    price,
  } = productData;

  const handleRemove = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleChange = ({ target: { value } }) => {
    if (value >= 0) setQuantity(+value);
  };

  // carrega os dados do produtos do localStorage
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

    const foundProduct = savedProducts.find((product) => product.id === id);

    if (foundProduct) {
      setQuantity(foundProduct.quantity);
    }
  }, [id, productData]);

  // atualiza o localStorage quando muda a quantidade
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const index = savedProducts.findIndex((product) => product.id === id);

    if (index === LESS_THEN_ZERO && quantity > 0) {
      savedProducts.push({ ...productData, quantity });
    } else if (quantity > 0) {
      savedProducts[index] = { ...productData, quantity };
    } else if (quantity === 0) {
      savedProducts.splice(index, 1);
    }

    localStorage.setItem('products', JSON.stringify(savedProducts));
    setSavedProducts(savedProducts);
  }, [quantity]);

  return (

    <section
      className="
        bg-white
        w-full
        max-w-[200px]
        shadow-md
        rounded-lg
        p-5
        flex
        flex-col
        items-center
        justify-between
      "
    >
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={ urlImage }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          alt={ `Imagem do produto, ${name}` }
          className="w-[80px]"
        />

        <h4
          data-testid={ `customer_products__element-card-title-${id}` }
          className="text-lg font-bold text-center text-gray-700"
        >
          {name}
        </h4>

        <h4
          data-testid={ `customer_products__element-card-price-${id}` }
          className="
            text-4xl font-bold text-center flex gap-1 items-end text-gray-800 mt-3
          "
        >
          <span className="text-lg">R$</span>
          {price.replace('.', ',')}
        </h4>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          type="button"
          onClick={ handleRemove }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          className={ `
          ${quantity === 0 ? 'bg-gray-400' : 'bg-[#07A0C3]'}
          ${quantity === 0 ? '' : 'hover:bg-[#086788]'}
            w-[30px]
            h-[30px]
            flex
            items-center
            justify-center
            text-white
            font-bold
            rounded-lg
          ` }
        >
          -
        </button>

        <input
          type="text"
          onChange={ handleChange }
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          className="flex-1 w-full text-center text-lg"
        />

        <button
          type="button"
          onClick={ () => setQuantity(quantity + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          className="
            bg-[#07A0C3]
            w-[30px]
            h-[30px]
            flex
            items-center
            justify-center
            text-white
            font-bold
            rounded-lg
            hover:bg-[#086788]
          "
        >
          +
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImg: PropTypes.string,
  id: PropTypes.number,
}.required;
