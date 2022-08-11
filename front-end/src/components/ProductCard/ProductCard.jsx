import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ productData }) {
  const [quantity, setQuantity] = useState(0);

  const {
    id,
    name,
    url_image: image,
    price,
  } = productData;

  const handleRemove = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleChange = ({ target: { value } }) => {
    if (value >= 0) setQuantity(+value);
  };

  return (

    <section>
      <img
        src={ image }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ `Imagem do produto, ${name}` }
      />

      <h4 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h4>

      <h4 data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace('.', ',')}
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
