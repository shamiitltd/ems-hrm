
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

// Simulate an API call
const fakeAuthApi = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'umeshR_10' && password === 'umeshR@10') {
                resolve({ token: 'fake-jwt-token' });
            } else {
                reject('Invalid credentials!!!');
            }
        }, 1000);
    });
};

// Login action
export const login = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await fakeAuthApi(username, password);
        localStorage.setItem('token', response.token); // Store token
        dispatch({ type: LOGIN_SUCCESS, payload: response.token });
        
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

// Logout action
export const logout = () => (dispatch) => {
    localStorage.removeItem('token'); // Remove token
    dispatch({ type: LOGOUT });
};
