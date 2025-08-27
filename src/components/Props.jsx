function Parent(){
    return<Child name="React"/>;
}
function Child(props){
    return(
        <section>The child is{props.name}</section>

    )
}
export {Parent,Child};