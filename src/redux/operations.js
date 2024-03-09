import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://important-coffee-antimony.glitch.me/api/";
// const BASE_URL = "http://localhost:3000/api/";

export const fetchDrugs = createAsyncThunk("drugs/fetchDrugs", async () => {
  try {
    const response = await axios.get(`${BASE_URL}drugs`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchDrugsByPhgarmacyId = createAsyncThunk(
  "drugs/fetchDrugsByPhgarmacyId",
  async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}drugs/byPharmacy/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchPhgarmacies = createAsyncThunk(
  "drugs/fetchParmacies",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}pharmacies`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  "drugs/createOrder",
  async (order) => {
    try {
      const response = await axios.post(`${BASE_URL}order`, order);
      alert(
        `Your order with id: ${response.data._id} was created. Our manager will contact you shortly `
      );
      return response.date;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const fetchOrderByUser = createAsyncThunk(
  "drugs/fetchOrderByUser",
  async ({ email, phone }) => {
    try {
      const response = await axios.get(`${BASE_URL}order/user`, {
        params: { email, phone },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
