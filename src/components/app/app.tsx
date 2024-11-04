import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MainPage from '@pages/main/MainPage';
import LoginPage from '@pages/login/LoginPage';
import FavoritesPage from '@pages/favorites/FavoritesPage';
import OfferPage from '@pages/offer/OfferPage';
import NotFoundPage from '@pages/not-found/NotFoundPage';

import PrivateRoute from '@components/private-route/PrivateRoute';

import { AppRoute } from '@const';

const history = createBrowserHistory();

const App = (): JSX.Element => (
  <HistoryRouter history={history}>
    <Routes>
      <Route
        index
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesPage offers={[]} />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </HistoryRouter>
);

export default App;
