import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/components/shared/utils/context/AuthContext";
import AuthLayout from "@/components/core/layout/AuthLayout";
const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <AuthLayout />
  );
};

export default PublicRoute;
