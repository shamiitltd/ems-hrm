// Import action types
/*
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/authActions12';

// Initial state setup
const initialState = {
    loading: false,
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    error: null,
};

// Reducer function
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            // Save user info to localStorage
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return { loading: false, userInfo: action.payload, error: null };
        case LOGIN_FAILURE:
            return { loading: false, userInfo: null, error: action.payload };
        case LOGOUT:
            // Clear user info from localStorage
            localStorage.removeItem('userInfo');
            return { loading: false, userInfo: null, error: null };
        default:
            return state;
    }
};

export default authReducer;*/

// src/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/authConstants';

const initialState = {
    userInfo: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userInfo: action.payload, loading: false };
        case LOGIN_FAIL:
            return { ...state, error: action.payload, loading: false };
        case LOGOUT:
            return { ...state, userInfo: null };
        default:
            return state;
    }
};

export default authReducer;
