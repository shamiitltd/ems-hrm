// src/reducers/notificationReducer.js
import { ADD_NOTIFICATION, MARK_AS_READ } from '../actions/notificationActions';

const initialState = [];

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [...state, action.payload];
        case MARK_AS_READ:
            return state.map((notification) =>
                notification.id === action.payload
                    ? { ...notification, isRead: true }
                    : notification
            );
        default:
            return state;
    }
};

export default notificationReducer;