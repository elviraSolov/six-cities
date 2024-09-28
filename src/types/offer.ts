import { CityName, Location } from "types/city";
import { offerType } from "@const";
import { Review } from "./review";

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
