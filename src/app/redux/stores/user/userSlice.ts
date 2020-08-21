import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moduleName from './constants';

export interface UserState {
  user: string;
  role: string;
  token: string;
}

const userSlice = createSlice({
  name: moduleName,
  initialState: {
    info: {},
    token: '',
    isAuthenticated: false,
  },
  reducers: {
    userLoginSuccess(state, {payload}: PayloadAction<{user: any}>) {
      return {
        ...state,
        info: {
          ...payload,
        },
        isAuthenticated: true,
      };
    },
    setTokenSuccess(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      return {
        ...state,
        token: '',
        info: {},
        isAuthenticated: false,
      };
    },
  },
});

export const setTokenAction = (data: any) => ({
  type: 'user/setToken',
  payload: data,
});

export const userLoginRequest = () => ({
  type: 'user/login',
});

export const userExitAction = () => ({
  type: 'user/logout',
});

export const {userLoginSuccess, setTokenSuccess, logout} = userSlice.actions;

export default userSlice.reducer;
