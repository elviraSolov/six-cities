import { createReducer } from '@reduxjs/toolkit';
import { cityLocation, cities } from '@const';
import { City } from 'types/city';
import { Offer } from 'types/offer';
import { setCity, setOffers } from './action';
import { OFFERS } from '@mocks/offers';

type State = {
  city: City;
  offers: Offer[];
};

const initialState: State = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]]
  },
  offers: OFFERS.filter((offer: Offer) => offer.city.name === cities[0])
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
    });
});
