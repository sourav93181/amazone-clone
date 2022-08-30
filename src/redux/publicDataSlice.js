import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MakeRequest } from "../utils";

export const fetchPublicApi = createAsyncThunk(
  "data/fetchPublicApis",
  async () => {
    const response = await MakeRequest(
      "https://api.publicapis.org/entries"
    ).get();
    return response.entries;
  }
);

export const fetchPublicPopData = createAsyncThunk(
  "data/publicPopData",
  async (params) => {
    const response = await MakeRequest("https://datausa.io/api/data").get(
      params
    );
    return response.data;
  }
);

const publicApiSlice = createSlice({
  name: "PublicApisData",
  initialState: { data1: [], populationData: [] },
  reducers: {
    updateData(state, action) {
      state.data1 = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPublicApi.fulfilled, (state, action) => {
      state.data1 = action.payload;
    });
      
  },
});

export const { updateData } = publicApiSlice.actions;
export default publicApiSlice.reducer;
