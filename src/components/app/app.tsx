import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main/MainPage';
import LoginPage from '../../pages/login/LoginPage';
import FavoritesPage from '../../pages/favorites/FavoritesPage';
import OfferPage from '../../pages/offer/OfferPage';
import NotFoundPage from '../../pages/not-found/NotFoundPage';
import PrivateRoute from '../private-route/PrivateRoute';
import { AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <MainPage offers={ offers }/> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route
          path="/favorites"
          element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth } >
              <FavoritesPage offers={ offers } />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={ <OfferPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
