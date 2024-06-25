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

      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.expireTime = Date.now() + 60 * 60 * 1000;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.refreshToken = "";
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(refreshTokensThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.expireTime = Date.now() + 60 * 60 * 1000;
      })
      .addCase(refreshTokensThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
