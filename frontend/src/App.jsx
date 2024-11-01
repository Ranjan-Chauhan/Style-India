// // import { useState } from 'react'
// import Cart from './components/Cart/Cart'
// import Footer from './components/Footer/Footer'
// import CheckOut from './components/checkOut/CheckOut'
// import Navbar from './components/navbar/Navbar'
// import Order from './components/order/Order'
// import OrederDetails from './components/order/OrederDetails'
// import HomePage from './components/Home/HomePage'
// import Product from './components/product/Product'
// import ProductDetails from './components/product/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import CustomersRoutes from './Routes/CustomersRoutes'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <Routes>
        <Route path='/*' element={<CustomersRoutes/>}></Route>
      </Routes>

    </div>
    </>
  )
}

export default App
