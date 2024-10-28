import { createReducer } from '@reduxjs/toolkit';

import { Offer, SortName, City, User } from 'types/types';

import { cityLocation, cities, Sorting, AuthorizationStatus } from '@const';
import { setCity, setOffers, setOffersSorting, fetchOffers, fetchUserStatus, loginUser } from './action';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: cityLocation[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(setOffersSorting, (state, action) => {
      state.sorting = action.payload;
      if (state.sorting === 'Popular') {
        state.offers.sort(() => 0);
      } else if (state.sorting === 'PriceIncrease') {
        state.offers.sort((a, b) => a.price - b.price);
      } else if (state.sorting === 'PriceDecrease') {
        state.offers.sort((a, b) => b.price - a.price);
      } else if (state.sorting === 'TopRated') {
        state.offers.sort((a, b) => b.price - a.price);
      }
    });
});
