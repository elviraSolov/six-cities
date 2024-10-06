import { createAction } from '@reduxjs/toolkit';
import { CityName } from 'types/city';
import { Offer, SortName } from 'types/offer';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set',
  SET_OFFERS_SORTING: 'offers/sort',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setOffersSorting = createAction<SortName>(Action.SET_OFFERS_SORTING);
