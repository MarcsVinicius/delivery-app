import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/NavbarSeller/Navbar';
import { fetchSellerOrderDetail } from '../../helpers/api';

const NUMBER_LENGTH = 4;
const statusTest = 'seller_order_details__element-order-details-label-delivery-status';
export default function OrderDetail() {
  const { sellerId, orderId } = useParams();
  const [orders, setOrders] = useState({});
  const [preparingCheck, setPreparingCheck] = useState(false);
  const [dispatchCheck, setDispatchCheck] = useState(true);
  const fetchUpdate = async (newStatus) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/seller`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        saleId: orderId,
        status: newStatus,
      }),
    });
    setOrders((prevState) => ({ ...prevState, status: newStatus }));
  };
  useEffect(() => {
    if (orders.status === 'Em Trânsito') {
      setPreparingCheck(true);
      setDispatchCheck(true);
    }
    if (orders.status === 'Preparando') {
      setPreparingCheck(true);
      setDispatchCheck(false);
    }
    if (orders.sale === undefined) {
      fetchSellerOrderDetail(sellerId, orderId).then((response) => setOrders(response));
    }
  }, [orders, sellerId, orderId]);

  return (
    <section>
      <Navbar />
      <h2>Detalhes do Pedido</h2>
      {orders.sale !== undefined ? (
        <section>
          <b>
            <span
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO ${orders.sale.toString().padStart(NUMBER_LENGTH, '0')}`}
            </span>
          </b>
          <b>
            <p
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              {(new Date(orders.saleDate).toLocaleDateString('pt-BR'))}
            </p>
          </b>
          <b>
            <span
              data-testid={ statusTest }
            >
              {orders.status}
            </span>
          </b>
          <button
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => {
              fetchUpdate('Preparando');
              setPreparingCheck(true);
              setDispatchCheck(false);
            } }
            disabled={ preparingCheck }
            type="button"
          >
            PREPARAR PEDIDO

          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => {
              fetchUpdate('Em Trânsito');
              setDispatchCheck(true);
            } }
            type="button"
            disabled={ dispatchCheck }
          >
            SAIU PARA ENTREGA

          </button>
        </section>
      ) : <h2>Carregando...</h2>}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { orders.products !== undefined
            ? (
              orders.products.map((product, i) => (
                <tr
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${i}`
                  }
                  key={ i }
                >
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-item-number-${i}`
                    }
                  >
                    <span>
                      {i + 1}
                    </span>
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-name-${i}`
                    }
                  >
                    {product.ProductName}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-quantity-${i}`
                    }
                  >
                    {product.quantity}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-unit-price-${i}`
                    }
                  >
                    {product.unityPrice}
                  </td>
                  <td
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${i}`
                    }
                  >
                    {product.subTotal}
                  </td>
                </tr>
              ))
            )
            : <tr><td>Loading</td></tr>}
        </tbody>
      </table>
      {orders.sale !== undefined
        ? (
          <h1
            data-testid="seller_order_details__element-order-total-price"
          >
            {`${orders.totalPrice.replace('.', ',')}`}

          </h1>)
        : <h1>Nenhum produto inserido</h1>}
    </section>
  );
}
