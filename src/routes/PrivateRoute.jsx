import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";
import Loader from "../components/Loader.jsx";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" />;
  return children;
}
