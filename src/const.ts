import { CityName, Location } from 'types/types';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const cityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
};

export const offerType = ['Apartment', 'Room', 'House', 'Hotel'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease= 'Price: low to high',
  PriceDecrease= 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
}
