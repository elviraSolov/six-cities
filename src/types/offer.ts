import { CityName, Location } from "types/city";
import { offerType } from "@const";

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
  };
};
