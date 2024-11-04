import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { Offer, SortName, CityName, User, UserAuth } from 'types/types';

import { ApiRoute } from '@const';
import { Token } from '@utils';
// import { History } from 'history';

// type Extra = {
//   api: AxiosInstance;
//   history: History;
// };

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_OFFERS_SORTING: 'offers/set',
  LOGIN_USER: 'uder/login',
  FETCH_USER_STATUS: 'user/fetch-status',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'offers/fetch-nearby',
  FETCH_COMMENTS: 'offer/fetch-comments',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.FETCH_OFFERS);
export const setOffersSorting = createAction<SortName>(Action.SET_OFFERS_SORTING);

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
  },
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { extra: AxiosInstance }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const { token } = data;

    Token.save(token);
    // TODO: добавить возврат на предыдущую страницу при успешной авторизации
    // history.push(AppRoute.Root);

    return email;
  },
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], { extra: AxiosInstance }>(
  Action.FETCH_OFFER,
  async (id, { extra: api }) => {
    // const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

    // return data;
    try {
      const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      // const axiosError = error as AxiosError;

      // TODO: добавить возврат на предыдущую страницу при успешной авторизации
      // if (axiosError.response?.status === HttpCode.NotFound) {
      //   history.pushState(AppRoute.NotFound);
      // }

      return Promise.reject(error);
    }
  },
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], Offer['id'], { extra: AxiosInstance }>(
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  },
);

export const fetchComments = createAsyncThunk<Comment[], Offer['id'], { extra: AxiosInstance }>(
  Action.FETCH_COMMENTS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);

    return data;
  },
);
