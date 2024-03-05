import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";

export const fetchDrugs = createAsyncThunk("drugs/fetchDrugs", async () => {
  try {
    const response = await axios.get(`${BASE_URL}products`);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});
