import { combineReducers } from '@reduxjs/toolkit';

import { siteData } from './site-data/siteData';
import { siteProcess } from './site-process/siteProcess';
import { userProcess } from './user-process/userProcess';
import { StoreSlice } from '../const';

export const reducer = combineReducers({
  [StoreSlice.SiteData]: siteData.reducer,
  [StoreSlice.SiteProcess]: siteProcess.reducer,
  [StoreSlice.UserProcess]: userProcess.reducer,
});
