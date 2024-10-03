import { CityName, Location } from "types/city";
import { offerType } from "@const";

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

export type Offer = {
  id: number;
  name: string;
  image: string;
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
};
