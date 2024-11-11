import type { State, Offer, Comment } from 'types/types';
import { Comparator, Sorting, StoreSlice } from '@const';
import { getCity, getSorting } from '@store/site-process/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.offer;

export const selectOffers = createSelector([getOffers, getCity, getSorting], (offers, city, sorting) =>
  offers.filter((offer) => offer.city.name === city.name).sort(Comparator[sorting]),
);

export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.comments;

export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isFavoriteOffersLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] =>
  SITE_DATA.favoriteOffers;
