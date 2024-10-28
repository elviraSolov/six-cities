import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer, SortName, CityName, User } from 'types/types';
import { ApiRoute } from '@const';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_OFFERS_SORTING: 'offers/set',
  FETCH_USER_STATUS: 'user/fetch-status'
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

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  });
