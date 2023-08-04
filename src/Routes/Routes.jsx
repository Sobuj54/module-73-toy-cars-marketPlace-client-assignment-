import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
  },
]);

export default router;
