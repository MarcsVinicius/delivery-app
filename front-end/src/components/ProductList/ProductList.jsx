import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import { fetchProducts } from '../../helpers/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((response) => setProducts(response));
  }, []);

  return (
    <section>
      {
        products.map((product) => (
          <ProductCard key={ product.id } productData={ product } />
        ))
      }

      <button
        type="button"
        data-testid="customer_products__button-cart"
        style={ { position: 'fixed', right: 0, bottom: 0, margin: '50px' } }
      >
        Ver carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">0</span>
      </button>
    </section>
  );
}

export default ProductList;
