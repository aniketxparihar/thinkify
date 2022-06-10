import React,{useEffect,useState} from 'react'
import axios from "axios"

import "./Titles.css";
const Titles = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
    };
  useEffect(() => {
    getAllProducts()
  }, []);
   return (
    products.length>0?
    <div>
      {products?.map((product) => {
          return (
            <div key={product.id}>
              <h1>Product {product.id}</h1>{" "}
              <p className="title-container">{product.title}</p>
            </div>
          );
            
      })}
    </div>
  : <div>Loading...</div>
  )
}

export default Titles