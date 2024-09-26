import React from 'react';
import { logoutUser } from '../api';

const Logout = ({ setLoggedIn }) => {
    const handleLogout = async () => {
        await logoutUser(); // Call logout API
        setLoggedIn(false); // Update login state
    };

    return (
        <div className="logout">
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;

