import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/auth/',
});

// Login function
export const loginUser = (credentials) => {
    return api.post('login/', credentials);
};

// Logout function
export const logoutUser = () => {
    return api.post('logout/');
};
