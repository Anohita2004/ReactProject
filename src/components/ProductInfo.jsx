function ProductInfo(){
    const product={ 
        name: "Laptop",
        price: 1200,
        description: "A high-performance laptop suitable for all your computing needs."
    }
    return(
        <div>
            <h1>Product Information</h1>
            <p>This is the product information page!</p>
            <h2 className="text">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default ProductInfo;