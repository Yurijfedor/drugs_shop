import { createSlice } from "@reduxjs/toolkit";
import { fetchDrugs } from "./operations";

const initialState = {
  drugs: [],
  loading: false,
  error: null,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = action.payload;
      })
      .addCase(fetchDrugs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default drugsSlice.reducer;
