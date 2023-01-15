import GuestLayout from "../../layouts/guest-layout"
import { useState } from "react"
import { Button, Steps, Input } from "antd"
import SignatureCanvas from "react-signature-canvas"

const PersonalForm = ({ onSuccess }) => {
  return (
    <div>
      <p>Personal Form</p>
      <Input placeholder="نام" />
      <Input placeholder="نام خانوادگی" />
      <Input placeholder="شماره موبایل" />
      <Input placeholder="ایمیل" />
      <Button onClick={onSuccess}>تایید و ادامه</Button>
    </div>
  )
}

const DetailsForm = ({ onSuccess }) => {
  return (
    <div>
      <p>Details Form</p>
      <Input placeholder="کد ملی" />
      <Input placeholder="شماره شناسنامه" />
      <Input placeholder="محل تولد" />
      <Input placeholder="تاریخ تولد" />
      <Input placeholder="شماره حساب" />
      <Input placeholder="شماره کارت" />
      <Input placeholder="شماره شبا" />
      <Button onClick={onSuccess}>تایید</Button>
    </div>
  )
}

const SignatureForm = ({ onSuccess }) => {
  return (
    <div>
      <p>Signature Form</p>
      <p>با این متن موافقم</p>
      <SignatureCanvas
        penColor="grey"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
      <Button onClick={onSuccess}>تایید</Button>
    </div>
  )
}

const SignupDetailsPage = () => {
  const [current, setCurrent] = useState(0)
  const description = "This is a description."
  const items = [
    {
      title: "Finished",
      description,
    },
    {
      title: "In Progress",
      description,
    },
    {
      title: "Waiting",
      description,
    },
  ]

  return (
    <GuestLayout>
      <Steps current={current} labelPlacement="vertical" items={items} />
      {current === 0 && (
        <PersonalForm onSuccess={() => setCurrent(current + 1)} />
      )}
      {current === 1 && (
        <DetailsForm onSuccess={() => setCurrent(current + 1)} />
      )}
      {current === 2 && (
        <SignatureForm onSuccess={() => setCurrent(current + 1)} />
      )}
    </GuestLayout>
  )
}

export default SignupDetailsPage
