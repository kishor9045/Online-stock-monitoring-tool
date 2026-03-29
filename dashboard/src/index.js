import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login.js";
import {UserContextProvider} from "./components/userContext.js";
import {CookiesProvider} from "react-cookie";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContextProvider>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </UserContextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();