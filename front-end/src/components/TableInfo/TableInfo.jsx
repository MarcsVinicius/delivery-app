import React from 'react';
import PropTypes from 'prop-types';

export default function TableInfo({ orderId, name, quantity, price, removeCallBack }) {
  return (
    <tr>
      <td>
        {orderId}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${orderId - 1}` }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-quantity-${orderId - 1}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${orderId - 1}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${orderId - 1}` }
      >
        {price * quantity}
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${orderId - 1}` }
          type="button"
          onClick={ (e) => removeCallBack(e, name) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableInfo.propTypes = {
  orderId: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.required;
