import { createSlice } from "@reduxjs/toolkit";
import {
  deleteReadingRecord,
  deleteUserBook,
  fetchBookInfo,
  fetchUserBooks,
  finishReadingBook,
  startReadingBook,
} from "./operations";

const userBooksSlice = createSlice({
  name: "userBooks",
  initialState: {
    userBooks: [],
    prevUserBooks: [],
    filteredUserBooks: [],
    option: null,
    bookInfo: null,
    readingState: {
      isReading: false,
      readingBookId: null,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    getfilteredUserBooks(state, { payload }) {
      if (state.userBooks.length !== 0) {
        if (payload === "all-books") {
          state.filteredUserBooks = state.userBooks;
        } else {
          state.filteredUserBooks = state.userBooks.filter(
            (book) => book.status === payload
          );
        }
      }
    },
    setOption(state, { payload }) {
      state.option = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBooks.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUserBooks.fulfilled, (state, { payload }) => {
        state.prevUserBooks = state.userBooks;
        state.userBooks = payload;

        state.error = null;

        if (state.readingState.isReading && state.readingState.readingBookId) {
          const readingBookExists = state.userBooks.some(
            (book) => book._id === state.readingState.readingBookId
          );
          if (!readingBookExists) {
            state.readingState = {
              isReading: false,
              readingBookId: null,
            };
          }
        }
      })
      .addCase(fetchUserBooks.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteUserBook.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteUserBook.fulfilled, (state, { payload }) => {
        state.userBooks = state.userBooks.filter(
          (book) => book._id !== payload.id
        );

        state.error = null;

        if (state.readingState.isReading && state.readingState.readingBookId) {
          const readingBookExists = state.userBooks.some(
            (book) => book._id === state.readingState.readingBookId
          );
          if (!readingBookExists) {
            state.readingState = {
              isReading: false,
              readingBookId: null,
            };
          }
        }
      })
      .addCase(deleteUserBook.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchBookInfo.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchBookInfo.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;

        state.error = null;
      })
      .addCase(fetchBookInfo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(startReadingBook.pending, (state) => {
        state.error = null;
      })
      .addCase(startReadingBook.fulfilled, (state, { payload }) => {
        state.readingState = {
          isReading: true,
          readingBookId: payload._id,
        };
        state.bookInfo = payload;

        state.error = null;
      })
      .addCase(startReadingBook.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(finishReadingBook.pending, (state) => {
        state.error = null;
      })
      .addCase(finishReadingBook.fulfilled, (state, { payload }) => {
        state.readingState = {
          isReading: false,
          readingBookId: null,
        };
        state.bookInfo = payload;

        state.error = null;
      })
      .addCase(finishReadingBook.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteReadingRecord.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteReadingRecord.fulfilled, (state, { payload }) => {
        state.bookInfo = payload;
        state.error = null;
      })
      .addCase(deleteReadingRecord.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const userBooksReducer = userBooksSlice.reducer;
export const { getfilteredUserBooks, setOption } = userBooksSlice.actions;
