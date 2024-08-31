import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const auth = useSelector(state => state.auth);
  const { userInfo } = auth;

  return (
    <div>
      {userInfo ? (
        <div>
          <h1>Dashboard</h1>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;