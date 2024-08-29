import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const PLACES_COUNT = 10;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={ PLACES_COUNT } />
  </React.StrictMode>,
);
