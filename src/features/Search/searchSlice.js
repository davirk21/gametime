import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const namespace = "search";
export const fetchEvents = createAsyncThunk(
  `${namespace}/fetchEvents`,
  async (query) => {
    const res = await axios.get(
      `https://mobile-staging.gametime.co/v1/search?q=${query}`
    );
    if (res.status === 200) {
      return res.data;
    }
  }
);

export const searchSlice = createSlice({
  name: namespace,
  initialState: {
    data: {},
    loading: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchEvents.pending](state) {
      state.loading = "PENDING";
    },
    [fetchEvents.fulfilled](state, { payload }) {
      state.loading = "FULFILLED";
      state.data = payload;
    },

    [fetchEvents.rejected](state) {
      state.loading = "RJECTED";
    },
  },
});

export default searchSlice.reducer;
