import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import ComplaintSearch from "./pages/complaint-search/ComplaintSearch";

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
        path: "complaint-search",
        element: <ComplaintSearch />,
      },
    ],
  },
]);
