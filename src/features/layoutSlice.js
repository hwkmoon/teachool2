import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("layout") === null
    ? {
        theme: "day",
        isMobile: false,
        shortSidebar: false,
      }
    : JSON.parse(localStorage.getItem("layout"));

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
