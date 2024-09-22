import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
