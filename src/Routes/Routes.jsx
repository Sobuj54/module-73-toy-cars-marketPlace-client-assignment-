import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../pages/home/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
