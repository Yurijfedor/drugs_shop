import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDrugs,
  fetchPhgarmacies,
  fetchDrugsByPhgarmacyId,
  fetchOrderByUser,
} from "./operations";

const initialState = {
  drugs: [],
  pharmacies: [],
  cart: [],
  favoriteDrugs: [],
  ordersHistory: [],
  loading: false,
  error: null,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {
    addDrugToCart(state, action) {
      state.cart = [action.payload, ...state.cart];
    },
    removeDrugFromCart(state, action) {
      state.cart = state.cart.filter((drug) => drug._id !== action.payload);
    },
    changeCounter(state, action) {
      state.cart = state.cart.map((item) =>
        item._id === action.payload.id
          ? { ...item, counter: action.payload.counter }
          : item
      );
    },
    setFavoriteDrugs(state, action) {
      if (state.favoriteDrugs.includes(action.payload)) {
        state.favoriteDrugs = state.favoriteDrugs.filter(
          (drugId) => drugId !== action.payload
        );
      } else {
        state.favoriteDrugs = [...state.favoriteDrugs, action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhgarmacies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrugsByPhgarmacyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = [...action.payload];
      })
      .addCase(fetchDrugsByPhgarmacyId.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = [...action.payload];
      })
      .addCase(fetchPhgarmacies.fulfilled, (state, action) => {
        state.loading = false;
        state.pharmacies = [...action.payload];
      })
      .addCase(fetchOrderByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.ordersHistory = [...action.payload];
      })

      .addCase(fetchDrugs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDrugsByPhgarmacyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOrderByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPhgarmacies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addDrugToCart,
  removeDrugFromCart,
  changeCounter,
  setFavoriteDrugs,
} = drugsSlice.actions;

export default drugsSlice.reducer;
