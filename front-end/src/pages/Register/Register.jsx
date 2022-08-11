import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD, MIN_LENGTH_NAME } from '../../helpers/constants';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const fetchRegister = async (userEmail, userPassword, userName) => {
    const fetchResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        name: userName,
      }),
    });

    const data = await fetchResponse.json();

    return data;
  };

  useEffect(() => {
    const isEmailValid = /\w+@+\w+\.+\w/.test(email);
    const isPasswordValid = password.length >= MIN_LENGTH_PASSWORD;
    const isNameValid = name.length >= MIN_LENGTH_NAME;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid));
  }, [email, password, name]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const loginResponse = await fetchRegister(email, password, name);

    if (loginResponse.message) {
      setErrorMessage(loginResponse.message);
      return;
    }

    localStorage.setItem('user', JSON.stringify(loginResponse));

    history.push('/customer/products');
  };

  return (
    <section>
      <form>
        <label htmlFor="nameI">
          Nome
          <br />
          <input
            type="text"
            id="nameI"
            placeholder="Seu nome"
            value={ name }
            data-testid="common_register__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <br />
        <label htmlFor="emailI">
          Email
          <br />
          <input
            type="text"
            id="emailI"
            placeholder="email@domain.com"
            value={ email }
            data-testid="common_register__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <br />
        <label htmlFor="passwordI">
          Senha
          <br />
          <input
            type="password"
            id="passwordI"
            placeholder="********"
            value={ password }
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ isButtonDisabled }
          onClick={ handleRegister }
        >
          Registrar
        </button>

      </form>
      <span
        data-testid="common_register__element-invalid_register"
      >
        {errorMessage}
      </span>
    </section>
  );
}
