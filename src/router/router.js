import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AddTask from "../pages/AddTask";
import CompletedTask from "../pages/CompletedTask";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyTask from "../pages/MyTask";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/addtask", element: <AddTask></AddTask> },
      { path: "/mytask", element: <MyTask></MyTask> },
      { path: "/completedtask", element: <CompletedTask></CompletedTask> },
    ],
  },
]);
