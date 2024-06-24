import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  currentThunk,
  logoutThunk,
  refreshTokensThunk,
  signInThunk,
  signUpThunk,
} from "../auth/operations";
import {
  addBookFromRecommendations,
  addBookThunk,
  deleteUserBook,
  fetchBookInfo,
  fetchUserBooks,
  finishReadingBook,
  recommendedBooksThunk,
  startReadingBook,
} from "../books/operations";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          currentThunk.pending,
          logoutThunk.pending,
          refreshTokensThunk.pending,
          addBookFromRecommendations.pending,
          addBookThunk.pending,
          deleteUserBook.pending,
          fetchBookInfo.pending,
          fetchUserBooks.pending,
          recommendedBooksThunk.pending,
          finishReadingBook.pending,
          startReadingBook.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          currentThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshTokensThunk.fulfilled,
          addBookFromRecommendations.fulfilled,
          addBookThunk.fulfilled,
          deleteUserBook.fulfilled,
          fetchBookInfo.fulfilled,
          fetchUserBooks.fulfilled,
          recommendedBooksThunk.fulfilled,
          finishReadingBook.fulfilled,
          startReadingBook.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          currentThunk.rejected,
          logoutThunk.rejected,
          refreshTokensThunk.rejected,
          addBookFromRecommendations.rejected,
          addBookThunk.rejected,
          deleteUserBook.rejected,
          fetchBookInfo.rejected,
          fetchUserBooks.rejected,
          recommendedBooksThunk.rejected,
          finishReadingBook.rejected,
          startReadingBook.rejected
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
