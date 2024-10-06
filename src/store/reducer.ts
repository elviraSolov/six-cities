import { createReducer } from '@reduxjs/toolkit';
import { cityLocation, cities, Sorting } from '@const';
import { City } from 'types/city';
import { Offer, SortName } from 'types/offer';
import { setCity, setOffers, setOffersSorting } from './action';
import { OFFERS } from '@mocks/offers';

type State = {
  city: City;
  offers: Offer[];
  offersSorting: SortName;
};

const initialState: State = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]]
  },
  offers: OFFERS.filter((offer: Offer) => offer.city.name === cities[0]),
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
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersSorting, (state, action) => {
      // eslint-disable-next-line
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
