import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function AllProducts(){
    const [products,setproducts] = useState([])
    const [searchKey,setsearchKey] = useState('')
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
    useEffect(()=>{
        if(searchKey){
            fetch(`http://localhost:4500/product/searchProducts/${searchKey}`)
        .then(res=>res.json())
        .then(products=>setproducts(products.filteredProducts))
        }
        else{
            fetch("http://localhost:4500/product/getAllProducts")
            .then(res=>res.json())
            .then(products=>setproducts(products))
        } 
    },[searchKey])
    return (
        <div>
            <input type="text" placeholder="search" onChange={(e)=>{setsearchKey(e.target.value)}}/>
            {searchKey}
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
       </div>
        
    )
}
export default AllProducts