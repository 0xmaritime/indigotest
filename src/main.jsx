import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PasswordPopup from './components/PasswordPopup';
import './main.css';

function Root() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Force password check by clearing auth state
    localStorage.removeItem('isAuthenticated');
    setAuthenticated(false);
  }, []);

  const handleSuccess = () => {
    setAuthenticated(true);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        {authenticated ? (
          <App />
        ) : (
          <PasswordPopup onSuccess={handleSuccess} />
        )}
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
