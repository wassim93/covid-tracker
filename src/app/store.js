import { configureStore } from "@reduxjs/toolkit";
import countrieSlice from "../features/countries/countrieSlice";
import historySlice from "../features/historyData/historySlice";

export const store = configureStore({
  reducer: {
    countries: countrieSlice,
    history: historySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
