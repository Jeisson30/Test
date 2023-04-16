import React from "react";
//import App from "./App";
import Login from "./Components/Login";
//import Products from "./Components/Products";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);

reportWebVitals();
