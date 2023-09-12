import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './context/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AppContext>
);
