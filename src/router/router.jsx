import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashbord from "../layout/dashbord";
import Main from "../layout/main";
import LogIn from "../log/logIn";
import Register from "../register/register";
import History from "../shared/history/history";
import PrivetRouter from "./privetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LogIn></LogIn>,
      },
      {
        path: "/singup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <Dashbord></Dashbord>
      </PrivetRouter>
    ),
    children: [
      {
        path: "user",
        element: <App></App>,
      },
      {
        path: "history",
        element: <History></History>,
      },
    ],
  },
]);

export default router;
