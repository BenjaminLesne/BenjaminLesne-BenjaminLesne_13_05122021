import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

//Components and Pages
import Footer from "./Components/Footer";
import MainNav from "./Components/MainNav";
import RequireAuthentification from "./Components/RequireAuthentification";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";

//dependdencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <MainNav firstName="Tony" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route
            path="/user"
            element={
              <RequireAuthentification>
                <User />
              </RequireAuthentification>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
