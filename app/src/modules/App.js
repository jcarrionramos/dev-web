import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./home/Home";
import Login from "./login/Login";
import RequireAuth from "../helpers/requireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Página no encontrada</h1>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
