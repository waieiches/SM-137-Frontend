import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ComplaintSearch from "./pages/complaint-search/ComplaintSearch";
import View from "./pages/view/View";

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
      {
        path: "complaint-view",
        element: <View />,
      },
    ],
  },
]);
