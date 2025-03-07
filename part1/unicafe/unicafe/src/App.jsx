import { useState } from "react"
const Header  = ({ text }) =>{
  return(
    <h1>{text}</h1>
  )
}

const Statistic = (props) =>{
  if (props.all === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return(
    <div>
      good {props.good} <br/>
      neutral {props.neutral} <br/>
      bad {props.bad} <br/>
      all {props.all} <br/>
      average {props.average} <br/>
      positive {props.positive} <br/>
    </div>
  )
  
}

const Button = ({ onClick, text }) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setBad(bad + 1)
  }

  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good * 100) / all + '%'
  
return(
  <div>
    <Header text='give feedback'/>
    <Button onClick={handleGood} text='good'/>
    <Button onClick={handleNeutral} text='neutral'/>
    <Button onClick={handleBad} text='bad'/>
    <Header text='statistics'/>
    <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
  </div>
)
}

export default App
