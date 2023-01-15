import { Radio } from "antd"
import "./styles.scss"

const TestQuestion = ({ question, answers, onAnswer }) => {
  return (
    <div className="test-question">
      <h4>{question}</h4>
      <Radio.Group name="radiogroup" defaultValue={1}>
        {answers.map((answer, index) => (
          <Radio value={answer} key={index}>
            {answer}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  )
}

export default TestQuestion
