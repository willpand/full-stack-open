const Subheader = ({ course }) => <h2>{course}</h2>

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

const Total = ({ total }) => <b>Number of exercises {total}</b>

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => 
    sum + part.exercises, 
    0)

  return(
    <div>
      <Subheader course={course.name}/>
      {course.parts.map(part => 
        <Content key={part.id} part={part}/>
      )}
      <Total total={total}/>
    </div>
  )
}

export default Course