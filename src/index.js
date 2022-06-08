import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// CSS
import "../src/assets/sass/main.scss";
// Redux store
import store from "./store";
import { saveState } from "./localStorage";
import { Provider } from "react-redux";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

store.subscribe(() => {
  console.log("Saving store");
  console.log(store.getState());
  saveState(store.getState());
});

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
