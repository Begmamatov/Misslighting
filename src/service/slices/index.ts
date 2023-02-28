import {combineReducers} from '@reduxjs/toolkit';

import appSettingsReducer from './appSettings';
import cartReducer from './cartSlice';
import favoriteSlice from './favoriteSlice';
import userReducer from './userSlice';
import ProfileSlice from './ProfileSlice';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  appSettings: appSettingsReducer,
  favorite: favoriteSlice,
  profile: ProfileSlice,
});
