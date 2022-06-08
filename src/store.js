import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./features/layoutSlice";
import coursesReducer from "./features/coursesSlice";
import { loadState } from "./localStorage";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    courses: coursesReducer,
  },
  persistedState: loadState(),
});

export default store;
