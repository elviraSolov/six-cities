import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CityName, SortName, SiteProcess } from 'types/types';
import { cities, cityLocation, StoreSlice } from '@const';

const initialState: SiteProcess = {
  city: {
    name: cities[0],
    location: cityLocation[cities[0]],
  },
  sorting: 'Popular',
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = {
        name: action.payload,
        location: cityLocation[action.payload],
      };
    },
    setOffersSorting: (state, action: PayloadAction<SortName>) => {
      state.sorting = action.payload;
    },
  },
});

export const { setCity, setOffersSorting } = siteProcess.actions;
