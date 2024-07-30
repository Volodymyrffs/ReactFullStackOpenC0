const App = () => {
    const course = 'Half Stack application development'
    const parts=[
        {   name:'Fundamentals of React',
            exercises:10},
        {   name:'Using props to pass data',
            exercises:7},
        {   name:'State of a component',
            exercises:14},
    ]
    const part1 = {
        name:'Fundamentals of React',
        exercises:10
    }


    // const exercises1 = 10
    const part2 = {
        name:'Using props to pass data',
        exercises:7 }
    // const exercises2 = 7
    const part3 = {
        name:'State of a component',
        exercises:14
    }
    // const exercises3 = 14
    const Part1=(props)=> {
        console.log(props.part1.name, props.part1.exercises)
         return (

             <p>{props.part1}  {props.exercises1}</p>
                   )
    }
    const Part2=(props)=> {
        return (

            <p>{props.part2}  {props.exercises2}</p>
        )
    }
    const Part3=(props)=> {
        return (

            <p>{props.part3}  {props.exercises3}</p>
        )
    }
    const Header=(props)=>{
        return(
            <h1>{props.course}</h1>

        )

    }
    const Content = (props)=>{
        return (
            <div>
                <p>{props.parts[0].name} {props.parts[0].exercises}</p>
                <p>{props.parts[1].name} {props.parts[1].exercises}</p>
                <p>{props.parts[2].name} {props.parts[2].exercises}</p>

            </div>
        )
    }
    const Total = (props) => {
        const total=props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises

        return (
            <p>{total}</p>
        )
    }


    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />

        </div>
    )
}

export default App