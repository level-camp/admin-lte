import { createBrowserRouter } from "react-router-dom"
import {
  ConfirmCodePage,
  HomePage,
  LoginPage,
  SignupDetailsPage,
  SignupPage,
} from "../pages"

const guestRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "confirm-code",
    element: <ConfirmCodePage />,
  },
  {
    path: "/signup-details",
    element: <SignupDetailsPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
])

export default guestRouter
