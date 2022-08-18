import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminNavbar from '../../components/Admin-navbar/Admin-Navbar';

import { MIN_LENGTH_PASSWORD, MIN_LENGTH_NAME } from '../../helpers/constants';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const history = useHistory();

  const fetchRegister = async (userName, userEmail, userPassword, userRole) => {
    const fetchResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/manage`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      }),
    });

    const data = await fetchResponse.json();

    return data;
  };

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    const isNameValid = name.length >= MIN_LENGTH_NAME;
    const isEmailValid = /\w+@+\w+\.+\w/.test(email);
    const isPasswordValid = password.length >= MIN_LENGTH_PASSWORD;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid));
  }, [name, email, password]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const registerResponse = await fetchRegister(name, email, password, role);

    if (registerResponse.message) {
      setErrorMessage(registerResponse.message);
      return;
    }

    localStorage.setItem('user', JSON.stringify(registerResponse));

    history.push('/customer/products');
  };

  return (
    <section>
      <AdminNavbar />
      <form>

        <label htmlFor="name">
          Nome
          <input
            type="name"
            id="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            placeholder="************"
            data-testid="admin_manage__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ handleChange }
          >
            <option value="seller">seller</option>
            <option value="customer">customer</option>
            <option value="administrator">administrator</option>

          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ isButtonDisabled }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>

      </form>
    </section>
  );
}
