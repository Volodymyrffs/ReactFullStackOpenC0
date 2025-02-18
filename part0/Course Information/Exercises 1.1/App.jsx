const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const Header=(props)=>{
        return(
            <h1>{props.course}</h1>
        )
    }
    const Content=()=>{
        return(
            <>
                <p>
                    {part1} {exercises1}
                </p>
                <p>
                    {part2} {exercises2}
                </p>
                <p>
                    {part3} {exercises3}
                </p>
            </>
        )
    }
    const Total = (props) => {
        const total=props.exercises1+props.exercises2+props.exercises3
        return (
            <>
                <p>{total}</p>
            </>
        )
    }
    return (
        <div>
            <Header course={course} />
            <Content />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}  />

        </div>
    )
}

export default App