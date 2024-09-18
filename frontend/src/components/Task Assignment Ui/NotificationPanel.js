import React from 'react';

const NotificationPanel = ({ notifications, onViewDetails }) => {
    return (
        <aside className="notification-panel">
            <h2>Task Updates</h2>
            <div className="notification-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <div className="task-title">{notification.title}</div>
                        <div>Status: {notification.status}</div>
                        <div>Timestamp: {notification.timestamp}</div>
                        <div>Assignee: {notification.assignee}</div>
                        <button onClick={() => onViewDetails(notification.id)}>View Details</button>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default NotificationPanel;
