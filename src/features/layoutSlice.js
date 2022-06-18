import { createSlice } from "@reduxjs/toolkit";

const getStore = JSON.parse(localStorage.getItem("store"));
let initialState = {
  theme: "day",
  isMobile: false,
  shortSidebar: false,
};
if (getStore) JSON.parse(localStorage.getItem("store")).layout;

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.shortSidebar = action.payload;
    },
    nightDay(state, action) {
      state.theme = action.payload;
    },
    isMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { toggleSidebar, nightDay, isMobile } = layoutSlice.actions;

export default layoutSlice.reducer;
