import { Offer } from 'types/offer';

export const OFFERS: Offer[] = [
  {
    id: 1,
    name: 'Beautiful luxurious apartment at great location',
    previewImage: 'img/apartment-01.jpg',
    type: 'Apartment',
    price: 120,
    stars: 4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isPremium: true,
    isBookmark: true,
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true,
        },
        rating: 4,
        date: '2019-04-24',
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
  {
    id: 2,
    name: 'Wood and stone place',
    previewImage: 'img/room.jpg',
    type: 'Room',
    price: 80,
    stars: 4,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isBookmark: true,
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true,
        },
        rating: 4,
        date: '2019-04-24',
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      }
    ],
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    type: 'Apartment',
    price: 132,
    stars: 4,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true,
        },
        rating: 4,
        date: '2019-04-24',
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      }
    ],
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    type: 'Apartment',
    price: 180,
    stars: 5,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    isPremium: true,
    isBookmark: true,
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true,
        },
        rating: 4,
        date: '2019-04-24',
        review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      }
    ],
  },
];
