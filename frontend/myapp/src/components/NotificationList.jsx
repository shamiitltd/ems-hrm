import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/notification.css";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications/');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = (notificationId) => {
    axios.patch(`/api/notifications/${notificationId}/mark_as_read/`)
      .then((response) => {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, read: true }
              : notification
          )
        );
      })
      .catch((error) => {
        console.error('Error marking notification as read:', error);
      });
  };

  const markAllAsRead = () => {
    const unreadNotifications = notifications.filter(notification => !notification.read);
    const requests = unreadNotifications.map(notification =>
      axios.patch(`/api/notifications/${notification.id}/mark_as_read/`)
    );

    Promise.all(requests)
      .then(() => {
        setNotifications(prevNotifications =>
          prevNotifications.map(notification => ({ ...notification, read: true }))
        );
      })
      .catch(error => {
        console.error('Error marking all notifications as read:', error);
      });
  };

  // Sort notifications by created_at date
  const sortedNotifications = notifications.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <>
      <div className='notificationContainer'>
        <div className='notificationHead'>
          <button><i class="bi bi-arrow-left back"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg></i></button>
          <h2>Notifications</h2>
          <button className="AllReadButton" onClick={markAllAsRead}>
            mark all as read
          </button>
        </div>
        <hr />
        <div className='notificationList'>
          <h3 className='notificationDate'>Today</h3>
          <ul className='notifications'>
            {sortedNotifications.map((notification) => (
              <li className='notificationItem' key={notification.id} style={{ backgroundColor: notification.read ? '#f0f0f0' : 'white' }}>
                <div>
                  <strong>{notification.message}</strong>
                </div>
                <div className='notificationTime'>
                  <span>{new Date(notification.created_at).toLocaleString()}</span>
                  {/* {!notification.read && (
                <button onClick={() => markAsRead(notification.id)} style={{ marginLeft: '10px' }}>
                  Mark as Read
                </button>
              )} */}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='notificationList'>
          <h3 className='notificationDate'>Today</h3>
          <ul className='notifications'>
            <li className='notificationItem'><h4>upcoming interview with senior product designer.</h4>
              <span className='notificationTime'>just now</span></li>
            <li className='notificationItem'><h4>upcoming interview with senior product designer.</h4>
              <span className='notificationTime'>just now</span></li>
            <li className='notificationItem'><h4>upcoming interview with senior product designer.</h4>
              <span className='notificationTime'>just now</span></li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotificationList;