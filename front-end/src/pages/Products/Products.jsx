import React, { useState, useEffect } from 'react';
import CostumerProducts from '../../components/ProductsCustomer';

// imported components
import Navbar from '../../components/Navbar/Navbar';

function Products() {
  const [products, setProducts] = useState('');
  function getProducts() {
    const res = fetch(`${process.env.REACT_APP_BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
    return res;
  }

  useEffect(() => {
    if (products === '') {
      const fetchProducts = async () => {
        const pr = await getProducts();
        setProducts(pr);
      };
      fetchProducts();
    }
  }, [products]);
  return (
    <section>
      <Navbar />
      { products.length !== 0 && products !== undefined
        ? products.map((product, index) => (
          <CostumerProducts
            key={ `${index}${product}` }
            name={ product.name }
            price={ product.price }
            img={ product.url_image }
            id={ product.id }
          />))
        : <h1>Loading...</h1>}
    </section>
  );
}

export default Products;
