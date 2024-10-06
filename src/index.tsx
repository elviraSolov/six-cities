import ReactDOM from 'react-dom/client';
import App from '@components/app/App';
import { OFFERS } from '@mocks/offers';
import { Provider } from 'react-redux';
import store from '@store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App offers={OFFERS} />
  </Provider>
);
