import GuestLayout from "../../layouts/guest-layout"
import { Input, Button, Form, Divider } from "antd"
import "./styles.scss"

const ConfirmCodePage = () => {
  return (
    <GuestLayout>
      <h1 className="title">تایید کد</h1>
      <Form>
        <p className="description">کد تایید به شماره شما ارسال شد</p>
        <Form.Item
          name="code"
          rules={[{ required: true, message: "لطفا کد تایید را وارد کنید" }]}
        >
          <Input placeholder="کد تایید" size="large" type="tel" />
        </Form.Item>
        <Button
          size="large"
          type="primary"
          className="confirm-button"
          block
          htmlType="submit"
        >
          تایید
        </Button>
        <Divider></Divider>
        <Button size="large" className="confirm-button" block htmlType="submit">
          ارسال مجدد کد تایید
        </Button>
      </Form>
    </GuestLayout>
  )
}

export default ConfirmCodePage
