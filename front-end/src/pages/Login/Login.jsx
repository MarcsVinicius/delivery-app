import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD } from '../../helpers/constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isEmailValid = /\w+@+\w+\.+\w/.test(email);
    const isPasswordValid = password.length >= MIN_LENGTH_PASSWORD;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  }, [email, password]);

  return (
    <section>
      <form>

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
        />

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isButtonDisabled }
        >
          Login
        </button>

        <Link
          to="/register"
          data-testid="common_login__button-register"
        >
          Não possui uma conta?
        </Link>

      </form>
    </section>
  );
}

export default Login;
