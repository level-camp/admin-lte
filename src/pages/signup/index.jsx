import { Input, Button, Form, Divider } from "antd"
import { Link } from "react-router-dom"
import { GoogleOutlined } from "@ant-design/icons"
import GuestLayout from "../../layouts/guest-layout"
import "./styles.scss"

const SignupPage = () => {
  return (
    <GuestLayout>
      <h1 className="title">ثبت نام</h1>
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
          size="large"
          type="primary"
          className="confirm-button"
          block
          htmlType="submit"
        >
          ثبت نام
        </Button>
        <Divider>با</Divider>
        <Button block type="link">
          <GoogleOutlined /> ورود با گوگل
        </Button>
      </Form>
      <div className="link">
        حساب کاربری دارید؟ <Link to="/login">ورود</Link>
      </div>
    </GuestLayout>
  )
}

export default SignupPage
