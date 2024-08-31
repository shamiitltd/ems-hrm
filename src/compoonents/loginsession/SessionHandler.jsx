import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for Session Handling
const SessionContext = createContext();

const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes (in milliseconds)

// SessionProvider Component to wrap around the app
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  // Initialize session from sessionStorage when the app loads
  useEffect(() => {
    const savedSession = sessionStorage.getItem('session');
    if (savedSession) {
      setSession(JSON.parse(savedSession));
      resetInactivityTimeout(); // Start inactivity timer if session exists
    }

    // Set up event listeners for user activity
    const handleActivity = () => resetInactivityTimeout();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearTimeout(timeoutId); // Cleanup timer on component unmount
    };
  }, []);

  // Function to reset inactivity timer
  const resetInactivityTimeout = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timer

    // Set new timer for automatic logout
    const newTimeoutId = setTimeout(() => {
      endSession();
      alert('You have been logged out due to inactivity.');
    }, INACTIVITY_TIMEOUT);

    setTimeoutId(newTimeoutId);
  };

  // Function to start a new session
  const startSession = (userData) => {
    setSession(userData);
    sessionStorage.setItem('session', JSON.stringify(userData));
    resetInactivityTimeout(); // Reset inactivity timer on login
  };

  // Function to end the session
  const endSession = () => {
    setSession(null);
    sessionStorage.removeItem('session');
    if (timeoutId) clearTimeout(timeoutId);
  };

  return (
    <SessionContext.Provider value={{ session, startSession, endSession }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use session
export const useSession = () => {
  return useContext(SessionContext);
};
