import { createSlice } from "@reduxjs/toolkit";

const initialState =
  JSON.parse(localStorage.getItem("store")).courses === null
    ? []
    : JSON.parse(localStorage.getItem("store")).courses;

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.push(action.payload);
    },
    deleteCourse(state, action) {
      state.filter((value, idx, arr) => {
        return value !== action.payload;
      });
    },
    updateDescription(state, action) {
      const { id, title, description, category } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (existingCourse) {
        if (title) existingCourse.title = title;
        if (description) existingCourse.description = description;
        if (category) existingCourse.category = category;
      }
    },
  },
});

export const { addCourse, deleteCourse, updateDescription } =
  coursesSlice.actions;

export default coursesSlice.reducer;
