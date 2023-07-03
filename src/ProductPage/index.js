

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=20');
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Products Available</h2>
      <Link to={`/add-product`}>
          <button  className="but">Add Product</button>
        </Link>
      <div className="display">
        
        {products.map(item => (
          <div key={item.id} className="pro">
            <Link to={`/details/${item.id}`} className="pd-link">
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
