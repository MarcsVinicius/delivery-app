import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CostumerProducts({ name, price, urlImg, id }) {
  const [qty, setQty] = useState(0);
  const handleClick = (type) => {
    switch (type) {
    case 'sum':
      if (qty === '') {
        setQty(0);
      }
      setQty((prevState) => prevState + 1);
      break;
    case 'sub':
      if (qty === '') {
        setQty(0);
      }
      if (qty !== 0 && qty !== '') {
        setQty((prevState) => prevState - 1);
      }
      break;
    default:
      break;
    }
  };

  const handleChange = (e) => {
    setQty(e.target.value);
  };
  return (
    <section>
      <img
        src={ urlImg }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ `Imagem do produto, ${name}` }
      />
      <h4
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h4>
      <h4
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price.toFixed(2).replace('.', ',')}`}

      </h4>
      <div>
        <button
          type="button"
          onClick={ () => handleClick('sum') }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
        <input
          type="number"
          onChange={ handleChange }
          value={ qty }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => handleClick('sub') }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
      </div>
    </section>
  );
}

CostumerProducts.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImg: PropTypes.string,
  id: PropTypes.number,
}.required;
