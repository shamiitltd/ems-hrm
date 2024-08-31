// src/actions/notificationActions.js
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const MARK_AS_READ = 'MARK_AS_READ';

export const addNotification = (message) => {
    return {
        type: ADD_NOTIFICATION,
        payload: {
            id: Date.now(),
            message,
            createdAt: new Date().getTime(),
            isRead: false,
        },
    };
};

export const markAsRead = (id) => {
    return {
        type: MARK_AS_READ,
        payload: id,
    };
};