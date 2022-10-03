import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';
import AddProduct from './AddProduct';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import store from './store/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar></Navbar>
      <div className='container'>
         <Outlet></Outlet>
      </div>  
      </Provider>
     
    </div>
  );
}

export default App;
