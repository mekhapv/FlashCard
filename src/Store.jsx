import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./InfoSlice";

export const store = configureStore({
  reducer: {
    infoReducer: infoReducer,
  },
});

export default store;
