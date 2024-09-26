import React from 'react';
import Logout from './Logout';

const Dashboard = ({ setLoggedIn }) => {
    return (
        <div className="dashboard">
            <h2>Welcome to the Dashboard!</h2>
            <Logout setLoggedIn={setLoggedIn} />
        </div>
    );
};

export default Dashboard;

