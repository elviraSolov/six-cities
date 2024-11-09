import type { State, Offer, Comment } from 'types/types';
import { StoreSlice } from '@const';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.offer;

export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.comments;
