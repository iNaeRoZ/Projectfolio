import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Admin from "./pages/Administration/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
