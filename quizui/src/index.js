import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from './AddProduct';
import Quiz from './Quiz';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/quiz' element={<Quiz></Quiz>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/productDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
