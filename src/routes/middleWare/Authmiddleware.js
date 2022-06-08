import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { Dashboard } from "../../pages";

// const Authmiddleware = ({
//   component: Component,
//   layout: Layout,
//   isAuthProtected,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       if (isAuthProtected && !localStorage.getItem("authUser")) {
//         return (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         );
//       }

//       return (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       );
//     }}
//   />
// );

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  // // const auth = isAuthProtected && !localStorage.getItem("authUser");
  // const auth = isAuthProtected;
  // return auth ? <Outlet /> : <Navigate to="/login" />;
  <Route
    {...rest}
    render={(props) => {
      // if (isAuthProtected && !localStorage.getItem("authUser")) {
      //   return (
      //     <Navigate
      //       to={{ pathname: "/login", state: { from: props.location } }}
      //     />
      //   );
      // }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
// Authmiddleware.propTypes = {
//   isAuthProtected: PropTypes.bool,
//   component: PropTypes.any,
//   location: PropTypes.object,
//   layout: PropTypes.any,
// };

export default Authmiddleware;
