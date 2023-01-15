import { guestRouter } from "./router"
import { RouterProvider } from "react-router-dom"
import { ConfigProvider } from "antd"

function App() {
  return (
    <ConfigProvider direction="rtl">
      <RouterProvider router={guestRouter} />
    </ConfigProvider>
  )
}

export default App
