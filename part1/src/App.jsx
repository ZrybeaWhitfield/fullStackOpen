const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
}

const Content = (props) => {
  const p = props.parts.map(prop => prop.name + " " + prop.exercises)
  
  return (
    [p[0],<br></br>, p[1],<br></br>, p[2]]
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const total = (parts) => {
    let sum = 0;
    parts.forEach(p => sum += p.exercises)
    return sum
  }

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={total(parts)}/>
    </>
  )
}

export default App