import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TableInfo from '../../components/TableInfo/TableInfo';

export default function CostumerCheckout() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')));
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState();
  const handleCallback = async (_e, productName) => {
    setProducts((prevState) => {
      const result = prevState.filter((product) => product.name !== productName);
      localStorage.setItem('products', JSON.stringify(result));
      return result;
    });
  };
  const calculateTotal = () => {
    const res = products.map((product) => product.quantity
    * product.price);
    return res.reduce((acc, value) => acc + value).toFixed(2).replace('.', ',');
  };
  return (
    <section>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {products !== undefined && products !== null && products.length !== 0
            ? products.map((product, i) => (
              <TableInfo
                key={ i }
                orderId={ i + 1 }
                name={ product.name }
                quantity={ product.quantity }
                price={ product.price }
                removeCallBack={ handleCallback }
              />
            ))
            : null}
        </tbody>
      </table>
      <h1>{`Total: R$ ${calculateTotal()}`}</h1>
    </section>
  );
}
