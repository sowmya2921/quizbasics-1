import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams} from 'react-router-dom'
function ProductDetails(){
    var params = useParams()
    const [product,setproduct] = useState({})
    useEffect(()=>{
        var {id} = params
        fetch(`http://localhost:4500/product/getProductDetails/${id}`)
        .then(res=>res.json())
        .then(data=>setproduct({...data.product}))
    },[params])
    return (
        <div className="d-flex-wrap">
            <div className="w-25" p-5>
                <img className="img-fluid" src={product.image} alt="" />
            </div>
            <div className="w-50">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>{product.price}</h2> 
                
            </div>
        </div>
    )
}
export default ProductDetails