import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Scrap from "./pages/scrap/Scrap";
import Complaint from "./pages/my-complaint/Complaint";

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
        path: "my-scrap",
        element: <Scrap />,
      },
      {
        path: "mypage/my-complaint",
        element: <Complaint />,
      },
    ],
  },
]);
