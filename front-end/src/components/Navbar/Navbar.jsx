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
    <header
      className="flex items-center justify-between
    flex-wrap bg-[#F0C808] p-6 text-lg font-bold"
    >
      {
        userRole === 'customer' && (
          <>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0
              text-stone-900 hover:text-orange-600 mr-4
               cursor-pointer"
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>

            <Link
              className="block mt-4 lg:inline-block lg:mt-0
              text-stone-900 hover:text-orange-600 cursor-pointer"
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
            className="block mt-4 lg:inline-block lg:mt-0
            text-stone-900 hover:text-orange-600 mr-4 cursor-pointer"
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
        className="block mt-4 lg:inline-block lg:mt-0
        text-stone-900 mr-4"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </span>

      <button
        className="block mt-4 lg:inline-block lg:mt-0
        text-stone-900 hover:text-orange-600 mr-4 cursor-pointer"
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </header>
  );
}
// {role === 'seller' ? history.push('/seller/products') : null}

export default Navbar;
