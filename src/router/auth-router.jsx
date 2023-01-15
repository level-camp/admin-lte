import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages"

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
])

export default authRouter
