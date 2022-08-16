import React from 'react';
import propTypes from 'prop-types';

import './OrderCard.css';
import { useHistory } from 'react-router-dom';

function OrderCard({ orderData }) {
  const history = useHistory();

  const {
    id,
    status,
    saleDate,
    totalPrice,
  } = orderData;

  return (
    <section
      onClick={ () => history.push(`/customer/orders/${id}`) }
      aria-hidden
      className="order-card"
    >
      <span className="order-card__number">
        Pedido
        <span data-testid={ `customer_orders__element-order-id-${id}` }>{id}</span>
      </span>

      <span
        data-testid={ `customer_orders__element-delivery-status-${id}` }
        className="order-card__status"
      >
        {status}
      </span>

      <div className="order-card__right">
        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
          className="order-card__date"
        >
          {new Date(saleDate).toLocaleDateString('pt-br')}
        </span>

        <span
          className="order-card__price"
        >
          <span>R$</span>
          <span
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}

          </span>
        </span>
      </div>
    </section>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  orderData: propTypes.object,
}.isRequired;
