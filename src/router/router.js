import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/addtask", element: <Home></Home> },
      { path: "/mytask", element: <Home></Home> },
      { path: "/completedtask", element: <Home></Home> },
    ],
  },
]);
