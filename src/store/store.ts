import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../api';
import { fetchOffers, fetchUserStatus } from './action';

const api = createApi();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});

store.dispatch(fetchOffers());
store.dispatch(fetchUserStatus());

export default store;

