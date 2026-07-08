import MasterLayout from "@/components/core/layout/MasterLayout";
import Dashboard from "@/components/pages/dashboard/Dashboard";
import AddCategory from "@/components/pages/products/AddCategory";
import AddProduct from "@/components/pages/products/AddProduct";
import AllProducts from "@/components/pages/products/AllProducts";
import Category from "@/components/pages/products/Category";
import Products from "@/components/pages/products/Products";
import Stoked from "@/components/pages/products/Stoked";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Login from "@/components/auth/signin/Login";
const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "",
            index: true,
            element: <AllProducts />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "add-category",
            element: <AddCategory />,
          },
          {
            path: "availble",
            element: <Stoked />,
          },
        ],
      },
    ],
  },
]);
export default router;
