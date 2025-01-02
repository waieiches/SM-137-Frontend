import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import View from "./pages/view/View";
import AdminHome from "./pages/AdminHome"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "complaint-detail",
        element: <Detail />,
        },
      {
        path: "complaint-view",
        element: <View />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
    ],
  },
]);
