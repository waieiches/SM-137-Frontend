import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./pages/admin-home/AdminHome";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDetail from "./pages/admin-detail/AdminDetail";
import ContentGrid from "./pages/admin-detail/ContentGrid";

export const router = createBrowserRouter([
  {
    path: "admin",
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "detail",
        element: <AdminDetail />,
      },
      {
        path: "test",
        element: <ContentGrid />,
      },
    ],
  },
]);
