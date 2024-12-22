import { createBrowserRouter, Form } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ComplaintsForm from "./components/form/ComplaintsForm";

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
        path: "temp",
        element: <ComplaintsForm />,
      },
    ],
  },
]);
