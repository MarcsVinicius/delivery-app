import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function AdminNavbar() {
  const [adminName, setAdminName] = useState('');

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('user')) || {};
    setAdminName(adminData.name);

    const isTokenValid = verifyToken(adminData.token);

    if (!isTokenValid) handleLogout();
  }, []);

  return (
    <header>
      <span>
        GERENCIAR USUÁRIOS
      </span>

      <span>
        {adminName}
      </span>

      <button
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </button>
    </header>
  );
}
