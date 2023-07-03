import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import './styles.css';

const ProductPage = ()=>{
    const [products, setProducts] = useState([]); /// use state it holds the useEffect
    // setLoading 

    useEffect(()=>{                           //use effect 
        (async ()=>{
            await getProducts();    // async function
        })();
        getProducts()

    }, []);

    const getProducts = async () =>{
       try{
        const response = await fetch('https://dummyjson.com/products?limit=20')
        const result = await response.json();
        setProducts(result.products);
        // console.log("Feteched data:", result.products);
        // setLoading(false);
       }
       catch(error){
        console.log(error.message);
       }
    };
    console.log({products});
    // if(loading){
    //     return <h1>Loading...</h1>
    // }

    return(
        <div>
            <h2>Products Available</h2>
            <div className="display">
             <Link to={`/add-product`}><button>Add Product</button></Link> 
            {products.map(item =>(
                <div key={item.id} className="pro">
                     <Link to={`/details/${item.id}`} key={item.id} className="pd=link">
                     <img className="image" src={item.thumbnail} alt="visual of the product" />
                     </Link>
                    <h3>{item.title}</h3>
                    <h3>{item.brand}</h3>
                    <h3>{item.price}</h3>
                   
                    
                </div>

            ))}
            </div>
        </div>

    );
};
export default ProductPage;