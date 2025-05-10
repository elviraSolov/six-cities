import { CityName, Location, Offer as OfferType, SortName } from 'types/types';

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
  NotFound = '/404',
}

export enum HttpCode {
  NotFound = 404,
  Success = 200,
}

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const Comparator: {
  [key in SortName]: (a: OfferType, b: OfferType) => number;
} = {
  Popular: () => 0,
  PriceIncrease: (a, b) => a.price - b.price,
  PriceDecrease: (a, b) => b.price - a.price,
  TopRated: (a, b) => b.rating - a.rating,
};

export enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const cityLocation: { [key in CityName]: Location } = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  Amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

export const offerType = ['Apartment', 'Room', 'House', 'Hotel'];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
