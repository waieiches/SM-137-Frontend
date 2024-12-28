import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ScrapPage from "./pages/my-page/ScrapPage";

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
        path: "scrap",
        element: <ScrapPage />,
      },
    ],
  },
]);
