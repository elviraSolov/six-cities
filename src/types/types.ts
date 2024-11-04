import store from '@store/store';
import { cities, offerType, Sorting } from '@const';

export type CityName = (typeof cities)[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export type Offer = {
  id: number;
  price: number;
  rating: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  city: City;
  location: Location;
  previewImage: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  bedrooms: number;
  description: string;
  goods: [string];
  host: User;
  images: [string];
  maxAdults: number;
};

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & { password: string };

export type Comment = {
  id: number;
  user: User;
  date: string;
  rating: number;
  comment: string;
};

export type SortName = keyof typeof Sorting;

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
