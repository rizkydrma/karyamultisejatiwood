import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
import { auth, logout } from '../firebase';
import Button from '../element/Button';

function Dashboard() {
  const [user] = useAuthState(auth);
  const [data, setData] = useState(localStorage.getItem('user'));
  const history = useHistory();

  const isLogout = () => {
    logout();
    setData(null);
  };

  useEffect(() => {
    if (user == null && data == null) {
      history.push('/');
    }
  }, [user, data]);

  return (
    <div className="dashboard">
      <h2 className="success">Berhasil Login</h2>
      <h1 className="text-lg success">{user ? user.email : data}</h1>
      <Button className="btn btn-secondary" isLarge onClick={isLogout}>
        Logout
      </Button>
      <Button className="btn btn-secondary" isLarge type="link" href="/home">
        Go To Home
      </Button>
    </div>
  );
}
export default Dashboard;
