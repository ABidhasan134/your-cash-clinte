import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/main";
import LogIn from "../log/logIn";
import Register from "../register/register";
import Dashbord from "../layout/dashbord";
import PrivetRouter from "./privetRouter";

const router = createBrowserRouter
([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <LogIn></LogIn>
        },
        {
          path: "/singup",
          element: <Register></Register>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivetRouter><Dashbord></Dashbord></PrivetRouter>,
    children: [
      {
        path: "user",
        element: <App></App>
      }
    ]
  }
]);

export default router;
