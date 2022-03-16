import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '../element/Button';

import User from '../asset/data/users.json';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);
  const [data, setData] = useState(localStorage.getItem('user'));
  const history = useHistory();

  const logInWithEmailAndPassword = (email, password) => {
    console.log(email, password);
    let data;
    if (User.users.find((user) => user.email === email)) {
      data = User.users.find((user) => user.email === email);

      if (data.password === password) {
        localStorage.setItem('user', data.email);
        setData(localStorage.getItem('user'));
      }
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    if (user || data) {
      history.push('/dashboard');
    }

    return function cleanup() {
      setData(null);
    };
  }, [user, data]);

  return (
    <div className="login">
      <div className="login__container">
        <h3 className="login__title">Login</h3>
        <input
          type="text"
          className="login__text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          onClick={() => logInWithEmailAndPassword(email, password)}
          isLarge
          className="btn btn-primary"
        >
          Login
        </Button>

        <Button
          onClick={signInWithGoogle}
          isLarge
          className="btn btn-secondary"
        >
          Login With Google
        </Button>
      </div>
    </div>
  );
}
export default Login;
