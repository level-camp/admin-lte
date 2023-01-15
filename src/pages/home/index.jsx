import AuthLayout from "../../layouts/auth-layout"
import { Steps, Button } from "antd"
import "./styles.scss"
import { Question, TestQuestion } from "../../components"

const HomePage = () => {
  const description = "توضیحات مربوط به هر مرحله"
  return (
    <AuthLayout>
      <div className="progress-bar">
        <Steps
          current={1}
          labelPlacement="vertical"
          percent={60}
          items={[
            {
              title: "به روز رسانی",
              description,
            },
            {
              title: "به روز رسانی",
              description,
            },
            {
              title: "به روز رسانی",
              description,
            },
            {
              title: "در حال انجام",
              subTitle: "زمان تقریبی: 5 دقیقه",
              description,
            },
            {
              title: "در حال انجام",
              description,
            },
          ]}
        />
        <div className="video-container">
          <p className="video-description">باید این ویدیو رو ببینی</p>
          <Button type="primary">link video</Button>
        </div>
        <div className="questions-container">
          <TestQuestion
            question="چیشد که به اینحا رسیدیم؟"
            answers={[
              "چیشد که به اینحا رسیدیم؟",
              "1چیشد که به اینحا رسیدیم؟",
              "چیشد که به اینحا رسیدیم؟2",
              "چیشد که به اینحا رسیدیم؟3",
            ]}
          />
          <TestQuestion
            question="چیشد که به اینحا رسیدیم؟"
            answers={[
              "چیشد که به اینحا رسیدیم؟",
              "1چیشد که به اینحا رسیدیم؟",
              "چیشد که به اینحا رسیدیم؟2",
              "چیشد که به اینحا رسیدیم؟3",
            ]}
          />
          <TestQuestion
            question="چیشد که به اینحا رسیدیم؟"
            answers={[
              "چیشد که به اینحا رسیدیم؟",
              "1چیشد که به اینحا رسیدیم؟",
              "چیشد که به اینحا رسیدیم؟2",
              "چیشد که به اینحا رسیدیم؟3",
            ]}
          />
          <Question question="چیشد که به اینحا رسیدیم؟" />
          <Button type="primary" block>
            تمام
          </Button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default HomePage
