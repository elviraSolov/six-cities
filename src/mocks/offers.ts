import { Offer } from 'types/offer';

export const OFFERS: Offer[] = [
  {
    id: 1,
    name: 'Beautiful luxurious apartment at great location',
    image: 'img/apartment-01.jpg',
    type: 'Apartment',
    price: 120,
    stars: 4,
    city: {
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
    isPremium: true,
    isBookmark: true,
  },
  {
    id: 2,
    name: 'Wood and stone place',
    image: 'img/room.jpg',
    type: 'Room',
    price: 80,
    stars: 4,
    city: {
      name: 'Paris',
    },
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
      zoom: 10,
    },
    isBookmark: true,
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    image: 'img/apartment-02.jpg',
    type: 'Apartment',
    price: 132,
    stars: 4,
    city: {
      name: 'Paris',
    },
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
      zoom: 10,
    },
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    image: 'img/apartment-03.jpg',
    type: 'Apartment',
    price: 180,
    stars: 5,
    city: {
      name: 'Amsterdam',
    },
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
      zoom: 10,
    },
    isPremium: true,
    isBookmark: true,
  },
];
