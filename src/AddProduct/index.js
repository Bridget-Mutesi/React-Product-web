import React, {useState}from "react";
import { Link } from "react-router-dom";
import './sttyle.css';

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
        addProduct(); //call it when the form is submitted

        setProduct({
            name: '',
            price: '',
            discountPercentage: '',
        });
    };
    const addProduct = async ()=>{
        try{
        const response = await fetch('https://dummyjson.com/products/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
        if(response.ok){
            console.log('Product added');
        }else{
            console.log('Error adding product');
        }
    }catch (error){
        console.log('Error adding product');
    }
}
    return (
        <div className="add-product">
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
                   <button type="submit">Submit</button>
                   <Link to="/">Back to Products</Link>
                 
            </form>
        </div>
    )
}
export default AddProduct;