import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>

      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </Link>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Username
      </span>

      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}

export default Navbar;
