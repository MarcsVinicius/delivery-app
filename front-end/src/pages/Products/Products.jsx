import React from 'react';
import Footer from '../../components/Footer/Footer';

// imported components
import Navbar from '../../components/Navbar/Navbar';
import ProductList from '../../components/ProductList/ProductList';
import Provider from '../../context/Provider';

function Products() {
  return (
    <section>
      <Navbar />

      <Provider>
        <ProductList />
      </Provider>
      <Footer />

    </section>
  );
}

export default Products;
