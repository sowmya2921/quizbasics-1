import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-info navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                           <Link to="/quiz" class="nav-link active">Quiz</Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/addProduct" class="nav-link active">Add Product</Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/allProducts" class="nav-link active">All Product</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar