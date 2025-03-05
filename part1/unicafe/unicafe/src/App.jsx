import { useState } from "react"
const Header  = ({ text }) =>{
  return(
    <h1>{text}</h1>
  )
}

const Statistic = ({ text, number}) =>{
  return(
    <div>
    {text} {number}
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
  
return(
  <div>
    <Header text='give feedback'/>
    <Button onClick={handleGood} text='good'/>
    <Button onClick={handleNeutral} text='neutral'/>
    <Button onClick={handleBad} text='bad'/>
    <Header text='statistics'/>
    <Statistic text='good' number={good}/>
    <Statistic text='neutral' number={neutral}/>
    <Statistic text='bad' number={bad}/>
  </div>
)
}

export default App
