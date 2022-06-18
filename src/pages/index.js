import Dashboard from "./dashboard/Dashboard";

// auth
import Login from "./authentification/Login";
import Logout from "./authentification/Logout";
import ForgetPassword from "./authentification/ForgetPassword";
import Profile from "./authentification/Profile";

// Partie eleve
// cours
import Mescours from "./mescours/Mescours";
// certifications
import Mescertifications from "./certifications/Mescertifications";
// formations
import Nosformations from "./formations/Nosformations";

// errors
import NoMatch from "./errors/NoMatch";

// Partie formateur
import CoursP from "./coursP/CoursP";
import Communication from "./communication/Communication";
import Description from "./coursP/modifier/Description";
import Programme from "./coursP/modifier/Programme";
import Tarification from "./coursP/modifier/Tarification";
import Messages from "./coursP/modifier/Messages";

// Partie cours
import Cours from "./cours/Cours";

export {
  Dashboard,
  Login,
  Logout,
  ForgetPassword,
  Profile,
  Mescours,
  Mescertifications,
  Nosformations,
  CoursP,
  Communication,
  NoMatch,
  Description,
  Programme,
  Tarification,
  Messages,
  Cours,
};
