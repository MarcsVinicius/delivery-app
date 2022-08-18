import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import verifyToken from '../../helpers/verifyToken';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    setUserName(userData.name);
    setUserRole(userData.role);

    const isTokenValid = verifyToken(userData.token);

    if (!isTokenValid) handleLogout();
  }, []);

  return (
    <header>
      {
        userRole === 'customer' && (
          <>
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>

            <Link
              to="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus pedidos
            </Link>
          </>
        )
      }
      {
        userRole === 'seller' && (
          <Link
            to="/seller/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </Link>
        )
      }

      { userRole === 'administrator'
      && (
        <>
          <Link
            to="/admin/manage"
            data-testid="administrator__element-navbar-link-manager"
          >
            Gerenciar Usuários
          </Link>

          <span>
            {userName}
          </span>
        </>
      )}

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
