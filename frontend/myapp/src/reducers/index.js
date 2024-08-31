// src/reducers/index.js
import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
    notifications: notificationReducer,
});

export default rootReducer;