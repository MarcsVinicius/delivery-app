import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function AdminNavbar() {
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
        to="/admin/manage"
        data-testid="administrator__element-navbar-link-manager"
      >
        Gerenciar Usuários
      </Link>

      <span>
        {userName}
      </span>

      <button
        type="button"
        data-testid="administrator__element-navbar-link-logout"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </header>
  );
}
