import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../helpers/api';
import getTotalPrice from '../../helpers/getTotalPrice';
import AppContext from '../../context/AppContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { savedProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => setProducts(response));
  }, []);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [savedProducts]);

  return (
    <section>
      {
        products.map((product) => (
          <ProductCard
            key={ product.id }
            productData={ product }
          />
        ))
      }

      <button
        type="button"
        data-testid="customer_products__button-cart"
        style={ { position: 'fixed', right: 0, bottom: 0, margin: '50px' } }
      >
        Ver carrinho: R$
        <span data-testid="customer_products__checkout-bottom-value">
          {totalPrice}
        </span>
      </button>

    </section>
  );
}

export default ProductList;
