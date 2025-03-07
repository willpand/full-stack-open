import { useState } from 'react'

const Header = ({ text }) => {
  return(
    <h1>{text}</h1>
  )
}
const Anecdote = ({ anecdotes, votes, selected }) => {
  return(
    <div>
        {anecdotes[selected]} <br/>
        has {votes[selected]} votes.
    </div>
  )
}
const Button = ({ text, onClick }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleClickNext = () => {
    const randint = Math.floor(Math.random() * anecdotes.length)
    setSelected(randint)
  }

  const handleClickVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const indexOfMax = (arr) => {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
  }

  const selectedMax = indexOfMax(votes)
  console.log(selectedMax)

  return(
    <>
      <Header text='Anecdote of the day'/>
      <Anecdote anecdotes={anecdotes} votes={votes} selected={selected}/>
      <Button onClick={handleClickVote} text='vote'/>
      <Button onClick={handleClickNext} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <Anecdote anecdotes={anecdotes} votes={votes} selected={selectedMax}/>
    </>
  )
}

export default App
