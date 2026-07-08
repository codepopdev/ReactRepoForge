import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/components/shared/utils/context/AuthContext";
import MasterLayout from "@/components/core/layout/MasterLayout";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <MasterLayout />;
};

export default ProtectedRoute;
