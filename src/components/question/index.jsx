import { Input } from "antd"

const Question = ({ question }) => {
  return (
    <div className="question">
      <h5>{question}</h5>
      <Input placeholder="جواب" />
    </div>
  )
}

export default Question
