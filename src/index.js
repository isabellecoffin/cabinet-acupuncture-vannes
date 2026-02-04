import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optionnel si tu veux du CSS de base

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
