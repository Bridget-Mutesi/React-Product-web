import React, {useState}from "react";

const AddProduct = ()=>{
    const [product, setProduct] = useState({
        name: '',
        price: '',
        discountPercentage: '',
    });

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setProduct(prevProduct =>({
            ...prevProduct,
            [name]: value,
        }));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        setProduct({
            name: '',
            price: '',
            discountPercentage: '',
        });
    };
    return (
        <div>
            <h1>New Product Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={product.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" value={product.price} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="discountPercentage">Discount Percentage:</label>
                    <input type="text" id="discountPercentage" value={product.discountPercentage} onChange={handleInputChange}/>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;