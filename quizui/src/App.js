import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';
import AddProduct from './AddProduct';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
         <Outlet></Outlet>
      </div>  
    </div>
  );
}

export default App;
