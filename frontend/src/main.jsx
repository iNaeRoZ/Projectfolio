import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";

import App from "./App";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Admin from "./pages/Administration/Admin";
import ProjectId from "./pages/ProjectId/ProjectId";
import AllProjects from "./pages/AllProjects/AllProjects";

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
      {
        path: "/projects",
        element: <AllProjects />,
        loader: ({ request }) => {
          const query = new URL(request.url).search;

          return connexion
            .get(`/projects${query}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/projects/:projectId",
        element: <ProjectId />,
        loader: ({ params }) => {
          return connexion
            .get(`/projects/${params.projectId}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
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
