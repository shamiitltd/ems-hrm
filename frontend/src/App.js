import React, { useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import CardSkeleton from './components/Skeleton/CardSkeleton'
import Logout from './components/Logout Functionality/Logout';
import './styles.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  return (<>

    <CardSkeleton></CardSkeleton>
    <Logout></Logout>



    {/* {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )} */}

  </>


  )
};

export default App;

