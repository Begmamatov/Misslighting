import requests from '@api/requests';
import {LoginResponse} from '@api/types';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from '@store/configureStore';
import {userLoggedOut} from './userSlice';
import NavigationService from '@routes/NavigationService';
import {clearAllCarts} from './cartSlice';
import {clearFavoriteData} from './favoriteSlice';

type Props = Partial<LoginResponse> & {
  isLoading: boolean;
  isLoadingOfBtn: boolean;
};
const defaultState: Props = {
  isLoading: false,
  isLoadingOfBtn: false,
};

const profileSlice = createSlice({
  initialState: defaultState,
  name: 'profile',
  reducers: {
    updateProfile: (state, action: PayloadAction<{data: LoginResponse}>) => {
      return {
        ...state,
        ...action.payload.data,
      };
    },

    showLoading: state => ({...state, isLoading: true}),
    hideLoading: state => ({...state, isLoading: false}),
    showLoadingOfBtn: state => ({...state, isLoadingOfBtn: true}),
    hideLoadingOfBtn: state => ({...state, isLoadingOfBtn: false}),

    clear: () => defaultState,
  },
});

export const {
  clear,
  showLoading,
  hideLoading,
  updateProfile,
  hideLoadingOfBtn,
  showLoadingOfBtn,
} = profileSlice.actions;

export const getProfileData = () => async (dispatch: AppDispatch) => {
  dispatch(clear());
  dispatch(showLoading());
  try {
    const res = await requests.profile.getProfile();
    dispatch(updateProfile({data: res.data.data}));

    dispatch(hideLoading());
  } catch (err) {
    console.log('Error-[getProfileData]:', err);
  }
};

const allClearOfStates = () => (dispatch: AppDispatch) => {
  dispatch(userLoggedOut());
  dispatch(clear());
  dispatch(clearAllCarts());
  dispatch(clearFavoriteData());
  NavigationService.navigate('HOME');
};

export const deleteAccountData = () => async (dispatch: any) => {
  dispatch(showLoadingOfBtn());
  try {
    const res = await requests.profile.removAcount();
    dispatch(allClearOfStates());
  } catch (err) {
    console.log('Error-[deleteAccount]:', err);
  }
};

export default profileSlice.reducer;
