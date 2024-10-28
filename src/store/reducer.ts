import { createReducer } from '@reduxjs/toolkit';
import { cityLocation, cities, Sorting } from '@const';
import { Offer, SortName, City } from 'types/types';
import { setCity, setOffers, setOffersSorting, fetchOffers } from './action';

type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  offersSorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]]
  },
  offers: [],
  isOffersLoading: false,
  offersSorting: Sorting.Popular,
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
    .addCase(setOffersSorting, (state, action) => {
      state.offersSorting = action.payload;
      if (state.offersSorting === 'Popular') {
        state.offers.sort(() => 0);
      } else if (state.offersSorting === 'PriceIncrease') {
        state.offers.sort((a, b) => a.price - b.price);
      } else if (state.offersSorting === 'PriceDecrease') {
        state.offers.sort((a, b) => b.price - a.price);
      } else if (state.offersSorting === 'TopRated') {
        state.offers.sort((a, b) => b.price - a.price);
      }
    });
});
