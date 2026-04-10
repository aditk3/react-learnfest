import { configureStore } from "@reduxjs/toolkit";
import developersReducer from "./features/developers/developersSlice";

const store = configureStore({
  reducer: {
    developers: developersReducer,
  },
});

export default store;
