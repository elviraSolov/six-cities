import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import LoginPage from '@pages/login/LoginPage';
import FavoritesPage from '@pages/favorites/FavoritesPage';
import OfferPage from '@pages/offer/OfferPage';
import NotFoundPage from '@pages/not-found/NotFoundPage';
import PrivateRoute from '@components/private-route/PrivateRoute';
import { AppRoute, AuthorizationStatus } from '@const';
import { Offer } from 'types/offer';

type AppProps = {
  offers: Offer[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
