import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { fetchOrderBySaleId } from '../../helpers/api';

const NUMBER_LENGTH = 4;
const statusTest = 'customer_order_details__element-order-details-label-delivery-status';
export default function OrderDetail() {
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  useEffect(() => {
    if (orders.sale === undefined) {
      fetchOrderBySaleId(id).then((response) => setOrders(response));
    }
  }, [orders, id]);

  return (
    <section>
      <Navbar />
      {orders.sale !== undefined ? (
        <section className="w-4/5 mx-auto">

          <h2 className="text-lg font-semibold text-center mb-5">Detalhes do Pedido</h2>

          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
            className="font-bold text-lg text-slate-800"
          >
            {`PEDIDO ${orders.sale.toString().padStart(NUMBER_LENGTH, '0')};`}
          </span>

          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
            className="text-lg text-slate-800"
          >
            {`P. Vend: ${orders.sellerName}`}
          </p>

          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
            className="text-lg text-slate-800"
          >
            {(new Date(orders.saleDate).toLocaleDateString('pt-BR'))}
          </p>

          <div className="flex justify-between mt-5 items-center">
            <span
              data-testid={ statusTest }
              className="text-lg font-semibold text-center"
            >
              {orders.status}
            </span>

            <button
              data-testid="customer_order_details__button-delivery-check"
              type="button"
              className="
                py-3 px-5
                rounded-lg
                text-white
                font-bold
                bg-[#07A0C3]
                block
                mb-3
                cursor-pointer
              "
              disabled
            >
              MARCAR COMO ENTREGUE

            </button>
          </div>

        </section>
      ) : <h2>Carregando...</h2>}
      <table className="w-4/5 mx-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3 bg-slate-100">Item</th>
            <th className="border border-slate-300 p-3 bg-slate-100">Descrição</th>
            <th className="border border-slate-300 p-3 bg-slate-100">Quantidade</th>
            <th className="border border-slate-300 p-3 bg-slate-100">Valor Unitário</th>
            <th className="border border-slate-300 p-3 bg-slate-100">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { orders.products !== undefined
            ? (
              orders.products.map((product, i) => (
                <tr
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${i}`
                  }
                  key={ i }
                >
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${i}`
                    }
                    className="border border-slate-300 p-3 text-center"
                  >
                    <span>
                      {i + 1}
                    </span>
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-name-${i}`
                    }
                    className="border border-slate-300 p-3 text-center"
                  >
                    {product.productName}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-quantity-${i}`
                    }
                    className="border border-slate-300 p-3 text-center"
                  >
                    {product.quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${i}`
                    }
                    className="border border-slate-300 p-3 text-center"
                  >
                    {product.unityPrice}
                  </td>
                  <td
                    data-testid={
                      `customer_order_details__element-order-total-price-${i}`
                    }
                    className="border border-slate-300 p-3 text-center"
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
            data-testid="customer_order_details__element-order-total-price"
            className="m-10 text-4xl font-bold text-center text-slate-700"
          >
            {`Total: R$ ${orders.totalPrice.replace('.', ',')}`}

          </h1>)
        : <h1>Nenhum produto inserido</h1>}

    </section>
  );
}
