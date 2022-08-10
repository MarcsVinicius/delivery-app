import React, { useState, useEffect } from 'react';
import CostumerProducts from '../../components/ProductsCustomer';

function Products() {
  function getProducts() {
    const products = fetch(`${process.env.REACT_APP_BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
    return products;
  }
  return (
    <>
      <CostumerProducts />
      tela de produtos
    </>
  );
}

export default Products;
