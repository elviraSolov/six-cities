import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import { setOffers } from './action';
// import { OFFERS } from '../mocks/offers';

const store = configureStore({
  reducer: reducer,
});

// store.dispatch(setOffers(OFFERS));

export default store;

