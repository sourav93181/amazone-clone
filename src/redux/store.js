import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./todoSlice";
import PublicDataSlice from "./publicDataSlice";

export const store = configureStore({
  reducer: {
    counter: cardslice,
    publicData: PublicDataSlice,
  },
});
