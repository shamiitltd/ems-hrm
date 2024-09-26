/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const { loading, error, userInfo } = auth;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <p>{error}</p>}
            {userInfo && <p>Welcome, {userInfo.name}!</p>}
        </div>
    );
};

export default Login;*/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/authentication';
import HomePage from './HomePage';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const { loading, error, userInfo } = auth;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    // If userInfo is present, show the HomePage
    if (userInfo) {
        return <HomePage />;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
