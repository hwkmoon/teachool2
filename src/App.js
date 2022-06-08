import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports Routes
import { userRoutes, authRoutes, teacherRoutes } from "./routes/allRoutes";

// Import all middleware
import Authmiddleware from "./routes/middleWare/Authmiddleware";

import { NoMatch } from "./pages";

// Layout //
import NormalLayout from "./components/NormalLayout";
import TeacherLayout from "./components/TeacherLayout";

// CSS injection order to gives MUI precedence over custom styles
import { StyledEngineProvider } from "@mui/material/styles";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<NormalLayout />}>
            {userRoutes.map((route, idx) => {
              if (route.path === "/") {
                return <Route key={idx} index element={<route.component />} />;
              } else {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.component />}
                  />
                );
              }
            })}
          </Route>
          <Route path="/formateur" element={<TeacherLayout />}>
            {teacherRoutes.map((route, idx) => {
              if (route.path === "/") {
                return <Route key={idx} index element={<route.component />} />;
              } else {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.component />}
                  />
                );
              }
            })}
          </Route>
          <Route path="*" element={<NoMatch />} />
          {/* {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))} */}
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
};

export default App;
