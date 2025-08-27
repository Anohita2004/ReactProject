function Greeting(){
    const name = "John Doe";
    return (
        <div>
            <h1> Greeting from my side!</h1>
            <p>The name is {name}
               The date is {new Date().toLocaleDateString()}
            </p>
        </div>    )
}
export default Greeting;