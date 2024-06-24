import { createSlice } from "@reduxjs/toolkit";
import {
  currentThunk,
  logoutThunk,
  refreshTokensThunk,
  signInThunk,
  signUpThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: "",
    refreshToken: "",
    expireTime: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(signUpThunk.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        // state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
        // state.isLoading = false;
      })
      // .addCase(signInThunk.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.expireTime = Date.now() + 60 * 60 * 1000;
        state.refreshToken = payload.refreshToken;
        // state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        // state.isLoading = false;
      })
      // .addCase(currentThunk.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        // state.isLoading = false;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.error = payload;
        // state.isLoading = false;
      })
      // .addCase(logoutThunk.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.refreshToken = "";
        // state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        // state.isLoading = false;
      })
      // .addCase(refreshTokensThunk.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(refreshTokensThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.expireTime = Date.now() + 60 * 60 * 1000;
        // state.isLoading = false;
      })
      .addCase(refreshTokensThunk.rejected, (state, { payload }) => {
        state.error = payload;
        // state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
