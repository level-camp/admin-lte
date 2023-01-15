import { Input, Button, Form, Divider } from "antd"
import { Link } from "react-router-dom"
import GuestLayout from "../../layouts/guest-layout"
import { GoogleOutlined } from "@ant-design/icons"
import "./styles.scss"

const LoginPage = () => {
  return (
    <GuestLayout>
      <h1 className="title">ورود</h1>
      <Form>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "لطفا شماره تلفن خود را وارد کنید" },
          ]}
        >
          <Input placeholder="شماره تلفن" size="large" type="tel" />
        </Form.Item>
        <Button
          type="primary"
          block
          htmlType="submit"
          size="large"
          className="confirm-button"
        >
          ورود
        </Button>
        <Divider>با</Divider>
        <Button block type="link">
          <GoogleOutlined /> ورود با گوگل
        </Button>
      </Form>
      <div className="link">
        حساب کاربری ندارید؟ <Link to="/signup">ثبت نام</Link>
      </div>
    </GuestLayout>
  )
}

export default LoginPage
