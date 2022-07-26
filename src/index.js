import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QstContextProvider } from './hooks/QstContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QstContextProvider>
      <App />
    </QstContextProvider>
  </React.StrictMode>
);

reportWebVitals();
