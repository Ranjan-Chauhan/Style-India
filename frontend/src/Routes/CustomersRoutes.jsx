import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/Home/HomePage'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/Product/ProductDetails'
import Cart from '../components/Cart/Cart'
import Order from '../components/Order/Order'
import OrederDetails from '../components/Order/OrederDetails'
import CheckOut from '../components/CheckOut/CheckOut'
import Navbar from '../components/Navbar/Navbar'


function CustomersRoutes() {
  return (
    <div>
        <div>
        <Navbar />    
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkOut' element={<CheckOut/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrederDetails/>}></Route>
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomersRoutes