import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/app/App';
import { OFFERS } from '@mocks/offers';
import { CITY } from '@mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App city={CITY} offers={OFFERS} />
  </React.StrictMode>,
);
