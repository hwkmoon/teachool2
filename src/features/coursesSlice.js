import { createSlice } from "@reduxjs/toolkit";
import { isEmptyObject } from "../utils/check";

const getStore = JSON.parse(localStorage.getItem("store"));
let initialState = [];
if (getStore) initialState = JSON.parse(localStorage.getItem("store")).courses;

console.log(initialState);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.push(action.payload);
      state[state.length - 1].sections = [
        {
          sectionName: "Introduction",
          sessions: [
            { sessionName: "Introduction", contenu: {}, ressources: {} },
          ],
        },
      ];
    },
    deleteCourse(state, action) {
      return state.filter((course) => course.id !== action.payload);
    },
    updateDescription(state, action) {
      const {
        id,
        title,
        description,
        objectifs,
        prerequis,
        category,
        price,
        promotion,
      } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (existingCourse) {
        if (title) existingCourse.title = title;
        if (description) existingCourse.description = description;
        if (objectifs) existingCourse.objectifs = objectifs;
        if (prerequis) existingCourse.prerequis = prerequis;
        if (category) existingCourse.category = category;
        if (price) existingCourse.price = price;
        if (promotion) existingCourse.promotion = promotion;
        if (promotion !== 0)
          existingCourse.pricefinal = (price * (100 - promotion)) / 100;
      }
    },
    addSection(state, action) {
      const { id, title, position } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (position === "before")
        existingCourse.sections.unshift({
          sectionName: title,
          sessions: [
            { sessionName: "Introduction", contenu: {}, ressources: {} },
          ],
        });
      else
        existingCourse.sections.push({
          sectionName: title,
          sessions: [
            { sessionName: "Introduction", contenu: {}, ressources: {} },
          ],
        });
    },
    updateSection(state, action) {
      const { id, sectionIndex, sectionName } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (sectionName)
        existingCourse.sections[sectionIndex].sectionName = sectionName;
    },
    deleteSection(state, action) {
      const { id, sectionIndex } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      existingCourse.sections.splice(sectionIndex, 1);
    },
    addSession(state, action) {
      const { id, title, position, index } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (position === "before")
        existingCourse.sections[index].sessions.unshift({
          sessionName: title,
          contenu: { video: "", article: {} },
          ressources: {},
          video: "",
        });
      else
        existingCourse.sections[index].sessions.push({
          sessionName: title,
          contenu: {},
          ressources: {},
          video: "",
        });
    },
    updateSession(state, action) {
      const { id, sectionIndex, sessionIndex, sessionName } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (sessionName)
        existingCourse.sections[sectionIndex].sessions[
          sessionIndex
        ].sessionName = sessionName;
    },
    deleteSession(state, action) {
      const { id, sectionIndex, sessionIndex } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      existingCourse.sections[sectionIndex].sessions.splice(sessionIndex, 1);
    },
    updateContenu(state, action) {
      const { id, sectionIndex, sessionIndex, contenu, video } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      const session =
        existingCourse.sections[sectionIndex].sessions[sessionIndex];
      if (!isEmptyObject(contenu)) session.contenu = contenu;
      session.video = video;
    },
  },
});

export const {
  addCourse,
  deleteCourse,
  updateDescription,
  addSection,
  addSession,
  updateSection,
  deleteSection,
  updateSession,
  deleteSession,
  updateContenu,
} = coursesSlice.actions;

export default coursesSlice.reducer;
