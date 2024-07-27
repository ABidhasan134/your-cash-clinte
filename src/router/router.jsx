import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/main";
import LogIn from "../log/logIn";
import Register from "../register/register";

const router = createBrowserRouter([
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
]);

export default router;
