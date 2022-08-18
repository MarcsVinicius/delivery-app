import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD } from '../../helpers/constants';
import verifyToken from '../../helpers/verifyToken';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const isTokenValid = verifyToken(user.token);

      if (isTokenValid && user.role === 'customer') {
        history.push('/customer/products');
      }
      if (isTokenValid && user.role === 'seller') {
        history.push('/seller/orders');
      }
      if (isTokenValid && user.role === 'admin') {
        history.push('/admin/manage');
      }
    }
  }, [history]);

  useEffect(() => {
    const isEmailValid = /\w+@+\w+\.+\w/.test(email);
    const isPasswordValid = password.length >= MIN_LENGTH_PASSWORD;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  }, [email, password]);

  const fetchLogin = async (userEmail, userPassword) => {
    const fetchResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });

    const data = await fetchResponse.json();

    return data;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    const loginResponse = await fetchLogin(email, password);

    if (loginResponse.message) {
      setErrorMessage(loginResponse.message);
      return;
    }

    localStorage.setItem('user', JSON.stringify(loginResponse));

    if (loginResponse.role === 'customer') {
      history.push('/customer/products');
    }
    if (loginResponse.role === 'seller') {
      history.push('/seller/orders');
    }
    if (loginResponse.role === 'admin') {
      history.push('/admin/manage');
    }
  };

  return (
    <section>
      <form onSubmit={ handleLogin }>

        <input
          type="email"
          placeholder="Email"
          data-testid="common_login__input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />

        <input
          type="password"
          placeholder="Password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <span
          data-testid="common_login__element-invalid-email"
        >
          {errorMessage}
        </span>

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isButtonDisabled }
        >
          Login
        </button>

        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Não possui uma conta?
          </button>
        </Link>

      </form>
    </section>
  );
}
export default Login;
