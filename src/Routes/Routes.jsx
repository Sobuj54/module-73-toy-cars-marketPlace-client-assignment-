import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../pages/home/home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
