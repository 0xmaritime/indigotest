import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PasswordPopup from './components/PasswordPopup';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppWithAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <PasswordPopup onSuccess={() => setAuthenticated(true)} />;
  }
  return <App />;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithAuth />
    </BrowserRouter>
  </React.StrictMode>
);
