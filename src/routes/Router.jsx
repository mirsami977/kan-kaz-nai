import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ToyDetails from "../pages/ToyDetails.jsx";
import Profile from "../pages/Profile.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ExtraPage from "../pages/ExtraPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "extra",
        element: (
          <PrivateRoute>
            <ExtraPage />
          </PrivateRoute>
        ),
      },
      { path: "forgot", element: <ForgotPassword /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
