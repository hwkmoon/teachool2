import React from "react";
import { Redirect } from "react-router-dom";

// Layout //
import NormalLayout from "../components/NormalLayout";
import TeacherLayout from "../components/TeacherLayout";
import CourseLayout from "../components/CourseLayout";

// Pages //

import {
  Dashboard,
  Mescours,
  Mescertifications,
  Nosformations,
  CoursP,
  Communication,
  Description,
  Programme,
  Tarification,
  Messages,
  Cours,
} from "../pages";

// Auth
import { Login, Logout, ForgetPassword, Profile } from "../pages";

const authRoutes = [{ path: "/login", component: Login }];

const userRoutes = [
  { path: "/", component: Dashboard, layout: NormalLayout },
  { path: "/mescours", component: Mescours, layout: NormalLayout },
  {
    path: "/mescertifications",
    component: Mescertifications,
    layout: NormalLayout,
  },
  {
    path: "/nosformations",
    component: Nosformations,
    layout: NormalLayout,
  },
];

const teacherRoutes = [
  { path: "/", component: CoursP, layout: TeacherLayout },
  { path: "cours", component: CoursP, layout: TeacherLayout },
  {
    path: "cours/modifier/:courseId",
    component: Description,
    layout: TeacherLayout,
  },
  {
    path: "cours/modifier/:courseId/description",
    component: Description,
    layout: TeacherLayout,
  },
  {
    path: "cours/modifier/:courseId/programme",
    component: Programme,
    layout: TeacherLayout,
  },
  {
    path: "cours/modifier/:courseId/tarification",
    component: Tarification,
    layout: TeacherLayout,
  },
  {
    path: "cours/modifier/:courseId/messages",
    component: Messages,
    layout: TeacherLayout,
  },
  {
    path: "communication",
    component: Communication,
    layout: TeacherLayout,
  },
];

const courseRoutes = [
  { path: ":courseId/:courseName", component: Cours, layout: CourseLayout },
];

export { authRoutes, userRoutes, teacherRoutes, courseRoutes };
