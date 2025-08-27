function Person(props){
    return(
        <div>
            <h2>The name is {props.name}</h2>
            <p>This is a paragraph for age of {props.name}={props.age}</p>
        </div>
    )
}
export default Person;