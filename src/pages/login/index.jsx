import { Input, Button, Form } from "antd"
import { Link } from "react-router-dom"
import { GoogleOutlined } from "@ant-design/icons"
import "./styles.scss"

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="form-content">
        <h1 className="title">ورود</h1>
        <Form>
          <Form.Item
            name="username"
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
          <Button block type="link">
            <GoogleOutlined /> ورود با گوگل
          </Button>
        </Form>
        <div className="link">
          حساب کاربری ندارید؟ <Link to="/signup">ثبت نام</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
