import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const recommendedBooksThunk = createAsyncThunk(
  "books/recommend",
  async ({ title = "", author = "", page = 1, limit = 10 }, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend", {
        params: { title, author, page, limit },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ?? error.message
      );
    }
  }
);

export const addBookFromRecommendations = createAsyncThunk(
  "books/add/idBook",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.post(`/books/add/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserBooks = createAsyncThunk(
  "books/UserBooks",
  async ({ status } = {}, thunkAPI) => {
    try {
      const config = status ? { params: { status } } : {};
      const { data } = await api.get("/books/own", config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserBook = createAsyncThunk(
  "books/deleteUserBook",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/books/remove/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchBookInfo = createAsyncThunk(
  "books/bookInfo",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/books/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const startReadingBook = createAsyncThunk(
  "books/startReadingBook",
  async ({ id, page }, thunkAPI) => {
    try {
      const { data } = await api.post("/books/reading/start", { id, page });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const finishReadingBook = createAsyncThunk(
  "books/finishReadingBook",
  async ({ id, page }, thunkAPI) => {
    try {
      const { data } = await api.post("/books/reading/finish", { id, page });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addBookThunk = createAsyncThunk(
  "books/add",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("books/add", body);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);

export const deleteReadingRecord = createAsyncThunk(
  "books/deleteReadingRecord",
  async ({ bookId, readingId }, thunkAPI) => {
    try {
      const { data } = await api.delete(`/books/reading`, {
        params: { bookId, readingId },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ?? error.message
      );
    }
  }
);
