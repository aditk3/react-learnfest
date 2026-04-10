import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const developersSlice = createSlice({
  name: "developers",
  initialState,
  reducers: {
    setDevelopers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDevelopers } = developersSlice.actions;
export default developersSlice.reducer;
