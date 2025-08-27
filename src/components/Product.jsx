function Product(props){
    return(
        <div>
            <h2>The name is {props.name}</h2>
            <p>This is a paragraph for cost of {props.name}={props.cost}</p>
        </div>
    )
}
export default Product;