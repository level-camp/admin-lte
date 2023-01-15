import { createBrowserRouter } from "react-router-dom"
import { ConfirmCodePage, HomePage, LoginPage, SignupPage } from "../pages"

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
    path: "/",
    element: <HomePage />,
  },
])

export default guestRouter
