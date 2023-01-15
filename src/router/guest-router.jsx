import { createBrowserRouter } from "react-router-dom"
import { LoginPage, SignupPage } from "../pages"

const guestRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
])

export default guestRouter
