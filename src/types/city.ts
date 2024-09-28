import { cities } from "@const";

export type CityName = typeof cities[number];

export type Location = {
  lat: number;
  lng: number;
  zoom: number;
}

export type City = {
  name: CityName;
  location: Location;
};
