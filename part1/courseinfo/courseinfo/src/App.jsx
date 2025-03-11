const Header = (props) => <h1>{props.course}</h1>

const Content = ({ part }) => (
  <div>
    <Part part={part} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({ course }) => {
  return(
    <div>
      <Header course={course.name}/>
      {course.parts.map(part => 
      <Content key={part.id} part={part}/>
      )}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App