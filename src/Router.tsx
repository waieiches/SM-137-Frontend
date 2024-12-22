import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ComplaintContent from "./components/content/ComplaintContent";
import { mockData } from "./mockData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      //임시, 삭제
      {
        path:"temp",
        element: <ComplaintContent data={mockData}/>
      }
    ],
  },
]);
