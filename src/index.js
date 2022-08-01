import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConfigsContextProvider from './context/ConfigsContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigsContextProvider>
      <App />
    </ConfigsContextProvider>
  </React.StrictMode>
);