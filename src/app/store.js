import { configureStore } from "@reduxjs/toolkit";
import countrieSlice from "../features/countries/countrieSlice";

export const store = configureStore({
  reducer: {
    countries: countrieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
