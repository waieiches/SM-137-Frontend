import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
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
        path: "complaint-search",
        element: <ComplaintSearch />,
      },
    ],
  },
]);
