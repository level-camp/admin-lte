import { createBrowserRouter } from "react-router-dom"
import { ConfirmCodePage, LoginPage, SignupPage } from "../pages"

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
])

export default guestRouter
