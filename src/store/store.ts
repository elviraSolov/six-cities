import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../api';
import { fetchOffers, fetchUserStatus } from './action';
import { createBrowserHistory } from 'history';

// eslint-disable-next-line
const history = createBrowserHistory();

const api = createApi();
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          // eslint-disable-next-line
          history,
        },
      },
    }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;
