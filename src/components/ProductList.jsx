function ProductList(){
    const products = [
        {id:1, name:'Laptop', price:1000},
        {id:2, name:'Phone', price:500},
        {id:3, name:'Lipstick', price:5400},
    ]
    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product=>(
                    <li key={product.id}>the product name:{product.name} and the product price:{product.price}</li>
                ))}

            </ul>
        </div>    )

}
export default ProductList;