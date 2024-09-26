import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  return (
    <div className="app">
      {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default App;

