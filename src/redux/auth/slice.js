import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const actions = [register, logIn, logOut];

const getActions = type => actions.map(action => action[type]);

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authRegisterOrLogInSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const authLogOutSuccessReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authRefreshPendingReducer = state => {
  state.isRefreshing = true;
};

const authRefreshFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authRefreshRejactedReducer = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, authLogOutSuccessReducer)
      .addCase(refreshUser.pending, authRefreshPendingReducer)
      .addCase(refreshUser.fulfilled, authRefreshFulfilledReducer)
      .addCase(refreshUser.rejected, authRefreshRejactedReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        authRegisterOrLogInSuccessReducer
      )
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer),
});

export const authReducer = authSlice.reducer;
