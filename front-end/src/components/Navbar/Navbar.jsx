import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import verifyToken from '../../helpers/verifyToken';

function Navbar() {
  const [userName, setUserName] = useState('');
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    setUserName(userData.name);

    const isTokenValid = verifyToken(userData.token);

    if (!isTokenValid) handleLogout();
  }, []);

  return (
    <header>
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
        {userName}
      </span>

      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </header>
  );
}

export default Navbar;
