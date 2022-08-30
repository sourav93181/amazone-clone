
import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/cardapi/cardapi";
const cardslice = createSlice({
  name: "cards",
  initialState: { search:"",listOfObject: getData()},
  reducers: {
    onSearchChanging(state, action) {
      state.search=action.payload
    },
    
  },
    
});

export const { onChanging,onSearchChanging} = cardslice.actions;
export default cardslice.reducer;