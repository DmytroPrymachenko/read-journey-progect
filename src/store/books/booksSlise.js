import { createSlice } from "@reduxjs/toolkit";
import { addBookThunk, recommendedBooksThunk } from "./operations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    recommendedBooks: [],
    totalPages: null,
    isLoading: false,
    error: null,
    path: null,
  },
  reducers: {
    setPath(state, { payload }) {
      state.path = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recommendedBooksThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(recommendedBooksThunk.fulfilled, (state, { payload }) => {
        state.recommendedBooks = payload.results;
        state.totalPages = payload.totalPages;

        state.error = null;
      })
      .addCase(recommendedBooksThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addBookThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(addBookThunk.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(addBookThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const { setPath } = booksSlice.actions;
