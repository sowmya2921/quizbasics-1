import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function AllProducts(){
    const [products,setproducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/product/getAllProducts")
        .then(res=>res.json())
        .then(products=>setproducts(products))
    },[])
    function deleteProduct(id){
        fetch(`http://localhost:4500/product/deleteProduct/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="d-flex flex-wrap justify-content-between">
            {
                products.map((product,i)=>{
                    return <div className="w-25 border p-2">
                        <img src={product.image} className="img-thumbnail img-fluid" alt=""/>
                        <h5>
                           <Link to={`/productDetails/${product['_id']}`}>{product.title}</Link>
                           <button className="btn btn-danger" onClick={()=>{deleteProduct(product['_id'])}}>Delete</button>
                        </h5>
                    </div>
                })
            }
        </div>
    )
}
export default AllProducts