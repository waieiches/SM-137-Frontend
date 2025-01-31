import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./pages/admin-home/AdminHome";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDetail from "./pages/admin-detail/AdminDetail";
import PrivateRoute from "./pages/PrivateRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
      <PrivateRoute>
        <AdminHome />,
      </PrivateRoute>
      )
    },
    {
      path: "login",
      element: <AdminLogin />,
    },
    {
      path: "detail",
      element: 
          <AdminDetail />
    },
  ],
);
