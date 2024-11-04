import { createReducer } from '@reduxjs/toolkit';

import { Offer, SortName, City, User, Comment } from 'types/types';

import { cityLocation, cities, Sorting, AuthorizationStatus } from '@const';
import {
  setCity,
  setOffers,
  setOffersSorting,
  fetchOffers,
  fetchUserStatus,
  loginUser,
  fetchOffer,
  fetchNearbyOffers,
  fetchComments,
  postComment,
} from './action';

type State = {
  city: City;
  offers: Offer[];
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  sorting: SortName;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]],
  },
  offers: [],
  offer: null,
  nearbyOffers: [],
  comments: [],
  isOffersLoading: false,
  isOfferLoading: false,
  sorting: Sorting.Popular,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: cityLocation[action.payload],
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
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
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
