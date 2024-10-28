import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CityName } from 'types/city';
import { Offer, SortName } from 'types/offer';
import { ApiRoute } from '@const';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_OFFERS_SORTING: 'offers/set',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.FETCH_OFFERS);
export const setOffersSorting = createAction<SortName>(
  Action.SET_OFFERS_SORTING
);

export const fetchOffers = createAsyncThunk(Action.FETCH_OFFERS, async (_, thunkAPI) => {
  const axios = thunkAPI.extra as AxiosInstance;
  const { data } = await axios.get<Offer[]>(ApiRoute.Offers);

  return data;
});

