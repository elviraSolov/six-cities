import store from "@store/store";
import { cities, offerType, Sorting} from "@const";

export type CityName = typeof cities[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: CityName;
  location: Location;
};

export type Point = {
  title: string,
  lat: number,
  lng: number,
}

export type Host = {
  id: number;
  avatar: string;
  name: string;
  pro?: boolean;
};

export type Offer = {
  id: number;
  name: string;
  type: typeof offerType[number];
  price: number;
  stars: number;
  isBookmark?: boolean;
  isPremium?: boolean;
  location: Location;
  city: {
    name: CityName;
    location: Location;
  };
  reviews?: Review[];
  previewImage: string;
};

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: number;
  user: User;
  date: string;
  rating: number;
  review: string;
}

export type SortName = keyof typeof Sorting;

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
