import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';

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
      return;
    }

    const currentProduct = {
      ...productData,
      quantity: 0,
    };

    localStorage.setItem('products', JSON.stringify([...savedProducts, currentProduct]));
  }, [id, productData]);

  // atualiza o localStorage quando muda a quantidade
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const index = savedProducts.findIndex((product) => product.id === id);

    savedProducts[index] = { ...productData, quantity };

    localStorage.setItem('products', JSON.stringify(savedProducts));
    setSavedProducts(savedProducts);
  }, [id, productData, setSavedProducts, quantity]);

  return (

    <section>
      <img
        src={ urlImage }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ `Imagem do produto, ${name}` }
        style={ { width: '100px' } }
      />

      <h4 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h4>

      <h4 data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toFixed(2).replace('.', ',')}
      </h4>

      <div>
        <button
          type="button"
          onClick={ handleRemove }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>

        <input
          type="number"
          onChange={ handleChange }
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />

        <button
          type="button"
          onClick={ () => setQuantity(quantity + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
