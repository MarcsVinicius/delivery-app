import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MIN_LENGTH_PASSWORD, MIN_LENGTH_NAME } from '../../helpers/constants';
import logo from '../../assets/logo.png';

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
    <section
      className="
        flex items-center justify-center w-full h-screen bg-[#F0C808] flex-col p-4
      "
    >
      <img
        src={ logo }
        alt="logo"
        className="w-[180px] mb-8 mt-[-100px]"
      />

      <form
        className="bg-white flex flex-col w-full max-w-sm p-6 rounded-lg gap-3 shadow-lg"
      >

        <input
          type="text"
          id="nameI"
          placeholder="Name"
          value={ name }
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
          className="bg-gray-100 p-4 rounded-lg font-semibold outline-none"
        />

        <input
          type="text"
          id="emailI"
          placeholder="Email"
          value={ email }
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
          className="bg-gray-100 p-4 rounded-lg font-semibold outline-none"
        />

        <input
          type="password"
          id="passwordI"
          placeholder="Password"
          value={ password }
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
          className="bg-gray-100 p-4 rounded-lg font-semibold outline-none"
        />

        <span
          data-testid="common_register__element-invalid_register"
          className="text-red-500 font-semibold text-center"
        >
          {errorMessage}
        </span>

        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ isButtonDisabled }
          onClick={ handleRegister }
          className="
            bg-gray-100
            p-4 rounded-lg
            font-semibold
            outline-none
            disabled:bg-gray-300
            disabled:text-gray-500
            font-bold
            bg-[#07A0C3]
            text-white
          "
        >
          Registrar
        </button>

      </form>
    </section>
  );
}
