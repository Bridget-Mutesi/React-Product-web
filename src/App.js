import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './Login'
import ProductPage from './ProductPage'
import ProductDetails from './ProductDetails'
import AddProduct from './AddProduct'



function App() {
  return (
    
      /* <Login/>
      <ProductPage/>
      <ProductDetails/>
      <AddProduct/> */
      
    <Router>
    <div className='main'>
      <div className='navbar'>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add-product">AddProduct</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>

        </ul>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details:productId' element={<ProductDetails/>}/>

      </Routes>
      </div>
    </Router>
      


      
  
  );
}

export default App;
