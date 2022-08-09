import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/login');
  }, [history]);

  return <h1>Home</h1>;
}

export default Home;
