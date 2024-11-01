import React from 'react'
import AdressCard from '../Adress/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

function OrderSummary() {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border mr-20 ml-16 '>
            <AdressCard/>
        </div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className="col-span-2 space-y-4">
        {[1, 1, 1, 1].map((item, index) => (
          <CartItem key={index} />
        ))}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-12">
        <div className="border rounded-md mb-1 shadow-md">
          <p className="uppercase font-bold opacity-60 pb-4 text-center pt-2 ">
            Price Details
          </p>
          <hr className="border"/>
          <div className="space-y-1 font-semibold p-2">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span className="text-black">₹ 5000</span>
            </div>
            <div className="flex justify-between pt-2 text-black ">
              <span>Discount</span>
              <span className="text-green-600 line-through">₹ 2000</span>
            </div>
            <div className="flex justify-between pt-2 border-b pb-3 text-black ">
              <span>Delivery Charge</span>
              <span className="text-blue-600">free</span>
            </div>
            <div className="flex justify-between p-2 font-bold text-gray-700 ">
              <span>Total Amount</span>
              <span>₹ 3000</span>
            </div>
          </div>
        </div>
        <Button
          //   onClick={handleCheckout}
          variant="contained"
          sx={{
            width: "100%",
            padding: 1.5,
            fontWeight: 600,
            fontSize: { xs: 12, md: 16 },
            color: "white",
          }}
          color="secondary"

          //   disabled={cart.cart?.totalItem === 0}
        >
          {" "}
          Checkout
        </Button>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary