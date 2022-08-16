import React from 'react';
import PropTypes from 'prop-types';

export default function TableInfo({ orderId,
  name, quantity, price, removeCallBack, index }) {
  return (
    <tr>
      <td>
        <span
          data-testid={
            `customer_checkout__element-order-table-item-number-${index}`
          }
        >
          {orderId}
        </span>
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {(price * quantity).toFixed(2).replace('.', ',')}
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
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
  index: PropTypes.number,
}.required;
