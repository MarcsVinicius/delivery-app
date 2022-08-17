import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SellerOrderCard({ orderData }) {
  const history = useHistory();

  const {
    id,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = orderData;

  return (
    <section
      onClick={ () => history.push(`/seller/orders/${id}`) }
      aria-hidden
      className="order-card"
    >
      <span className="order-card__number">
        Pedido
        <span data-testid={ `seller_orders__element-order-id-${id}` }>{id}</span>
      </span>

      <span
        data-testid={ `seller_orders__element-delivery-status-${id}` }
        className="order-card__status"
      >
        {status}
      </span>

      <div className="order-card__right">
        <span
          data-testid={ `seller_orders__element-order-date-${id}` }
          className="order-card__date"
        >
          {new Date(saleDate).toLocaleDateString('pt-br')}
        </span>

        <span
          className="order-card__price"
        >
          <span>R$</span>
          <span
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}

          </span>
        </span>

        <span data-testid={ `seller_orders__element-card-address-${id}` }>
          {`${deliveryAddress}, ${deliveryNumber}`}
        </span>
      </div>
    </section>
  );
}

export default SellerOrderCard;

SellerOrderCard.propTypes = {
  orderData: propTypes.object,
}.isRequired;
