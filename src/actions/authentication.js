// src/actions/authActions.js
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/authConstants';

// Login action
export const login = (email, password) => async (dispatch) => {
    try {
        // Simulate a login request
        const user = { name: 'John Doe' }; // Dummy user
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
};

// Logout action
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
